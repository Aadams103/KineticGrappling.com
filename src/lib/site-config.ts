export const siteConfig = {
  name: "Kinetic Grappling",
  tagline: "Brazilian Jiu-Jitsu Academy",
  description:
    "Train Brazilian Jiu-Jitsu, no-gi grappling, kids martial arts, and self-defense at Kinetic Grappling in College Station, TX. Book your free class today.",
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
  social: {
    googleMaps:
      "https://www.google.com/maps/search/?api=1&query=12700+SH+30+%23201+College+Station+TX+77845",
    facebook: "https://www.facebook.com/kineticgrappling",
    instagram: "https://www.instagram.com/kineticgrappling",
  },
  localSeoText:
    "Brazilian Jiu-Jitsu academy serving College Station, Bryan, and the Brazos Valley.",
  primaryCta: "Book a Free Class",
  secondaryCta: "View Schedule",
  contactPath: "/contact",
  nav: [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/programs" },
    { label: "Schedule", href: "/schedule" },
    { label: "Pricing", href: "/membership" },
    { label: "Coaches", href: "/coaches" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ],
  ctaNav: { label: "Book a Free Class", href: "/contact" },
} as const;

export const brandAssets = {
  logoHeader: "/images/kinetic-grappling-logo.png",
  logoFooter: "/images/kinetic-grappling-logo-light.jpg",
  logoAlt:
    "Kinetic Grappling Brazilian Jiu-Jitsu Academy logo in College Station, TX",
  favicon: "/images/favicon.png",
  heroImage: "/images/hero-bjj-training.jpg",
  heroAlt:
    "Kinetic Grappling Brazilian Jiu-Jitsu academy in College Station TX — welcoming BJJ training on the mats",
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

export const benefits = [
  {
    title: "Fitness",
    description:
      "Full-body workouts that build strength, cardio, mobility, and functional athleticism — no boring treadmill sessions.",
    icon: "fitness",
  },
  {
    title: "Confidence",
    description:
      "Learn real skills in a supportive environment. Students of all ages build self-assurance on and off the mat.",
    icon: "confidence",
  },
  {
    title: "Self-Defense",
    description:
      "Brazilian Jiu-Jitsu teaches practical control, escapes, and submissions that work for real-world situations.",
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
      "Train with teammates who push you forward. Kinetic Grappling is built around family-friendly culture and mutual respect.",
    icon: "community",
  },
  {
    title: "Competition Training",
    description:
      "Serious students can pursue tournament preparation with coached drilling, sparring, and competition strategy.",
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
      "Fun, movement-based classes that build coordination, listening skills, confidence, and basic grappling awareness.",
    benefits: ["Coordination & motor skills", "Listening & focus", "Confidence building", "Safe introduction to BJJ"],
    whoFor: "Preschoolers ready for structured, age-appropriate martial arts activity.",
    cta: "Book a Free Class",
    href: "/contact?program=little-grapplers",
    learnMoreHref: "/programs#little-grapplers",
    image: "/images/little-grapplers.jpg",
    imageAlt: "Little Grapplers kids martial arts class at Kinetic Grappling in College Station, TX",
  },
  {
    slug: "kids-bjj",
    title: "Kids Brazilian Jiu-Jitsu",
    ages: "Ages 6–12",
    description:
      "Structured BJJ training that builds discipline, focus, confidence, respect, and practical self-defense in a positive team environment.",
    benefits: ["Discipline & respect", "Anti-bullying confidence", "Focus & fitness", "Positive role models"],
    whoFor: "School-age children who want safe, structured martial arts training.",
    cta: "Book a Free Class",
    href: "/contact?program=kids-bjj",
    learnMoreHref: "/kids-jiu-jitsu-college-station",
    image: "/images/kids-bjj-class.jpg",
    imageAlt: "Kids Brazilian Jiu-Jitsu class at Kinetic Grappling in College Station, TX",
  },
  {
    slug: "adult-fundamentals",
    title: "Teen / Adult BJJ Fundamentals",
    ages: "Teens & Adults",
    description:
      "Beginner-friendly classes for teens and adults who want fitness, self-defense, confidence, and real grappling skills.",
    benefits: ["No experience required", "Full-body fitness", "Practical self-defense", "Supportive training partners"],
    whoFor: "Teens and adults of any fitness level starting Brazilian Jiu-Jitsu.",
    cta: "Book a Free Class",
    href: "/contact?program=adult-fundamentals",
    learnMoreHref: "/adult-bjj-college-station",
    image: "/images/adult-bjj-class.jpg",
    imageAlt: "Adult Brazilian Jiu-Jitsu training in College Station Texas at Kinetic Grappling",
  },
  {
    slug: "no-gi",
    title: "No-Gi Grappling",
    ages: "Teens & Adults",
    description:
      "Fast-paced grappling focused on control, takedowns, escapes, submissions, and wrestling-style transitions without the gi.",
    benefits: ["Dynamic training pace", "Wrestling transitions", "Control & submissions", "Great for cross-training"],
    whoFor: "Students who want athletic grappling training in rash guard and shorts.",
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
      "Advanced training for students preparing for tournaments — drilling, coached sparring, and competition strategy.",
    benefits: ["Tournament prep", "Advanced techniques", "Competition mindset", "Coached sparring"],
    whoFor: "Dedicated students with fundamentals who want to compete locally and regionally.",
    cta: "Book a Free Class",
    href: "/contact?program=competition",
    learnMoreHref: "/bjj-competition-training-college-station",
    image: "/images/competition-training.jpg",
    imageAlt: "BJJ competition training at Kinetic Grappling in College Station, TX",
  },
  {
    slug: "private-lessons",
    title: "Private Lessons",
    ages: "All ages",
    description:
      "One-on-one coaching for faster progress, extra support, competition prep, or personalized training goals.",
    benefits: ["Personalized instruction", "Flexible scheduling", "Accelerated progress", "Goal-specific focus"],
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
  rank: string;
  bio: string;
  focus: string[];
  credentials: string[];
  image: string | null;
  imageAlt: string;
  needsPhoto?: boolean;
}

export const coaches: Coach[] = [
  {
    name: "Ambrose Adams",
    title: "Head Coach / BJJ Professor",
    rank: "Black Belt",
    bio: "Ambrose founded Kinetic Grappling to bring high-quality, beginner-friendly Brazilian Jiu-Jitsu to College Station. He leads with clear instruction, a welcoming academy culture, and a focus on helping every student grow with confidence.",
    focus: ["Academy leadership", "Beginner instruction", "Kids & adult programs"],
    credentials: ["BJJ black belt", "Head instructor", "Competition & teaching background"],
    image: "/images/coaches/coach-ambrose-adams.jpg",
    imageAlt: "Coach Ambrose Adams, Head Coach and BJJ Professor at Kinetic Grappling in College Station, TX",
  },
  {
    name: "Bobby Power",
    title: "MMA Coach",
    rank: "Black Belt",
    bio: "Bobby brings competitive experience and a patient teaching style that helps students feel comfortable from day one. He specializes in helping adults build real grappling and MMA fundamentals.",
    focus: ["Adult fundamentals", "MMA integration", "Competition prep"],
    credentials: ["MMA coach", "Competition veteran", "Adult program lead"],
    image: null,
    imageAlt: "Coach Bobby Power, MMA Coach at Kinetic Grappling in College Station, TX",
    needsPhoto: true,
  },
  {
    name: "Jay Kelly",
    title: "Assistant BJJ Coach",
    rank: "Brown Belt",
    bio: "Jay breaks down complex techniques into simple, actionable steps. He works closely with kids and teens to build discipline, respect, and confidence through structured training.",
    focus: ["Kids & teens", "No-Gi grappling", "Technique breakdown"],
    credentials: ["Brown belt instructor", "Youth development", "No-Gi specialist"],
    image: null,
    imageAlt: "Coach Jay Kelly, Assistant BJJ Coach at Kinetic Grappling in College Station, TX",
    needsPhoto: true,
  },
  {
    name: "Aidan Forgay",
    title: "Kids BJJ Coach",
    rank: "Purple Belt",
    bio: "Aidan connects with newer students through approachable coaching and a supportive attitude. He helps kids feel at home on the mat while building strong fundamentals.",
    focus: ["Kids BJJ", "New student onboarding", "First-class experience"],
    credentials: ["Kids program coach", "Fundamentals instructor", "Competition experience"],
    image: null,
    imageAlt: "Coach Aidan Forgay, Kids BJJ Coach at Kinetic Grappling in College Station, TX",
    needsPhoto: true,
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
      "Wear comfortable workout clothes — a t-shirt and athletic shorts or leggings. Bring water and arrive a few minutes early.",
  },
  {
    question: "Do I need a gi for my first class?",
    answer:
      "No. A gi is not required for your first visit. We'll lend you a gi when you're ready to train in one regularly.",
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

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Parent — Kids BJJ",
    quote:
      "My son was nervous before his first class, but the coaches made him feel welcome right away. His confidence has grown on the mat and at school.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    role: "Adult beginner",
    quote:
      "I started at 34 with zero experience. The fundamentals classes are structured, supportive, and actually fun. Best fitness decision I've made.",
    rating: 5,
  },
  {
    name: "Daniel R.",
    role: "Competitor",
    quote:
      "The competition training pushed me to the next level. Coaches care about technique and mindset — not just showing up to roll.",
    rating: 5,
  },
  {
    name: "The Nguyen Family",
    role: "Family training",
    quote:
      "Our whole family trains here. It's clean, professional, and everyone from the kids to the adults feels supported. We couldn't ask for a better academy.",
    rating: 5,
  },
];

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

export const blogPosts = [
  {
    slug: "what-to-expect-first-bjj-class",
    title: "What to Expect at Your First BJJ Class",
    excerpt: "Nervous about your first visit? Here's exactly what happens from the moment you walk in.",
    date: "2026-01-15",
  },
  {
    slug: "bjj-for-kids-college-station",
    title: "Why Kids Benefit from Brazilian Jiu-Jitsu",
    excerpt: "Confidence, discipline, focus, and fitness — how BJJ helps children in College Station grow.",
    date: "2026-01-08",
  },
  {
    slug: "adult-beginners-guide-bjj",
    title: "A Beginner's Guide to Adult BJJ",
    excerpt: "Starting BJJ as an adult? You're not too old or out of shape. Here's how to begin the right way.",
    date: "2025-12-20",
  },
];
