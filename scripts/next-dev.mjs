import { spawn } from "node:child_process";

const incoming = process.argv.slice(2);
const args = [];
for (let index = 0; index < incoming.length; index += 1) {
  const value = incoming[index];
  if (value === "--strictPort") continue;
  if (value === "--host") {
    args.push("--hostname");
    if (incoming[index + 1]) args.push(incoming[++index]);
    continue;
  }
  args.push(value);
}

const child = spawn(process.execPath, ["node_modules/next/dist/bin/next", "dev", "--turbopack", ...args], { stdio: "inherit" });
child.on("exit", (code, signal) => signal ? process.kill(process.pid, signal) : process.exit(code ?? 0));
