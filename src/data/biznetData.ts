// Comprehensive mock data for Biznet.events platform

export interface BiznetEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  city: string;
  category: "conference" | "workshop" | "meetup" | "hackathon" | "networking";
  image: string;
  price: number | null;
  attendeeCount: number;
  attendeeAvatars: string[];
  tags: string[];
  featured?: boolean;
}

export interface Person {
  id: string;
  name: string;
  avatar: string;
  headline: string;
  company: string;
  industry: string;
  role: string;
  location: string;
  bio: string;
  expertise: string[];
  mutualConnections: number;
  connected?: boolean;
}

export interface Mentor {
  id: string;
  name: string;
  avatar: string;
  title: string;
  company: string;
  expertise: string[];
  rating: number;
  reviewCount: number;
  yearsExperience: number;
  menteesCount: number;
  bio: string;
  available: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  text: string;
  timestamp: string;
  isOwn?: boolean;
}

export interface Conversation {
  id: string;
  person: Person;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  messages: ChatMessage[];
}

const avatarUrl = (seed: string) =>
  `https://api.dicebear.com/9.x/notionists/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9`;

export const events: BiznetEvent[] = [
  {
    id: "1",
    title: "Future of AI in Enterprise Summit",
    description: "Join 500+ leaders exploring how AI is transforming enterprise operations, from automation to decision-making.",
    date: "2026-04-15",
    time: "09:00 - 18:00",
    location: "Yerba Buena Center, San Francisco",
    city: "San Francisco",
    category: "conference",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    price: 299,
    attendeeCount: 487,
    attendeeAvatars: [avatarUrl("ai1"), avatarUrl("ai2"), avatarUrl("ai3")],
    tags: ["AI", "Enterprise", "Innovation"],
    featured: true,
  },
  {
    id: "2",
    title: "Product Leaders Meetup — Q2",
    description: "Quarterly meetup for product managers and designers to share insights, case studies, and network.",
    date: "2026-04-22",
    time: "18:30 - 21:00",
    location: "WeWork Moorgate, London",
    city: "London",
    category: "meetup",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
    price: null,
    attendeeCount: 124,
    attendeeAvatars: [avatarUrl("pm1"), avatarUrl("pm2"), avatarUrl("pm3")],
    tags: ["Product", "Design", "Free"],
    featured: true,
  },
  {
    id: "3",
    title: "FinTech Innovation Workshop",
    description: "Hands-on workshop on building next-gen financial products with real-time payments and embedded finance.",
    date: "2026-05-03",
    time: "10:00 - 16:00",
    location: "JP Morgan Tower, New York",
    city: "New York",
    category: "workshop",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
    price: 149,
    attendeeCount: 89,
    attendeeAvatars: [avatarUrl("fin1"), avatarUrl("fin2"), avatarUrl("fin3")],
    tags: ["FinTech", "Payments", "Workshop"],
    featured: true,
  },
  {
    id: "4",
    title: "Women in Tech Leadership Conference",
    description: "Celebrating and empowering women leaders in technology with keynotes, panels, and mentorship circles.",
    date: "2026-05-10",
    time: "09:00 - 17:00",
    location: "Google Campus, Dublin",
    city: "Dublin",
    category: "conference",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
    price: 199,
    attendeeCount: 342,
    attendeeAvatars: [avatarUrl("wit1"), avatarUrl("wit2"), avatarUrl("wit3")],
    tags: ["Women in Tech", "Leadership", "Diversity"],
    featured: true,
  },
  {
    id: "5",
    title: "Climate Tech Hackathon 2026",
    description: "48-hour hackathon to build solutions for climate change. Open to engineers, designers, and scientists.",
    date: "2026-05-17",
    time: "Fri 18:00 - Sun 18:00",
    location: "Station F, Paris",
    city: "Paris",
    category: "hackathon",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    price: null,
    attendeeCount: 210,
    attendeeAvatars: [avatarUrl("hack1"), avatarUrl("hack2"), avatarUrl("hack3")],
    tags: ["Climate", "Hackathon", "Free"],
  },
  {
    id: "6",
    title: "SaaS Growth Masterclass",
    description: "Learn proven strategies for scaling SaaS products from $1M to $100M ARR with industry veterans.",
    date: "2026-05-24",
    time: "14:00 - 18:00",
    location: "Spotify HQ, Stockholm",
    city: "Stockholm",
    category: "workshop",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    price: 99,
    attendeeCount: 156,
    attendeeAvatars: [avatarUrl("saas1"), avatarUrl("saas2"), avatarUrl("saas3")],
    tags: ["SaaS", "Growth", "Strategy"],
  },
  {
    id: "7",
    title: "Data Engineering Summit",
    description: "Deep dive into modern data stack, real-time pipelines, and data mesh architecture patterns.",
    date: "2026-06-02",
    time: "09:00 - 17:30",
    location: "Microsoft Conference Center, Berlin",
    city: "Berlin",
    category: "conference",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    price: 249,
    attendeeCount: 378,
    attendeeAvatars: [avatarUrl("data1"), avatarUrl("data2"), avatarUrl("data3")],
    tags: ["Data", "Engineering", "Architecture"],
  },
  {
    id: "8",
    title: "Startup Founders Networking Night",
    description: "Casual evening for startup founders to connect, share war stories, and find co-founders or investors.",
    date: "2026-06-05",
    time: "19:00 - 22:00",
    location: "Soho House, Austin",
    city: "Austin",
    category: "networking",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
    price: null,
    attendeeCount: 95,
    attendeeAvatars: [avatarUrl("net1"), avatarUrl("net2"), avatarUrl("net3")],
    tags: ["Startups", "Networking", "Free"],
  },
  {
    id: "9",
    title: "Design Systems Workshop",
    description: "Build scalable design systems from scratch. Bring your laptop and learn by doing with Figma + code.",
    date: "2026-06-12",
    time: "10:00 - 15:00",
    location: "Airbnb Office, Singapore",
    city: "Singapore",
    category: "workshop",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop",
    price: 79,
    attendeeCount: 64,
    attendeeAvatars: [avatarUrl("ds1"), avatarUrl("ds2"), avatarUrl("ds3")],
    tags: ["Design", "Systems", "Figma"],
  },
  {
    id: "10",
    title: "Cybersecurity in 2026",
    description: "Exploring the latest threats, zero-trust architecture, and AI-powered security solutions.",
    date: "2026-06-18",
    time: "09:00 - 17:00",
    location: "Deloitte Tower, Toronto",
    city: "Toronto",
    category: "conference",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=400&fit=crop",
    price: 349,
    attendeeCount: 267,
    attendeeAvatars: [avatarUrl("sec1"), avatarUrl("sec2"), avatarUrl("sec3")],
    tags: ["Security", "AI", "Enterprise"],
  },
  {
    id: "11",
    title: "Marketing Analytics Bootcamp",
    description: "Two-day intensive on attribution modeling, marketing mix, and data-driven campaign optimization.",
    date: "2026-06-25",
    time: "09:00 - 17:00",
    location: "HubSpot Campus, Boston",
    city: "Boston",
    category: "workshop",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    price: 199,
    attendeeCount: 112,
    attendeeAvatars: [avatarUrl("mkt1"), avatarUrl("mkt2"), avatarUrl("mkt3")],
    tags: ["Marketing", "Analytics", "Data"],
  },
  {
    id: "12",
    title: "Remote Work Culture Summit",
    description: "How to build thriving remote teams. Culture, tools, async communication, and mental health.",
    date: "2026-07-01",
    time: "10:00 - 16:00",
    location: "Virtual (Zoom)",
    city: "Remote",
    category: "conference",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=400&fit=crop",
    price: null,
    attendeeCount: 890,
    attendeeAvatars: [avatarUrl("rem1"), avatarUrl("rem2"), avatarUrl("rem3")],
    tags: ["Remote", "Culture", "Free"],
  },
];

export const people: Person[] = [
  {
    id: "p1", name: "Sarah Chen", avatar: avatarUrl("sarah-chen"), headline: "VP of Product at Stripe",
    company: "Stripe", industry: "Tech", role: "C-Level", location: "San Francisco",
    bio: "Building the future of internet commerce. Previously at Google and McKinsey. Stanford MBA.",
    expertise: ["Product Strategy", "Payments", "Growth"], mutualConnections: 12,
  },
  {
    id: "p2", name: "Marcus Johnson", avatar: avatarUrl("marcus-j"), headline: "Senior Engineer at Spotify",
    company: "Spotify", industry: "Tech", role: "Engineer", location: "Stockholm",
    bio: "Full-stack engineer passionate about music tech and distributed systems.",
    expertise: ["Backend", "Distributed Systems", "Rust"], mutualConnections: 8,
  },
  {
    id: "p3", name: "Priya Patel", avatar: avatarUrl("priya-p"), headline: "Design Lead at Figma",
    company: "Figma", industry: "Design", role: "Manager", location: "London",
    bio: "Crafting design tools for the next generation of designers. Ex-Airbnb.",
    expertise: ["Design Systems", "UX Research", "Product Design"], mutualConnections: 15,
  },
  {
    id: "p4", name: "David Kim", avatar: avatarUrl("david-k"), headline: "Partner at Andreessen Horowitz",
    company: "a16z", industry: "Finance", role: "C-Level", location: "San Francisco",
    bio: "Investing in the future of AI and enterprise software. Previously CTO at a Series C startup.",
    expertise: ["Venture Capital", "AI/ML", "Enterprise"], mutualConnections: 22,
  },
  {
    id: "p5", name: "Elena Rodriguez", avatar: avatarUrl("elena-r"), headline: "Marketing Director at HubSpot",
    company: "HubSpot", industry: "Marketing", role: "Manager", location: "Boston",
    bio: "Driving growth through data-driven marketing strategies and brand storytelling.",
    expertise: ["Growth Marketing", "Brand Strategy", "Content"], mutualConnections: 6,
  },
  {
    id: "p6", name: "James O'Connor", avatar: avatarUrl("james-o"), headline: "CTO at Revolut",
    company: "Revolut", industry: "FinTech", role: "C-Level", location: "London",
    bio: "Scaling fintech infrastructure to 30M+ users. Obsessed with reliability and speed.",
    expertise: ["FinTech", "Infrastructure", "Leadership"], mutualConnections: 18,
  },
  {
    id: "p7", name: "Yuki Tanaka", avatar: avatarUrl("yuki-t"), headline: "AI Research Scientist at DeepMind",
    company: "DeepMind", industry: "Tech", role: "Engineer", location: "London",
    bio: "Researching large language models and their applications in scientific discovery.",
    expertise: ["AI/ML", "NLP", "Research"], mutualConnections: 4,
  },
  {
    id: "p8", name: "Amara Osei", avatar: avatarUrl("amara-o"), headline: "Founder & CEO at PayStack",
    company: "PayStack", industry: "FinTech", role: "C-Level", location: "Lagos",
    bio: "Building Africa's leading payment infrastructure. Y Combinator alum.",
    expertise: ["Entrepreneurship", "Payments", "Africa Tech"], mutualConnections: 9,
  },
  {
    id: "p9", name: "Lucas Weber", avatar: avatarUrl("lucas-w"), headline: "Product Manager at Notion",
    company: "Notion", industry: "Tech", role: "Manager", location: "Berlin",
    bio: "Making tools that make work feel less like work. Productivity nerd.",
    expertise: ["Product Management", "Productivity", "SaaS"], mutualConnections: 11,
  },
  {
    id: "p10", name: "Sofia Andersson", avatar: avatarUrl("sofia-a"), headline: "Data Science Lead at Klarna",
    company: "Klarna", industry: "FinTech", role: "Manager", location: "Stockholm",
    bio: "Using ML to revolutionize how people shop and pay. Math lover turned product builder.",
    expertise: ["Data Science", "ML", "FinTech"], mutualConnections: 7,
  },
  {
    id: "p11", name: "Raj Mehta", avatar: avatarUrl("raj-m"), headline: "Engineering Manager at Google",
    company: "Google", industry: "Tech", role: "Manager", location: "Mountain View",
    bio: "Leading Google Cloud's identity and security team. Building for billions.",
    expertise: ["Cloud", "Security", "Engineering Management"], mutualConnections: 14,
  },
  {
    id: "p12", name: "Isabelle Dupont", avatar: avatarUrl("isabelle-d"), headline: "Strategy Consultant at McKinsey",
    company: "McKinsey", industry: "Consulting", role: "Manager", location: "Paris",
    bio: "Advising Fortune 500 companies on digital transformation and growth strategy.",
    expertise: ["Strategy", "Digital Transformation", "Consulting"], mutualConnections: 19,
  },
  {
    id: "p13", name: "Kwame Asante", avatar: avatarUrl("kwame-a"), headline: "Student at MIT",
    company: "MIT", industry: "Tech", role: "Student", location: "Boston",
    bio: "CS student passionate about using technology for social impact. Building my first startup.",
    expertise: ["Full-Stack Dev", "Social Impact", "AI"], mutualConnections: 3,
  },
  {
    id: "p14", name: "Mia Johansson", avatar: avatarUrl("mia-j"), headline: "UX Designer at IDEO",
    company: "IDEO", industry: "Design", role: "Engineer", location: "Tokyo",
    bio: "Human-centered design practitioner. Designing for accessibility and inclusion.",
    expertise: ["UX Design", "Accessibility", "Research"], mutualConnections: 5,
  },
  {
    id: "p15", name: "Alex Petrov", avatar: avatarUrl("alex-p"), headline: "DevOps Lead at Datadog",
    company: "Datadog", industry: "Tech", role: "Engineer", location: "New York",
    bio: "Making observability simple. Kubernetes, Terraform, and everything in between.",
    expertise: ["DevOps", "Kubernetes", "Observability"], mutualConnections: 10,
  },
  {
    id: "p16", name: "Nina Kowalski", avatar: avatarUrl("nina-k"), headline: "Head of Sales at Salesforce",
    company: "Salesforce", industry: "Tech", role: "C-Level", location: "Chicago",
    bio: "Leading enterprise sales teams to exceed targets through consultative selling and AI-powered tools.",
    expertise: ["Enterprise Sales", "CRM", "Team Leadership"], mutualConnections: 16,
  },
];

export const mentors: Mentor[] = [
  {
    id: "m1", name: "Sarah Chen", avatar: avatarUrl("sarah-chen"), title: "VP of Product", company: "Stripe",
    expertise: ["Product Strategy", "Career Growth", "Leadership"], rating: 4.9, reviewCount: 47,
    yearsExperience: 14, menteesCount: 12, bio: "I help aspiring PMs and product leaders navigate career transitions and build world-class products.", available: true,
  },
  {
    id: "m2", name: "David Kim", avatar: avatarUrl("david-k"), title: "Partner", company: "a16z",
    expertise: ["Venture Capital", "Fundraising", "Startup Strategy"], rating: 4.8, reviewCount: 38,
    yearsExperience: 18, menteesCount: 8, bio: "Helping founders understand VC, build pitch decks, and navigate fundraising rounds.", available: true,
  },
  {
    id: "m3", name: "Priya Patel", avatar: avatarUrl("priya-p"), title: "Design Lead", company: "Figma",
    expertise: ["Design Career", "Portfolio Review", "Design Systems"], rating: 5.0, reviewCount: 52,
    yearsExperience: 10, menteesCount: 15, bio: "I mentor designers at all levels — from juniors building their first portfolio to leads scaling design orgs.", available: true,
  },
  {
    id: "m4", name: "James O'Connor", avatar: avatarUrl("james-o"), title: "CTO", company: "Revolut",
    expertise: ["Engineering Leadership", "System Design", "FinTech"], rating: 4.7, reviewCount: 29,
    yearsExperience: 16, menteesCount: 6, bio: "Mentoring engineers who want to transition into tech leadership and scale teams.", available: false,
  },
  {
    id: "m5", name: "Elena Rodriguez", avatar: avatarUrl("elena-r"), title: "Marketing Director", company: "HubSpot",
    expertise: ["Growth Marketing", "Content Strategy", "Analytics"], rating: 4.9, reviewCount: 41,
    yearsExperience: 12, menteesCount: 10, bio: "Helping marketers level up with data-driven strategies and creative brand thinking.", available: true,
  },
  {
    id: "m6", name: "Raj Mehta", avatar: avatarUrl("raj-m"), title: "Engineering Manager", company: "Google",
    expertise: ["Engineering Management", "Cloud Architecture", "Career Development"], rating: 4.8, reviewCount: 33,
    yearsExperience: 15, menteesCount: 9, bio: "Guiding engineers through the IC-to-manager transition and beyond at big tech companies.", available: true,
  },
  {
    id: "m7", name: "Isabelle Dupont", avatar: avatarUrl("isabelle-d"), title: "Strategy Consultant", company: "McKinsey",
    expertise: ["Strategy", "Case Prep", "Business Development"], rating: 4.6, reviewCount: 24,
    yearsExperience: 9, menteesCount: 14, bio: "Helping aspiring consultants crack case interviews and build analytical thinking skills.", available: true,
  },
  {
    id: "m8", name: "Amara Osei", avatar: avatarUrl("amara-o"), title: "Founder & CEO", company: "PayStack",
    expertise: ["Entrepreneurship", "Fundraising", "Africa Tech"], rating: 4.9, reviewCount: 36,
    yearsExperience: 11, menteesCount: 7, bio: "Mentoring first-time founders, especially those building for emerging markets.", available: true,
  },
  {
    id: "m9", name: "Nina Kowalski", avatar: avatarUrl("nina-k"), title: "Head of Sales", company: "Salesforce",
    expertise: ["Enterprise Sales", "Negotiation", "Team Building"], rating: 4.7, reviewCount: 28,
    yearsExperience: 13, menteesCount: 11, bio: "Coaching sales professionals to close bigger deals and build sustainable pipelines.", available: false,
  },
  {
    id: "m10", name: "Marcus Johnson", avatar: avatarUrl("marcus-j"), title: "Senior Engineer", company: "Spotify",
    expertise: ["Backend Engineering", "System Design", "Career Growth"], rating: 4.8, reviewCount: 31,
    yearsExperience: 8, menteesCount: 5, bio: "Helping early-career engineers build strong foundations and land roles at top tech companies.", available: true,
  },
  {
    id: "m11", name: "Yuki Tanaka", avatar: avatarUrl("yuki-t"), title: "AI Research Scientist", company: "DeepMind",
    expertise: ["AI/ML", "Research Career", "PhD Guidance"], rating: 5.0, reviewCount: 19,
    yearsExperience: 7, menteesCount: 4, bio: "Guiding students and researchers pursuing careers in AI research and machine learning.", available: true,
  },
  {
    id: "m12", name: "Lucas Weber", avatar: avatarUrl("lucas-w"), title: "Product Manager", company: "Notion",
    expertise: ["Product Management", "B2B SaaS", "User Research"], rating: 4.6, reviewCount: 22,
    yearsExperience: 6, menteesCount: 8, bio: "Mentoring aspiring PMs on breaking into product and building user-centric features.", available: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Biznet.events completely changed how I network. I found my co-founder at a meetup I discovered here, and the in-app networking made it seamless to stay connected afterward.",
    name: "Alex Petrov",
    title: "DevOps Lead",
    company: "Datadog",
    avatar: avatarUrl("alex-p"),
  },
  {
    id: "t2",
    quote: "The mentorship feature is a game-changer. My mentor at McKinsey helped me prepare for consulting interviews, and I landed my dream role within three months.",
    name: "Kwame Asante",
    title: "Student → Consultant",
    company: "BCG",
    avatar: avatarUrl("kwame-a"),
  },
  {
    id: "t3",
    quote: "As an event organizer, Biznet gives me something no other platform does — real engagement between attendees. Our events have a 40% higher return rate now.",
    name: "Sofia Andersson",
    title: "Data Science Lead",
    company: "Klarna",
    avatar: avatarUrl("sofia-a"),
  },
  {
    id: "t4",
    quote: "I've attended dozens of conferences, but Biznet's attendee networking feature actually makes them valuable. I knew exactly who to meet before I even walked in.",
    name: "Mia Johansson",
    title: "UX Designer",
    company: "IDEO",
    avatar: avatarUrl("mia-j"),
  },
  {
    id: "t5",
    quote: "Being a mentor on Biznet is incredibly rewarding. The matching system connects me with mentees who are genuinely driven and aligned with my expertise.",
    name: "Sarah Chen",
    title: "VP of Product",
    company: "Stripe",
    avatar: avatarUrl("sarah-chen"),
  },
];

export const stats = [
  { label: "Events Hosted", value: 500 },
  { label: "Professionals", value: 2400 },
  { label: "Mentors", value: 180 },
  { label: "Match Rate", value: 95, suffix: "%" },
];
