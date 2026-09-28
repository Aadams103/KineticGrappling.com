import { DisciplinePage } from "@/components/DisciplinePage";
import { createPageMetadata } from "@/lib/metadata";
import { programs } from "@/lib/site-config";

const program = programs.find((item) => item.slug === "wrestling")!;
export const metadata = createPageMetadata({ title: "Wrestling Training in College Station, TX", description: "Ask about wrestling and takedown training at Kinetic Grappling in College Station, Texas.", path: "/wrestling-college-station" });
export default function WrestlingPage() { return <DisciplinePage program={program} title="Wrestling Training in College Station" intro="Kinetic Grappling lists wrestling among its disciplines and incorporates wrestling concepts into advanced grappling." availability="Wrestling does not currently appear as a separate class title in the public Glofox calendar. Ask the coaching team which grappling session covers your goals." />; }
