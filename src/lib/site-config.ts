export const siteConfig = {
  name: "Kinetic Grappling",
  tagline: "Empower your best self",
  description:
    "Train Brazilian Jiu-Jitsu, no-gi grappling, kids martial arts, wrestling, and MMA at Kinetic Grappling in College Station, TX. Book your free class today.",
  url: "https://www.kineticgrappling.com",
  domain: "KineticGrappling.com",
  phone: "(979) 217-1817",
  phoneHref: "tel:+19792171817",
  email: "AmbroseAdams@KineticGrappling.com",
  emailHref: "mailto:AmbroseAdams@KineticGrappling.com",
  address: {
    street: "12700 SH 30 #201",
    city: "College Station",
    state: "TX",
    zip: "77845",
    full: "12700 SH 30 #201, College Station, TX 77845",
  },
  geo: {
    latitude: 30.6276,
    longitude: -96.2828,
  },
  officeHours: "Weekdays 10:00 AM – 4:00 PM while school is in session",
  social: {
    googleMaps:
      "https://www.google.com/maps/search/?api=1&query=12700+SH+30+%23201+College+Station+TX+77845",
    facebook: "https://www.facebook.com/kineticgrappling",
    instagram: "https://www.instagram.com/kineticgrappling",
  },
  localSeoText:
    "Brazilian Jiu-Jitsu academy serving College Station, Bryan, Texas A&M, and the Brazos Valley.",
  primaryCta: "Book a Free Class",
  secondaryCta: "View Schedule",
  contactPath: "/contact",
  nav: [
    { label: "Programs", href: "/programs" },
    { label: "Schedule", href: "/schedule" },
    { label: "Coaches", href: "/coaches" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  footerExtra: [
    { label: "Membership", href: "/membership" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
  ],
  ctaNav: { label: "Book a Free Class", href: "/contact" },
} as const;

export const brandAssets = {
  logoHeader: "/images/kinetic-grappling-logo.png",
  logoFooter: "/images/kinetic-grappling-logo.png",
  logoAlt:
    "Kinetic Grappling Brazilian Jiu-Jitsu Academy logo in College Station, TX",
  favicon: "/images/favicon.png",
  heroImage: "/images/hero-bjj-training.jpg",
  heroAlt:
    "Students smiling during Brazilian Jiu-Jitsu training at Kinetic Grappling in College Station, TX",
  firstClassImage: "/images/first-class.jpg",
  firstClassAlt:
    "Coach instructing a kids Brazilian Jiu-Jitsu class at Kinetic Grappling in College Station, TX",
} as const;

export const trustBadges = [
  "Kids & Adults",
  "Beginner Friendly",
  "Family Focused",
  "College Station, TX",
] as const;

export const academyCopy = {
  welcome: "Welcome to Kinetic Grappling",
  tagline: "Empower your best self",
  intro:
    "Kinetic Grappling develops adults and children in the art of Brazilian Jiu-Jitsu. With a proven system, we give students the skills to excel in sport and in life.",
  findYourFit:
    "Our primary goal is the highest level of self-defense instruction in a clean, fun, family- and team-oriented atmosphere. We also promote fitness and health — building confidence, respect, and integrity — and stay responsible to the needs of our members.",
  gymForAll:
    "Your journey starts with the membership that fits your life. Expect high-level grappling, daily motivation, and a community that supports you. Kickstart your goals with a free trial.",
  aboutIntro:
    "We provide world-class martial arts to the College Station and Bryan area. We offer Brazilian Jiu-Jitsu, wrestling, and MMA classes for all ages and levels. Our instructors teach the skills you need in the sport and help you grow as a person — whether you want to get in shape, make new friends, or learn self-defense.",
  mission:
    "Our primary goal at Kinetic Grappling is to provide the highest level of self-defense instruction in a clean, fun, family and team-oriented atmosphere. Kinetic Grappling also promotes a high level of fitness and health, with the hope to improve confidence, respectfulness, and integrity. We are dedicated to creating a family-oriented environment that is responsible and responsive to the needs of our members.",
  vision:
    "We are dedicated to providing the highest quality martial arts instruction and creating an environment that is safe and fun for every member of our community. Our vision for children is to teach discipline and perseverance — skills they need in school and sport. Grappling improves cognitive skills, hand-eye coordination, memory, and rational thinking, and gives kids a foundation to become successful teenagers and adults.",
  coachesIntro:
    "Our coaches have dedicated their lives to sharing knowledge and experience. They teach you how to protect yourself, stay mentally sharp, and gain confidence — not only how to fight.",
} as const;

export const benefits = [
  {
    title: "Fitness",
    description:
      "Full-body training that builds strength, cardio, mobility, and functional athleticism — no empty gym sessions.",
    icon: "fitness",
  },
  {
    title: "Confidence",
    description:
      "Real skills in a supportive room. Students of every age leave more sure of themselves on and off the mat.",
    icon: "confidence",
  },
  {
    title: "Self-Defense",
    description:
      "Brazilian Jiu-Jitsu teaches practical control, escapes, and submissions that work when size and strength are not on your side.",
    icon: "shield",
  },
  {
    title: "Discipline",
    description:
      "Structured classes develop focus, respect, and consistency — especially valuable for kids and teens.",
    icon: "discipline",
  },
  {
    title: "Community",
    description:
      "Train with teammates who push you forward. Kinetic Grappling is built around family culture and mutual respect.",
    icon: "community",
  },
  {
    title: "Competition",
    description:
      "Serious students can pursue tournament preparation with coached drilling, sparring, and strategy.",
    icon: "trophy",
  },
] as const;

export type ProgramSlug =
  | "little-grapplers"
  | "kids-bjj"
  | "adult-fundamentals"
  | "no-gi"
  | "competition"
  | "private-lessons";

export interface Program {
  slug: ProgramSlug;
  title: string;
  ages?: string;
  description: string;
  benefits: string[];
  whoFor: string;
  cta: string;
  href: string;
  learnMoreHref: string;
  image: string;
  imageAlt: string;
}

export const programs: Program[] = [
  {
    slug: "little-grapplers",
    title: "Little Grapplers",
    ages: "Ages 3–5",
    description:
      "A 30-minute class built around games and fun scenarios. Kids develop fitness, confidence, listening skills, and their first grappling awareness.",
    benefits: [
      "Games-based learning",
      "Coordination & motor skills",
      "Listening & focus",
      "Safe first steps in BJJ",
    ],
    whoFor: "Preschoolers ready for structured, age-appropriate martial arts.",
    cta: "Book a Free Class",
    href: "/contact?program=little-grapplers",
    learnMoreHref: "/programs#little-grapplers",
    image: "/images/little-grapplers.jpg",
    imageAlt:
      "Little Grapplers kids martial arts class at Kinetic Grappling in College Station, TX",
  },
  {
    slug: "kids-bjj",
    title: "Kids Brazilian Jiu-Jitsu",
    ages: "Ages 6–12",
    description:
      "More Jiu-Jitsu, fewer games. Kids learn fundamentals, follow instruction, and build respect, fitness, and practical self-defense in a positive team room.",
    benefits: [
      "Discipline & respect",
      "Anti-bullying confidence",
      "Focus & fitness",
      "Positive role models",
    ],
    whoFor: "School-age children who want safe, structured martial arts.",
    cta: "Book a Free Class",
    href: "/contact?program=kids-bjj",
    learnMoreHref: "/kids-jiu-jitsu-college-station",
    image: "/images/kids-bjj-class.jpg",
    imageAlt:
      "Kids Brazilian Jiu-Jitsu class at Kinetic Grappling in College Station, TX",
  },
  {
    slug: "adult-fundamentals",
    title: "Teen / Adult BJJ Fundamentals",
    ages: "Teens & Adults",
    description:
      "A strong Brazilian Jiu-Jitsu base through proven techniques, drilling, and sparring. Learn to overcome disadvantages of age, size, or strength.",
    benefits: [
      "No experience required",
      "Full-body fitness",
      "Practical self-defense",
      "Supportive training partners",
    ],
    whoFor: "Teens and adults of any fitness level starting Brazilian Jiu-Jitsu.",
    cta: "Book a Free Class",
    href: "/contact?program=adult-fundamentals",
    learnMoreHref: "/adult-bjj-college-station",
    image: "/images/adult-bjj-class.jpg",
    imageAlt:
      "Adult Brazilian Jiu-Jitsu training in College Station Texas at Kinetic Grappling",
  },
  {
    slug: "no-gi",
    title: "No-Gi Grappling",
    ages: "Teens & Adults",
    description:
      "Faster grappling without the gi — control, takedowns, escapes, submissions, and wrestling-style transitions in rash guard and shorts.",
    benefits: [
      "Dynamic training pace",
      "Wrestling transitions",
      "Control & submissions",
      "Great for cross-training",
    ],
    whoFor: "Students who want athletic grappling without the traditional gi.",
    cta: "Book a Free Class",
    href: "/contact?program=no-gi",
    learnMoreHref: "/no-gi-grappling-college-station",
    image: "/images/no-gi-grappling.jpg",
    imageAlt: "No-Gi grappling class at Kinetic Grappling in College Station, TX",
  },
  {
    slug: "competition",
    title: "Competition Training",
    ages: "By invitation",
    description:
      "Advanced Brazilian Jiu-Jitsu, wrestling, and judo concepts that fine-tune the techniques you already know — for personal progress and the tournament mat.",
    benefits: [
      "Tournament prep",
      "Advanced details",
      "Competition mindset",
      "Coached sparring",
    ],
    whoFor:
      "Dedicated students with fundamentals who want to compete or sharpen their game.",
    cta: "Book a Free Class",
    href: "/contact?program=competition",
    learnMoreHref: "/bjj-competition-training-college-station",
    image: "/images/competition-training.jpg",
    imageAlt:
      "BJJ competition training at Kinetic Grappling in College Station, TX",
  },
  {
    slug: "private-lessons",
    title: "Private Lessons",
    ages: "All ages",
    description:
      "A customizable one-on-one session to improve faster, shore up weaknesses, and work toward competition or personal goals on your schedule.",
    benefits: [
      "Personalized instruction",
      "Flexible scheduling",
      "Accelerated progress",
      "Goal-specific focus",
    ],
    whoFor: "Anyone who wants individualized attention beyond group classes.",
    cta: "Book a Free Class",
    href: "/contact?program=private-lessons",
    learnMoreHref: "/private-jiu-jitsu-lessons-college-station",
    image: "/images/private-lessons.jpg",
    imageAlt: "Private Jiu-Jitsu lessons at Kinetic Grappling in College Station, TX",
  },
];

export interface Coach {
  name: string;
  title: string;
  rank?: string;
  bio: string;
  focus: string[];
  image: string | null;
  imageAlt: string;
}

export const coaches: Coach[] = [
  {
    name: "Ambrose Adams",
    title: "Head Coach / BJJ Professor",
    rank: "Black Belt",
    bio: "Ambrose founded Kinetic Grappling to bring high-quality, beginner-friendly Brazilian Jiu-Jitsu to College Station and Bryan. He leads with clear instruction, a welcoming academy culture, and a focus on helping every student grow.",
    focus: ["Academy leadership", "Beginner instruction", "Kids & adult programs"],
    image: "/images/coaches/coach-ambrose-adams.jpg",
    imageAlt:
      "Coach Ambrose Adams, Head Coach and BJJ Professor at Kinetic Grappling in College Station, TX",
  },
  {
    name: "Bobby Power",
    title: "MMA Coach",
    bio: "Bobby brings a patient teaching style that helps students feel comfortable from day one. He specializes in helping adults build real grappling and MMA fundamentals.",
    focus: ["Adult fundamentals", "MMA integration", "Competition prep"],
    image: null,
    imageAlt: "Coach Bobby Power, MMA Coach at Kinetic Grappling in College Station, TX",
  },
  {
    name: "Jay Kelly",
    title: "Assistant BJJ Coach",
    bio: "Jay breaks techniques into simple, actionable steps. He works closely with kids and teens to build discipline, respect, and confidence through structured training.",
    focus: ["Kids & teens", "Technique breakdown", "Fundamentals"],
    image: null,
    imageAlt:
      "Coach Jay Kelly, Assistant BJJ Coach at Kinetic Grappling in College Station, TX",
  },
  {
    name: "Aidan Forgay",
    title: "Kids BJJ Coach",
    bio: "Aidan connects with newer students through approachable coaching. He helps kids feel at home on the mat while building strong fundamentals.",
    focus: ["Kids BJJ", "New student onboarding", "First-class experience"],
    image: null,
    imageAlt: "Coach Aidan Forgay, Kids BJJ Coach at Kinetic Grappling in College Station, TX",
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const homepageFaqs: FAQ[] = [
  {
    question: "Do I need experience to start?",
    answer:
      "No. Our beginner-friendly classes are designed for people with zero martial arts background. Coaches guide you through every step of your first class.",
  },
  {
    question: "What should I wear to my first class?",
    answer:
      "Wear comfortable workout clothes — a t-shirt and athletic shorts or leggings. Bring water and arrive a few minutes early. We'll lend you a gi when you're ready to train in one regularly.",
  },
  {
    question: "Do I need a gi for my first class?",
    answer:
      "No. A gi is not required for your first visit. All you need are workout clothes and a water bottle.",
  },
  {
    question: "Is BJJ safe for kids?",
    answer:
      "Yes. Kids classes use age-appropriate techniques, close supervision, and a focus on control and respect. Safety is always our top priority.",
  },
  {
    question: "Can adults start as beginners?",
    answer:
      "Absolutely. Many of our adult students start with no prior training. Teen / Adult BJJ Fundamentals is the best place to begin.",
  },
  {
    question: "Do you offer private lessons?",
    answer:
      "Yes. Private lessons are available for students who want one-on-one coaching for faster progress, competition prep, or extra support.",
  },
  {
    question: "How do I book my first class?",
    answer:
      "Book online through our contact form, call us at (979) 217-1817, or email AmbroseAdams@KineticGrappling.com. We'll help you choose the right class.",
  },
];

export const audiences = [
  {
    title: "Kids & Families",
    description:
      "Age-appropriate classes for Little Grapplers and school-age kids, with a culture parents can trust.",
  },
  {
    title: "Adult Beginners",
    description:
      "Start from zero. Fundamentals classes meet you where you are — no elite fitness required.",
  },
  {
    title: "Texas A&M & Bryan",
    description:
      "A local academy for Aggies, professionals, and families across College Station and Bryan.",
  },
  {
    title: "Competitors",
    description:
      "A pathway from fundamentals to tournament prep when you are ready to test your skills.",
  },
] as const;

export interface ScheduleEntry {
  day: string;
  time: string;
  program: string;
  level: string;
}

export const weeklySchedule: ScheduleEntry[] = [
  { day: "Monday", time: "4:30 PM", program: "Little Grapplers", level: "Ages 3–5" },
  { day: "Monday", time: "5:30 PM", program: "Kids BJJ", level: "Ages 6–12" },
  { day: "Monday", time: "6:30 PM", program: "Teen / Adult BJJ Fundamentals", level: "All levels" },
  { day: "Tuesday", time: "6:00 AM", program: "Teen / Adult BJJ Fundamentals", level: "All levels" },
  { day: "Tuesday", time: "7:00 PM", program: "No-Gi Grappling", level: "Intermediate+" },
  { day: "Wednesday", time: "4:30 PM", program: "Kids BJJ", level: "Ages 6–12" },
  { day: "Wednesday", time: "6:30 PM", program: "Teen / Adult BJJ Fundamentals", level: "All levels" },
  { day: "Thursday", time: "6:00 AM", program: "Teen / Adult BJJ Fundamentals", level: "All levels" },
  { day: "Thursday", time: "7:00 PM", program: "No-Gi Grappling", level: "Intermediate+" },
  { day: "Friday", time: "4:30 PM", program: "Little Grapplers", level: "Ages 3–5" },
  { day: "Friday", time: "5:30 PM", program: "Kids BJJ", level: "Ages 6–12" },
  { day: "Saturday", time: "10:00 AM", program: "Open Mat / All Levels", level: "All levels" },
];

export const scheduleNote =
  "Times can change with the season. Confirm the current class when you book your free visit.";

export const scheduleCategories = [
  { name: "Little Grapplers", times: "Mon & Fri · 4:30 PM", ages: "Ages 3–5" },
  { name: "Kids BJJ", times: "Mon, Wed & Fri · 5:30 PM", ages: "Ages 6–12" },
  { name: "Teen / Adult Fundamentals", times: "Mon–Thu · Morning & Evening", ages: "Teens & Adults" },
  { name: "No-Gi Grappling", times: "Tue & Thu · 7:00 PM", ages: "Teens & Adults" },
  { name: "Open Mat", times: "Sat · 10:00 AM", ages: "All levels" },
];

export const whyChooseItems = [
  "Clean, professional training environment",
  "Family-friendly academy culture",
  "Skilled, approachable coaches",
  "Beginner-friendly instruction",
  "Practical self-defense skills",
  "Supportive team community",
  "Fitness and personal growth",
  "Competition pathway for dedicated students",
];

export const firstClassExpectations = [
  "Wear comfortable workout clothes and bring water.",
  "Arrive 10–15 minutes early so a coach can welcome you.",
  "No experience, gi, or elite fitness required to start.",
  "We'll lend you a gi when you're ready for regular training.",
  "A coach will guide you through your first class step by step.",
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  paragraphs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-to-expect-first-bjj-class",
    title: "What to Expect at Your First BJJ Class",
    excerpt:
      "Nervous about your first visit? Here's exactly what happens from the moment you walk in.",
    date: "2026-01-15",
    paragraphs: [
      "Walking into a Brazilian Jiu-Jitsu academy for the first time can feel intimidating. At Kinetic Grappling in College Station, we designed the first visit to be simple: show up, meet a coach, and try a class.",
      "Wear a t-shirt and athletic shorts or leggings, and bring a water bottle. You do not need a gi. If the class is a gi session and you decide to continue, we will lend you one when you are ready.",
      "Arrive 10–15 minutes early. A coach will greet you, show you the room, and explain how class is structured. You will warm up, learn a few techniques, and drill with a partner who knows you are new.",
      "Sparring is not required on day one. If the class includes live rounds, you can watch or participate at a pace that feels right. The goal is that you leave knowing what training feels like — not exhausted or embarrassed.",
      "After class, we can help you choose the right program: Little Grapplers, Kids BJJ, Adult Fundamentals, No-Gi, or a private lesson. Book online, call (979) 217-1817, or email AmbroseAdams@KineticGrappling.com.",
    ],
  },
  {
    slug: "bjj-for-kids-college-station",
    title: "Why Kids Benefit from Brazilian Jiu-Jitsu",
    excerpt:
      "Confidence, discipline, focus, and fitness — how BJJ helps children in College Station grow.",
    date: "2026-01-08",
    paragraphs: [
      "Parents in College Station and Bryan look for activities that do more than burn energy. Brazilian Jiu-Jitsu gives kids a structured place to learn respect, listening, and confidence while they move.",
      "Little Grapplers (ages 3–5) is a 30-minute class built around games and fun scenarios. The goal is coordination, confidence, and a first taste of grappling — not a miniature adult class.",
      "Kids BJJ (ages 6–12) introduces more Jiu-Jitsu-specific instruction. Students learn to follow directions, treat partners with respect, and build fitness through techniques they can actually use.",
      "Classes are supervised closely. We emphasize control, safety, and a family-friendly room. Competition is optional. Most kids train for confidence, focus, and fun.",
      "If you are choosing between programs, start with age: 3–5 in Little Grapplers, 6–12 in Kids BJJ. Book a free class and we will help you decide on the mat.",
    ],
  },
  {
    slug: "adult-beginners-guide-bjj",
    title: "A Beginner's Guide to Adult BJJ",
    excerpt:
      "Starting BJJ as an adult? You're not too old or out of shape. Here's how to begin the right way.",
    date: "2025-12-20",
    paragraphs: [
      "Most adults who walk into Kinetic Grappling have never trained martial arts. That is normal. Teen / Adult BJJ Fundamentals is built for people starting from zero.",
      "You do not need to get in shape first. Brazilian Jiu-Jitsu is how you get in shape — strength, cardio, and mobility come from learning to move with a partner.",
      "Age and size are not barriers. Jiu-Jitsu is designed so leverage and technique matter more than raw strength. Our fundamentals classes teach you to work from disadvantageous positions, not just dominate them.",
      "Expect a warm-up, technique, and drilling. Live sparring is introduced when you are ready. Wear workout clothes to your first class; a gi is not required to start.",
      "If you also want faster, wrestling-style training, No-Gi classes are a strong next step. If you want extra attention, private lessons can accelerate the basics. Start with a free class and we will point you to the right hour.",
    ],
  },
];
