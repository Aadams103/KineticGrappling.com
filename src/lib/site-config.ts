export const siteConfig = {
  name: "Kinetic Grappling",
  tagline: "Brazilian Jiu-Jitsu Academy",
  description: "Brazilian Jiu-Jitsu, no-gi grappling, MMA, wrestling, and kids martial arts in College Station, Texas. View the schedule and start a free trial.",
  url: "https://www.kineticgrappling.com",
  domain: "KineticGrappling.com",
  phone: "(979) 217-1817",
  phoneHref: "tel:+19792171817",
  email: "AmbroseAdams@KineticGrappling.com",
  emailHref: "mailto:AmbroseAdams@KineticGrappling.com",
  address: { street: "12700 SH 30 #201", city: "College Station", state: "TX", full: "12700 SH 30 #201, College Station, TX" },
  officeHours: "10:00 AM–4:00 PM while school is in session; call to confirm availability",
  serviceAreas: ["College Station", "Bryan", "Brazos Valley"],
  social: {
    googleMaps: "https://www.google.com/maps/search/?api=1&query=Kinetic+Grappling+12700+SH+30+%23201+College+Station+TX",
    facebook: "https://www.facebook.com/kineticgrappling",
    instagram: "https://www.instagram.com/kineticgrappling",
  },
  booking: {
    glofox: "https://app.glofox.com/portal/#/branch/633dbcbd8913051c01374553/classes-day-view",
    memberships: "https://app.glofox.com/portal/#/branch/633dbcbd8913051c01374553/memberships",
  },
  localSeoText: "Brazilian Jiu-Jitsu academy serving College Station, Bryan, and the Brazos Valley.",
  primaryCta: "Start Free Trial",
  secondaryCta: "View Schedule",
  contactPath: "/free-trial",
  nav: [
    { label: "Programs", href: "/programs" }, { label: "Schedule", href: "/schedule" },
    { label: "Pricing", href: "/membership" }, { label: "Coaches", href: "/coaches" }, { label: "About", href: "/about" },
  ],
  footerExtra: [
    { label: "Reviews", href: "/reviews" }, { label: "FAQ", href: "/faq" },
    { label: "Resources", href: "/blog" }, { label: "Contact", href: "/contact" },
  ],
  ctaNav: { label: "Start Free Trial", href: "/free-trial" },
} as const;

export const dataVerification = {
  schedule: "Core evening classes and Saturday No-Gi competition start confirmed by Kinetic Grappling on September 9, 2026. Additional sessions and Saturday's end time are from the September 7 Glofox calendar; check live booking before attending.",
  pricing: "Verified against the public Kinetic Grappling Glofox membership portal on September 7, 2026.",
} as const;

export const brandAssets = {
  logoHeader: "/images/kinetic-grappling-logo.png", logoFooter: "/images/kinetic-grappling-logo.png",
  logoAlt: "Kinetic Grappling Brazilian Jiu-Jitsu Academy", favicon: "/images/favicon.png",
  heroImage: "/images/hero-bjj-training.jpg", heroAlt: "Kinetic Grappling students training Brazilian Jiu-Jitsu on the academy mats",
  firstClassImage: "/images/first-class.jpg", firstClassAlt: "A Kinetic Grappling coach teaching a youth Brazilian Jiu-Jitsu class",
} as const;

export const trustBadges = ["Adults + Kids", "Beginner Friendly", "Gi + No-Gi", "Competition Training"] as const;

export const audiences = [
  { title: "Adults starting BJJ", description: "Dedicated gi fundamentals sessions make the first class and weekly path easier to understand." },
  { title: "Kids and families", description: "Age-based programs separate Little Grapplers ages 3–5 from Kids BJJ Fundamentals ages 6–12." },
  { title: "College Station and Bryan", description: "A local training option for students, professionals, and families across the Brazos Valley." },
  { title: "Developing competitors", description: "Saturday no-gi competition training focuses on students progressing beyond fundamentals." },
] as const;

export const academyCopy = {
  welcome: "Training with a clear path",
  tagline: "Serious coaching. A room beginners can enter.",
  intro: "Kinetic Grappling teaches Brazilian Jiu-Jitsu, no-gi grappling, wrestling, and MMA to adults and children in College Station and Bryan.",
  findYourFit: "The academy pairs technical instruction with a clean, team-oriented environment. Students can train for fitness, practical self-defense, competition, or long-term skill development.",
  gymForAll: "Programs are organized for young children, school-age kids, adult beginners, experienced grapplers, and competitors. Start with the class that fits your age and experience, then let the coaches guide progression.",
  aboutIntro: "Kinetic Grappling provides martial-arts instruction for the College Station and Bryan area, with programs for multiple ages and experience levels.",
  mission: "The academy's stated mission is to deliver high-level self-defense instruction in a clean, fun, family- and team-oriented atmosphere while building fitness, confidence, respect, and integrity.",
  vision: "For young students, the program emphasizes discipline, perseverance, coordination, and a foundation that supports growth in school, sport, and daily life.",
  coachesIntro: "The coaching team leads Brazilian Jiu-Jitsu, MMA, and youth instruction across Kinetic Grappling's current programs.",
} as const;

export const benefits = [
  { title: "Technical instruction", description: "Learn positions, escapes, control, takedowns, and submissions through coached practice.", icon: "confidence" },
  { title: "Real conditioning", description: "Build strength, cardio, coordination, and mobility through skill-based training.", icon: "fitness" },
  { title: "Practical self-defense", description: "Develop calm decision-making and grappling skills for controlling difficult situations.", icon: "shield" },
  { title: "Structured youth training", description: "Age-based classes give children a clear environment for focus, discipline, and movement.", icon: "discipline" },
  { title: "Team culture", description: "Train with partners who improve through consistency, control, and mutual respect.", icon: "community" },
  { title: "Competition pathway", description: "Competition training develops advanced BJJ, wrestling, and judo concepts.", icon: "trophy" },
] as const;

export type ProgramSlug = "little-grapplers" | "kids-bjj" | "adult-fundamentals" | "no-gi" | "mma" | "wrestling" | "competition" | "private-lessons";
export interface Program {
  slug: ProgramSlug; title: string; ages?: string; description: string; benefits: string[]; whoFor: string;
  cta: string; href: string; learnMoreHref: string; image: string; imageAlt: string; scheduleLabel?: string;
}

export const programs: Program[] = [
  {
    slug: "little-grapplers", title: "Little Grapplers", ages: "Ages 3–5",
    description: "A 30-minute, game-based introduction that develops fitness, confidence, coordination, and early grappling skills.",
    benefits: ["Games-based learning", "Coordination", "Listening and focus", "Early grappling skills"],
    whoFor: "Children ages 3–5 ready for a structured, active class.", cta: "Start Free Trial",
    href: "/free-trial?program=little-grapplers", learnMoreHref: "/programs#little-grapplers",
    image: "/images/little-grapplers.jpg", imageAlt: "Little Grapplers class at Kinetic Grappling",
  },
  {
    slug: "kids-bjj", title: "Kids Brazilian Jiu-Jitsu", ages: "Ages 6–12",
    description: "Structured technique instruction with less emphasis on games, developing foundational grappling skills, listening, respect, and fitness.",
    benefits: ["BJJ fundamentals", "Discipline and respect", "Fitness", "Team training"],
    whoFor: "Children ages 6–12 who are ready for more technique-focused instruction.", cta: "Start Free Trial",
    href: "/free-trial?program=kids-bjj", learnMoreHref: "/kids-jiu-jitsu-college-station",
    image: "/images/kids-bjj-class.jpg", imageAlt: "Kids Brazilian Jiu-Jitsu class at Kinetic Grappling", scheduleLabel: "Kids Brazilian Jiu-Jitsu Fundamentals",
  },
  {
    slug: "adult-fundamentals", title: "Adult BJJ Fundamentals", ages: "Adults",
    description: "Foundational grappling taught through instruction, drilling, and sparring, emphasizing effective technique across differences in size, strength, and age.",
    benefits: ["Foundational technique", "Instruction and drilling", "Sparring", "Practical control"],
    whoFor: "New and developing adult students, including people without martial-arts experience.", cta: "Start Free Trial",
    href: "/free-trial?program=adult-fundamentals", learnMoreHref: "/adult-bjj-college-station",
    image: "/images/adult-bjj-class.jpg", imageAlt: "Adult Brazilian Jiu-Jitsu class at Kinetic Grappling", scheduleLabel: "Adult Gi BJJ Fundamentals",
  },
  {
    slug: "no-gi", title: "No-Gi Fundamentals", ages: "Adults",
    description: "Adult grappling without a gi. See class times and ask a coach about the right starting point for your experience.",
    benefits: ["Grappling without a gi", "Adult fundamentals", "Class placement guidance", "Weekly training"],
    whoFor: "Adults interested in no-gi training. Ask the coaching team about prerequisites, trial eligibility, and the current class structure.", cta: "Ask About No-Gi",
    href: "/free-trial?program=no-gi", learnMoreHref: "/no-gi-grappling-college-station",
    image: "/images/no-gi-grappling.jpg", imageAlt: "No-Gi grappling at Kinetic Grappling", scheduleLabel: "Adult No-Gi BJJ Fundamentals",
  },
  {
    slug: "mma", title: "MMA", ages: "Availability varies",
    description: "Mixed martial arts is listed among Kinetic Grappling's disciplines. Contact the academy for the current training format and entry point.",
    benefits: ["Mixed-range training", "Grappling integration", "Athletic development", "Coach-guided entry"],
    whoFor: "Prospective MMA students who want current placement guidance from the coaching team.", cta: "Ask About MMA",
    href: "/free-trial?program=mma", learnMoreHref: "/mma-college-station",
    image: "/images/no-gi-grappling.jpg", imageAlt: "Grappling training at Kinetic Grappling in College Station",
  },
  {
    slug: "wrestling", title: "Wrestling", ages: "Availability varies",
    description: "Wrestling concepts are part of Kinetic's grappling offering. Ask the academy which current class best matches your experience and goals.",
    benefits: ["Takedowns", "Control", "Positioning", "Grappling crossover"],
    whoFor: "Students looking to improve takedowns and wrestling within a broader grappling program.", cta: "Ask About Wrestling",
    href: "/free-trial?program=wrestling", learnMoreHref: "/wrestling-college-station",
    image: "/images/competition-training.jpg", imageAlt: "Wrestling and grappling practice at Kinetic Grappling",
  },
  {
    slug: "competition", title: "Competition Training", ages: "Experienced students",
    description: "Advanced BJJ concepts, wrestling, and judo, with detailed refinement for personal development and competition.",
    benefits: ["Tournament preparation", "Advanced detail", "Coached drilling", "No-gi competition session"],
    whoFor: "Developing competitors and experienced students ready for higher-intensity work.", cta: "Ask About Placement",
    href: "/free-trial?program=competition", learnMoreHref: "/bjj-competition-training-college-station",
    image: "/images/competition-training.jpg", imageAlt: "Competition grappling training at Kinetic Grappling",
  },
  {
    slug: "private-lessons", title: "Private Lessons", ages: "By arrangement",
    description: "Customized one-to-one coaching focused on individual strengths, weaknesses, and personal or competition goals. Schedule directly with an instructor.",
    benefits: ["Individual coaching", "Custom focus", "Flexible arrangement", "Targeted improvement"],
    whoFor: "Students who want focused time with an instructor outside group-class instruction.", cta: "Request a Private Lesson",
    href: "/free-trial?program=private-lessons", learnMoreHref: "/private-jiu-jitsu-lessons-college-station",
    image: "/images/private-lessons.jpg", imageAlt: "Private Jiu-Jitsu instruction at Kinetic Grappling",
  },
];

export interface Coach { name: string; title: string; rank?: string; bio: string; focus: string[]; image: string | null; imageAlt: string; }
export const coaches: Coach[] = [
  { name: "Ambrose Adams", title: "Head Coach / BJJ Professor", rank: "Black belt · awarded August 8, 2021", bio: "Ambrose began training in 2009 under James Clingerman at Indiana Brazilian Jiu-Jitsu Academy. After moving to Texas in 2017, he continued under Jeremy Mahon at W4R Training Center, opened Kinetic Grappling as a brown belt, and received his black belt in 2021. His competition record includes first-, second-, and third-place finishes at the Chicago Open.", focus: ["Academy leadership", "Brazilian Jiu-Jitsu", "Competition"], image: "/images/coaches/coach-ambrose-adams.jpg", imageAlt: "Ambrose Adams, head coach and BJJ professor at Kinetic Grappling" },
  { name: "Bobby Power", title: "MMA Coach", bio: "Bobby Power is listed by Kinetic Grappling as its MMA coach.", focus: ["MMA"], image: null, imageAlt: "Bobby Power, MMA coach at Kinetic Grappling" },
  { name: "Jay Kelly", title: "Assistant BJJ Coach", bio: "Jay Kelly is listed by Kinetic Grappling as an assistant BJJ coach.", focus: ["Brazilian Jiu-Jitsu"], image: null, imageAlt: "Jay Kelly, assistant BJJ coach at Kinetic Grappling" },
  { name: "Aidan Forgay", title: "Kids BJJ Coach", bio: "Aidan Forgay is listed by Kinetic Grappling as a kids BJJ coach.", focus: ["Kids Brazilian Jiu-Jitsu"], image: null, imageAlt: "Aidan Forgay, kids BJJ coach at Kinetic Grappling" },
];

export interface FAQ { question: string; answer: string; }
export const homepageFaqs: FAQ[] = [
  { question: "Does Kinetic Grappling accept beginners?", answer: "Yes. Kinetic offers fundamentals classes and states that its programs serve all ages and experience levels. Use the free-trial form if you want help selecting the right first class." },
  { question: "What should I wear to my first class?", answer: "Wear comfortable workout clothing and bring a water bottle. Kinetic's current first-visit guidance says the academy can lend you a gi." },
  { question: "Does Kinetic Grappling have kids classes?", answer: "Yes. Little Grapplers is designed for ages 3–5, and Kids Brazilian Jiu-Jitsu Fundamentals is designed for ages 6–12." },
  { question: "What class should an adult beginner attend?", answer: "Adult Gi Brazilian Jiu-Jitsu Fundamentals is the clearest current starting point. Submit a free-trial request if you want the team to confirm the best class for you." },
  { question: "Does Kinetic Grappling teach MMA and wrestling?", answer: "Yes. Kinetic lists Brazilian Jiu-Jitsu, wrestling, and MMA among its disciplines. Current class availability can change, so contact the academy for placement." },
  { question: "Can I try a class first?", answer: "Yes. The current Glofox portal lists a free trial with three class credits valid for one month. Start on the free-trial page or book in Glofox." },
  { question: "How much does training cost?", answer: "Current public monthly options include adult training at $120, kids training at $80, and a family plan at $275, each with a listed $50 joining fee. Confirm final terms in Glofox before purchase." },
  { question: "Where is Kinetic Grappling located?", answer: "Kinetic Grappling is at 12700 SH 30 #201, College Station, Texas 77845, serving College Station, Bryan, and the Brazos Valley." },
];

export type ScheduleDiscipline = "BJJ" | "No-Gi" | "Kids" | "Power Hour" | "Competition" | "Open Mat";
export interface ScheduleEntry { day: string; dayIndex: number; start: string; end: string; time: string; program: string; level: string; discipline: ScheduleDiscipline; trialEligible: boolean; }
export const weeklySchedule: ScheduleEntry[] = [
  { day: "Monday", dayIndex: 1, start: "17:00", end: "18:00", time: "5:00–6:00 PM", program: "Power Hour", level: "Ask about class format", discipline: "Power Hour", trialEligible: false },
  { day: "Monday", dayIndex: 1, start: "17:15", end: "18:00", time: "5:15–6:00 PM", program: "Kids Brazilian Jiu-Jitsu Fundamentals", level: "Ages 6–12", discipline: "Kids", trialEligible: true },
  { day: "Monday", dayIndex: 1, start: "18:00", end: "19:30", time: "6:00–7:30 PM", program: "Adult Gi BJJ Fundamentals", level: "Adults · Fundamentals", discipline: "BJJ", trialEligible: true },
  { day: "Tuesday", dayIndex: 2, start: "10:00", end: "11:20", time: "10:00–11:20 AM", program: "Adult Gi Brazilian Jiu-Jitsu Fundamentals", level: "Fundamentals", discipline: "BJJ", trialEligible: true },
  { day: "Tuesday", dayIndex: 2, start: "18:00", end: "19:30", time: "6:00–7:30 PM", program: "Adult Gi BJJ Fundamentals", level: "Adults · Fundamentals", discipline: "BJJ", trialEligible: true },
  { day: "Wednesday", dayIndex: 3, start: "17:00", end: "18:00", time: "5:00–6:00 PM", program: "Power Hour", level: "Ask about class format", discipline: "Power Hour", trialEligible: false },
  { day: "Wednesday", dayIndex: 3, start: "17:15", end: "18:00", time: "5:15–6:00 PM", program: "Kids Brazilian Jiu-Jitsu Fundamentals", level: "Ages 6–12", discipline: "Kids", trialEligible: true },
  { day: "Wednesday", dayIndex: 3, start: "18:00", end: "19:30", time: "6:00–7:30 PM", program: "Adult No-Gi BJJ Fundamentals", level: "Adults · Fundamentals", discipline: "No-Gi", trialEligible: true },
  { day: "Thursday", dayIndex: 4, start: "10:00", end: "11:20", time: "10:00–11:20 AM", program: "Adult No-Gi BJJ Fundamentals", level: "Fundamentals", discipline: "No-Gi", trialEligible: true },
  { day: "Friday", dayIndex: 5, start: "18:00", end: "19:30", time: "6:00–7:30 PM", program: "Open Mat", level: "Open mat", discipline: "Open Mat", trialEligible: false },
  { day: "Saturday", dayIndex: 6, start: "10:00", end: "12:00", time: "10:00 AM–12:00 PM", program: "No-Gi Competition Training", level: "Competition", discipline: "Competition", trialEligible: false },
];

export const memberships = [
  { name: "Adult Grappler", price: "$120", cadence: "per month", fee: "$50 joining fee", description: "Access to the adult Brazilian Jiu-Jitsu curriculum." },
  { name: "Kids Grappling", price: "$80", cadence: "per month", fee: "$50 joining fee", description: "Kids Brazilian Jiu-Jitsu fundamentals for ages 6–12." },
  { name: "Family Grappler", price: "$275", cadence: "per month", fee: "$50 joining fee", description: "One flat-rate option listed for households with 3–6 members." },
] as const;

export const whyChooseItems = [
  "BJJ, no-gi, wrestling, and MMA under one academy", "Dedicated fundamentals classes for new adults",
  "Separate programs for ages 3–5 and 6–12", "Current schedule and pricing visible before you contact the gym",
  "Saturday no-gi competition training", "Private instruction available by arrangement",
] as const;

export const firstClassExpectations = [
  "Choose a fundamentals class or ask the team to place you.", "Wear comfortable workout clothing and bring water.",
  "Arrive early enough to meet the coach before class begins.", "You do not need to own a gi for the first visit; Kinetic can lend one.",
  "Tell the coach that it is your first class and ask before joining live rounds.",
] as const;

export interface BlogPost { slug: string; title: string; excerpt: string; date: string; paragraphs: string[]; }
export const blogPosts: BlogPost[] = [
  { slug: "what-to-expect-first-bjj-class", title: "What to Expect at Your First BJJ Class", excerpt: "What to wear, when to arrive, and how to choose your first session at Kinetic Grappling.", date: "2026-09-07", paragraphs: ["Your first visit should answer one question: is this the right room for you? Start with a fundamentals class or submit a free-trial request so the team can place you.", "Wear comfortable workout clothing and bring a water bottle. Kinetic's current first-visit guidance says the academy can lend you a gi.", "Arrive early, introduce yourself to the coach, and mention any injuries or concerns before class. Ask how partner drills and live rounds are handled that day.", "After class, compare the schedule with your week and ask which program creates the clearest path toward your goals."] },
  { slug: "bjj-for-kids-college-station", title: "Choosing a Kids Jiu-Jitsu Class in College Station", excerpt: "How Kinetic's Little Grapplers and Kids BJJ Fundamentals programs differ.", date: "2026-09-07", paragraphs: ["Kinetic separates younger children from school-age students so instruction can match their stage of development.", "Little Grapplers is a 30-minute, game-based class for ages 3–5. It introduces movement, confidence, and early grappling skills.", "Kids Brazilian Jiu-Jitsu Fundamentals is for ages 6–12 and uses more technique-specific instruction, partner work, fitness, and structured expectations.", "If your child is near an age boundary or has prior experience, submit a trial request and ask the coaching team which class is the better fit."] },
  { slug: "adult-beginners-guide-bjj", title: "How to Start Adult BJJ in College Station", excerpt: "A direct guide to selecting a fundamentals class and preparing for the first week.", date: "2026-09-07", paragraphs: ["Adult Gi Brazilian Jiu-Jitsu Fundamentals is the clearest current entry point for new students at Kinetic Grappling.", "You will learn through demonstration, drilling, and application with a partner. Progress comes from consistent attendance and attention to technique, not from arriving in peak condition.", "The current schedule includes morning and evening gi fundamentals plus a no-gi fundamentals option. Pick the time you can attend consistently, then confirm trial eligibility before arriving.", "Bring workout clothing and water. Kinetic can lend a gi for a first visit. Use the free-trial page if you want the academy to recommend a class."] },
];
