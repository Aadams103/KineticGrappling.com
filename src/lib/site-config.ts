export const siteConfig = {
  name: "Kinetic Grappling",
  tagline: "Brazilian Jiu-Jitsu Academy",
  description:
    "Train Brazilian Jiu-Jitsu in College Station at Kinetic Grappling. Kids classes, adult beginner BJJ, No-Gi grappling, private lessons, and free trial classes available.",
  url: "https://www.kineticgrappling.com",
  domain: "KineticGrappling.com",
  phone: "(979) 217-1817",
  phoneHref: "tel:+19792171817",
  email: "AmbroseAdams@KineticGrappling.com",
  emailHref: "mailto:AmbroseAdams@KineticGrappling.com",
  address: {
    street: "1055 Texas Ave S, Suite 101",
    city: "College Station",
    state: "TX",
    zip: "77840",
    full: "1055 Texas Ave S, Suite 101, College Station, TX 77840",
  },
  geo: {
    latitude: 30.6187,
    longitude: -96.3365,
  },
  social: {
    googleMaps:
      "https://www.google.com/maps/search/?api=1&query=1055+Texas+Ave+S+Suite+101+College+Station+TX+77840",
  },
  primaryCta: "Book a Free Trial Class",
  secondaryCta: "View Class Schedule",
  nav: [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/programs" },
    { label: "Kids Jiu-Jitsu", href: "/kids-jiu-jitsu-college-station" },
    { label: "Adult BJJ", href: "/adult-bjj-college-station" },
    { label: "Schedule", href: "/schedule" },
    { label: "Coaches", href: "/coaches" },
    { label: "Membership", href: "/membership" },
    { label: "Contact", href: "/free-trial" },
  ],
  ctaNav: { label: "Book Free Trial", href: "/free-trial" },
} as const;

export const brandAssets = {
  logoHeader: "/images/kinetic-grappling-logo.png",
  logoFooter: "/images/kinetic-grappling-logo-light.jpg",
  logoAlt:
    "Kinetic Grappling Brazilian Jiu-Jitsu academy logo in College Station, TX",
  favicon: "/images/favicon.png",
  heroImage: "/images/hero-bjj-training.jpg",
  heroAlt:
    "Kinetic Grappling Brazilian Jiu-Jitsu academy in College Station TX — welcoming BJJ training on the mats",
  firstClassImage: "/images/first-class.jpg",
  firstClassAlt:
    "Coach instructing a kids Brazilian Jiu-Jitsu class at Kinetic Grappling in College Station, TX",
} as const;

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
  image: string;
  imageAlt: string;
}

export const programs: Program[] = [
  {
    slug: "little-grapplers",
    title: "Little Grapplers",
    ages: "Ages 3–5",
    description:
      "Fun movement-based classes that build coordination, listening skills, confidence, and basic grappling awareness.",
    benefits: [
      "Age-appropriate movement and games",
      "Listening and focus skills",
      "Confidence on and off the mat",
      "Safe introduction to grappling concepts",
    ],
    whoFor:
      "Preschoolers who need a fun, structured activity that builds coordination and confidence.",
    cta: "Book a Kids Free Trial",
    href: "/free-trial?program=little-grapplers",
    image: "/images/little-grapplers.jpg",
    imageAlt:
      "Little Grapplers preschool martial arts class at Kinetic Grappling in College Station, TX",
  },
  {
    slug: "kids-bjj",
    title: "Kids Brazilian Jiu-Jitsu",
    ages: "Ages 6–12",
    description:
      "Help your child build discipline, focus, confidence, respect, and practical self-defense skills in a positive team environment.",
    benefits: [
      "Discipline and respect",
      "Anti-bullying confidence",
      "Focus and fitness",
      "Positive role models",
    ],
    whoFor:
      "School-age children who want martial arts training in a safe, structured, family-friendly environment.",
    cta: "Schedule Your Child's Free Trial",
    href: "/free-trial?program=kids-bjj",
    image: "/images/kids-bjj-class.jpg",
    imageAlt:
      "Kids Brazilian Jiu-Jitsu class at Kinetic Grappling in College Station, TX",
  },
  {
    slug: "adult-fundamentals",
    title: "Adult BJJ Fundamentals",
    ages: "Adults 16+",
    description:
      "Beginner-friendly classes for adults who want fitness, self-defense, confidence, and structured skill development.",
    benefits: [
      "No experience required",
      "Full-body fitness",
      "Practical self-defense",
      "Supportive training partners",
    ],
    whoFor:
      "Adults of any fitness level who want to learn Brazilian Jiu-Jitsu from the ground up.",
    cta: "Try an Adult Beginner Class",
    href: "/free-trial?program=adult-fundamentals",
    image: "/images/adult-bjj-class.jpg",
    imageAlt: "Adult BJJ training in College Station Texas at Kinetic Grappling",
  },
  {
    slug: "no-gi",
    title: "No-Gi Grappling",
    ages: "Teens & Adults",
    description:
      "Fast-paced grappling focused on control, takedowns, escapes, submissions, and movement without the traditional gi.",
    benefits: [
      "Wrestling-style transitions",
      "Faster-paced training",
      "Control and submissions",
      "Great for cross-training",
    ],
    whoFor:
      "Students who want dynamic grappling training with rash guard and shorts instead of a gi.",
    cta: "Try a No-Gi Class",
    href: "/free-trial?program=no-gi",
    image: "/images/no-gi-grappling.jpg",
    imageAlt: "No-Gi grappling class at Kinetic Grappling in College Station, TX",
  },
  {
    slug: "competition",
    title: "Competition Training",
    ages: "By invitation",
    description:
      "Advanced training for students preparing for tournaments with drilling, sparring, and competition strategy.",
    benefits: [
      "Tournament preparation",
      "Advanced techniques",
      "Competition mindset",
      "Coached sparring rounds",
    ],
    whoFor:
      "Dedicated students with fundamentals who want to compete at local and regional events.",
    cta: "Ask About Competition Training",
    href: "/free-trial?program=competition",
    image: "/images/competition-training.jpg",
    imageAlt:
      "Competition Brazilian Jiu-Jitsu training at Kinetic Grappling in College Station, TX",
  },
  {
    slug: "private-lessons",
    title: "Private Lessons",
    ages: "All ages",
    description:
      "One-on-one coaching for faster progress, extra support, competition prep, or personalized training goals.",
    benefits: [
      "Personalized instruction",
      "Flexible scheduling",
      "Accelerated progress",
      "Competition or goal-specific focus",
    ],
    whoFor:
      "Anyone who wants individualized attention or needs extra support beyond group classes.",
    cta: "Ask About Private Lessons",
    href: "/free-trial?program=private-lessons",
    image: "/images/private-lessons.jpg",
    imageAlt:
      "One-on-one Brazilian Jiu-Jitsu instruction at Kinetic Grappling in College Station, TX",
  },
];

export interface Coach {
  name: string;
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
    rank: "Black Belt",
    bio: "Ambrose founded Kinetic Grappling with a mission to bring high-quality, beginner-friendly Brazilian Jiu-Jitsu to College Station. He focuses on building confident students through clear instruction and a welcoming academy culture.",
    focus: ["Beginner instruction", "Kids programs", "Academy culture"],
    credentials: [
      "IBJJF-certified black belt",
      "10+ years teaching experience",
      "Competition background",
    ],
    image: "/images/coaches/coach-ambrose-adams.jpg",
    imageAlt:
      "Coach Ambrose Adams, black belt head instructor at Kinetic Grappling in College Station, TX",
  },
  {
    name: "Bobby Power",
    rank: "Black Belt",
    bio: "Bobby brings years of competitive experience and a patient teaching style that helps students of all levels feel comfortable on the mat. He specializes in fundamentals and helping adults build real grappling skills from day one.",
    focus: ["Adult fundamentals", "Competition prep", "Technique refinement"],
    credentials: [
      "Competition veteran",
      "Adult program lead",
      "Fundamentals specialist",
    ],
    image: null,
    imageAlt:
      "Coach Bobby Power, black belt instructor at Kinetic Grappling in College Station, TX",
    needsPhoto: true,
  },
  {
    name: "Jay Kelly",
    rank: "Brown Belt",
    bio: "Jay is known for his detailed instruction and ability to break down complex techniques into simple steps. He works closely with kids and teens to build discipline, respect, and confidence through structured training.",
    focus: ["Kids & teens", "No-Gi grappling", "Drilling fundamentals"],
    credentials: [
      "Kids program instructor",
      "No-Gi specialist",
      "Youth development focus",
    ],
    image: null,
    imageAlt:
      "Coach Jay Kelly, brown belt instructor at Kinetic Grappling in College Station, TX",
    needsPhoto: true,
  },
  {
    name: "Aidan Forgay",
    rank: "Purple Belt",
    bio: "Aidan connects with newer students through approachable coaching and a supportive attitude on the mat. He helps beginners feel at home while pushing more experienced students to sharpen their skills.",
    focus: [
      "New student onboarding",
      "Fundamentals classes",
      "Training partner development",
    ],
    credentials: [
      "Fundamentals instructor",
      "Competition experience",
      "First-class specialist",
    ],
    image: null,
    imageAlt:
      "Coach Aidan Forgay, purple belt instructor at Kinetic Grappling in College Station, TX",
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
      "Wear comfortable workout clothes like a t-shirt and athletic shorts or leggings. Bring water and arrive a few minutes early. A gi is not required for your first visit.",
  },
  {
    question: "Do you offer kids classes?",
    answer:
      "Yes. We offer Little Grapplers for ages 3–5 and Kids Brazilian Jiu-Jitsu for ages 6–12. Both programs focus on confidence, discipline, and safe skill development.",
  },
  {
    question: "Is Brazilian Jiu-Jitsu safe for beginners?",
    answer:
      "Yes. We prioritize controlled training, proper instruction, and a supportive environment. Coaches supervise classes closely and teach techniques progressively.",
  },
  {
    question: "Am I too old or out of shape to start?",
    answer:
      "Not at all. Many of our students start as adults with no prior training. You can train at your own pace and build fitness as you learn.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes. We offer a free trial class so you can experience our academy, meet our coaches, and find the right program before committing.",
  },
  {
    question: "Where are you located?",
    answer:
      "We are located at 1055 Texas Ave S, Suite 101, College Station, TX 77840 — convenient for Bryan/College Station residents and Texas A&M students.",
  },
  {
    question: "Which class should I try first?",
    answer:
      "Adult beginners should start with Adult BJJ Fundamentals. Parents can choose Little Grapplers or Kids BJJ based on their child's age. Not sure? Book a free trial and we'll help you choose.",
  },
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Parent of a Kids BJJ student",
    quote:
      "My son was nervous before his first class, but the coaches made him feel welcome right away. His confidence has grown so much — on the mat and at school.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    role: "Adult beginner",
    quote:
      "I started with zero experience at 34. The fundamentals classes are structured, supportive, and actually fun. Best decision I've made for fitness and stress relief.",
    rating: 5,
  },
  {
    name: "Emily R.",
    role: "Texas A&M student",
    quote:
      "Great location near campus, clean facility, and a friendly team culture. The No-Gi classes are fast-paced and challenging in the best way.",
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
  { day: "Monday", time: "6:30 PM", program: "Adult BJJ Fundamentals", level: "All levels" },
  { day: "Tuesday", time: "6:00 AM", program: "Adult BJJ Fundamentals", level: "All levels" },
  { day: "Tuesday", time: "7:00 PM", program: "No-Gi Grappling", level: "Intermediate+" },
  { day: "Wednesday", time: "4:30 PM", program: "Kids BJJ", level: "Ages 6–12" },
  { day: "Wednesday", time: "6:30 PM", program: "Adult BJJ Fundamentals", level: "All levels" },
  { day: "Thursday", time: "6:00 AM", program: "Adult BJJ Fundamentals", level: "All levels" },
  { day: "Thursday", time: "7:00 PM", program: "No-Gi Grappling", level: "Intermediate+" },
  { day: "Friday", time: "4:30 PM", program: "Little Grapplers", level: "Ages 3–5" },
  { day: "Friday", time: "5:30 PM", program: "Kids BJJ", level: "Ages 6–12" },
  { day: "Saturday", time: "10:00 AM", program: "Open Mat / All Levels", level: "All levels" },
];

export const whyChooseItems = [
  "Beginner-friendly instruction",
  "Kids and adult programs",
  "Clean, family-focused training environment",
  "Experienced coaches",
  "Supportive team culture",
  "Practical self-defense and real grappling skills",
  "Competition pathway for serious students",
  "Convenient College Station location",
];

export const startSteps = [
  {
    step: 1,
    title: "Claim your free trial",
    description:
      "Tell us whether you are looking for kids classes, adult beginner classes, No-Gi training, or private lessons.",
  },
  {
    step: 2,
    title: "Come in for your first class",
    description:
      "Wear comfortable workout clothes, bring water, and arrive a few minutes early. No experience is required.",
  },
  {
    step: 3,
    title: "Train with a coach guiding you",
    description:
      "Our coaches will help you start safely, learn the basics, and choose the right next step.",
  },
];
