import { DisciplinePage } from "@/components/DisciplinePage";
import { createPageMetadata } from "@/lib/metadata";
import { programs } from "@/lib/site-config";

const program = programs.find((item) => item.slug === "mma")!;
export const metadata = createPageMetadata({ title: "MMA Training in College Station, TX", description: "Ask about current mixed martial arts training at Kinetic Grappling in College Station, Texas.", path: "/mma-college-station" });
export default function MMAPage() { return <DisciplinePage program={program} title="MMA Training in College Station" intro="Kinetic Grappling lists MMA among its martial-arts disciplines for the College Station and Bryan area." availability="MMA does not currently appear as a separately named class on the public weekly Glofox schedule. Submit a trial request so the academy can confirm the right entry point." />; }
