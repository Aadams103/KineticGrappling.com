import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

const source = readFileSync(new URL("../src/app/api/contact/route.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const valid = { name: "Test Student", phone: "9795550100", email: "student@example.com", student: "adult" };

function handler(env = {}, provider = async () => { throw new Error("Unexpected network request"); }) {
  const exports = {};
  vm.runInNewContext(compiled, {
    exports, URL, AbortSignal, process: { env }, fetch: provider,
    require: (name) => {
      if (name === "next/server") return { NextResponse: { json: (body, options) => Response.json(body, options) } };
      if (name === "@/lib/site-config") return { siteConfig: { email: "gym@example.com" } };
      throw new Error(`Unexpected import: ${name}`);
    },
  });
  return exports.POST;
}

function request(body, headers = {}) {
  return new Request("https://preview.example/api/contact", { method: "POST", headers: { "Content-Type": "application/json", ...headers }, body: typeof body === "string" ? body : JSON.stringify(body) });
}

test("missing delivery configuration returns a prepared email, never delivery success", async () => {
  const response = await handler()(request(valid));
  const result = await response.json();
  assert.equal(response.status, 200);
  assert.equal(result.delivered, false);
  assert.match(result.mailto, /^mailto:gym@example.com\?/);
});

for (const [name, body] of [["missing required fields", {}], ["invalid email", { ...valid, email: "bad" }], ["invalid phone", { ...valid, phone: "not a phone" }], ["invalid student", { ...valid, student: "unknown" }], ["honeypot", { ...valid, website: "spam" }], ["malformed JSON", "{"], ["array body", []]]) {
  test(`rejects ${name}`, async () => {
    const response = await handler()(request(body));
    assert.equal(response.status, 400);
    assert.equal((await response.json()).ok, false);
  });
}

test("rejects cross-origin requests", async () => {
  assert.equal((await handler()(request(valid, { origin: "https://unrelated.example" }))).status, 403);
});

test("rejects oversized requests", async () => {
  assert.equal((await handler()(request({ ...valid, message: "a".repeat(10_001) }))).status, 413);
});

test("a key without a verified sender does not send", async () => {
  assert.equal((await (await handler({ RESEND_API_KEY: "test-only" })(request(valid))).json()).delivered, false);
});

test("successful provider acceptance is reported accurately", async () => {
  const post = handler({ RESEND_API_KEY: "test-only", TRIAL_FORM_FROM_EMAIL: "verified@example.com" }, async (url, options) => {
    assert.equal(url, "https://api.resend.com/emails");
    const body = JSON.parse(options.body);
    assert.equal(body.from, "verified@example.com");
    assert.equal(body.reply_to, valid.email);
    return Response.json({ id: "test-message" });
  });
  assert.equal((await (await post(request(valid))).json()).delivered, true);
});

for (const [name, provider] of [["provider rejection", async () => new Response(null, { status: 500 })], ["network failure", async () => { throw new Error("offline"); }]]) {
  test(`${name} returns an explicit unsent email fallback`, async () => {
    const post = handler({ RESEND_API_KEY: "test-only", TRIAL_FORM_FROM_EMAIL: "verified@example.com" }, provider);
    const result = await (await post(request(valid))).json();
    assert.equal(result.delivered, false);
    assert.match(result.mailto, /^mailto:/);
  });
}
