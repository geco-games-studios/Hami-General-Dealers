export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  slug: string
}

export interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
  type: string
}

export interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  image: string
  department: string
  role?: 'director' | 'pa' | 'general-manager' | 'manager'
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  quote: string
  image: string
}

export interface HeroVideo {
  type: 'youtube' | 'vimeo' | 'mp4'
  url: string
}

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Hami General Dealers Company Overview',
    excerpt: 'Hami General Dealers provides eggs, animal feed, veterinary drugs and services, printing, design, stationery, and agricultural supplies across Zambia.',
    content: 'Hami General Dealers is a Zambian-owned enterprise registered in 2015, established to provide high-quality products and services at affordable prices.',
    author: 'Hami General Dealers',
    date: '2026-06-25',
    category: 'Agriculture',
    slug: 'company-overview',
  },
  {
    id: '2',
    title: 'Product and Service Delivery',
    excerpt: 'Our team supplies eggs, agricultural inputs, stock feed, veterinary drugs, day-old chicks, T-shirts, hoodies, printing, and design services.',
    content: 'Hami General Dealers works directly with manufacturers and source suppliers to improve control of the agricultural supply chain.',
    author: 'Hami General Dealers',
    date: '2026-06-25',
    category: 'Company News',
    slug: 'product-service-delivery',
  },
  {
    id: '3',
    title: 'Quality Service and Client Satisfaction',
    excerpt: 'Hami General Dealers operates in a competitive market by placing high value on quality service, reliable delivery, and client satisfaction.',
    content: 'The company has effective distribution channels that enable timely provision of agricultural inputs, products, and services to customers.',
    author: 'Hami General Dealers',
    date: '2026-06-25',
    category: 'Technology',
    slug: 'quality-service-client-satisfaction',
  },
  {
    id: '4',
    title: 'Our Agricultural Supply Network',
    excerpt: 'We maintain relationships with producers and suppliers of chicks, vaccines, feed, veterinary medicine, and other agricultural products.',
    content: 'Hami General Dealers avoids unnecessary middlemen and focuses on reliable source relationships across its supply chain.',
    author: 'Hami General Dealers',
    date: '2026-06-25',
    category: 'Partnerships',
    slug: 'agricultural-supply-network',
  },
  {
    id: '5',
    title: 'Supporting Farmers and Marketeers',
    excerpt: 'Our distribution channels support farmers and marketeers with timely access to agricultural inputs and services.',
    content: 'Hami General Dealers serves customers through quality service, practical supply, and a sufficient resource base for operations.',
    author: 'Hami General Dealers',
    date: '2026-06-25',
    category: 'Community',
    slug: 'supporting-farmers-marketeers',
  },
  {
    id: '6',
    title: 'Hami General Dealers Vision',
    excerpt: 'We aim to offer clients world-class service, fair pricing, and strong belief in the products, equipment, and services we provide.',
    content: 'Hami General Dealers works in an equal opportunity environment and encourages entrepreneurial flair.',
    author: 'Hami General Dealers',
    date: '2026-06-25',
    category: 'Agriculture',
    slug: 'hami-general-dealers-vision',
  },
]

// Events
export const events: Event[] = [
  {
    id: '1',
    title: 'Agricultural Inputs and Advisory Day',
    date: '2026-07-15',
    time: '09:00 AM',
    location: 'Lusaka, Zambia',
    description: 'A practical customer engagement day focused on chicks, vaccines, stock feed, veterinary medicine, and agricultural supply support.',
    image: '/images/summit.jpg',
    type: 'Customer Session',
  },
  {
    id: '2',
    title: 'Hami Agrovert Product Showcase',
    date: '2026-07-22',
    time: '02:00 PM',
    location: 'Lusaka, Zambia',
    description: 'A showcase of animal feed, veterinary drugs, day-old chicks, and agricultural input solutions available through Hami Agrovert.',
    image: '/images/product-launch.jpg',
    type: 'Product Showcase',
  },
  {
    id: '3',
    title: 'Layer and Egg Production Workshop',
    date: '2026-08-05',
    time: '10:00 AM',
    location: 'Hami Farms, Zambia',
    description: 'A hands-on session on layer production, egg quality, farm planning, and practical livestock support.',
    image: '/images/workshop.jpg',
    type: 'Workshop',
  },
  {
    id: '4',
    title: 'Farmers and Marketeers Outreach',
    date: '2026-08-12',
    time: '08:00 AM',
    location: 'Selected locations across Zambia',
    description: 'Community-focused outreach connecting farmers and marketeers with Hami General Dealers products and services.',
    image: '/images/outreach.jpg',
    type: 'Community Event',
  },
]

// Team Members
export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Nchimunya iLLute Hamaimbo',
    title: 'Chief Executive Director',
    bio: 'Leads Hami General Dealers strategic direction, growth, and delivery of high-quality products and services across Zambia.',
    image: '/images/team-ceo.jpg',
    department: 'Executive',
    role: 'director',
  },
  {
    id: '2',
    name: 'Miyanda Hamimbo',
    title: 'Commercial Director',
    bio: 'Guides commercial planning, supplier relationships, customer growth, and market coordination for Hami General Dealers.',
    image: '/images/team-operations.jpg',
    department: 'Commercial',
    role: 'director',
  },
  {
    id: '3',
    name: 'Choolwe Mwiinga',
    title: 'Executive Business Officer',
    bio: 'Supports executive business coordination, administration, customer follow-up, and operational communication.',
    image: '/images/team-pa.jpg',
    department: 'Executive',
    role: 'pa',
  },
  {
    id: '4',
    name: 'Dyabbu Hikande',
    title: 'General Manager',
    bio: 'Oversees day-to-day operations and coordination across Hami General Dealers business units and service lines.',
    image: '/images/team-gm.jpg',
    department: 'Management',
    role: 'general-manager',
  },
  {
    id: '5',
    name: 'Judith Hankombo',
    title: 'Finance Manager',
    bio: 'Manages finance, reporting, and controls that support reliable company operations and service delivery.',
    image: '/images/team-finance.jpg',
    department: 'Finance',
    role: 'manager',
  },
  {
    id: '6',
    name: 'Mapalo Kayange',
    title: 'Human Resource Manager',
    bio: 'Leads people management, recruitment support, staff coordination, and workplace development.',
    image: '/images/team-hr.jpg',
    department: 'Human Resources',
    role: 'manager',
  },
  {
    id: '7',
    name: 'Brighton Mutena',
    title: 'Administrative Manager',
    bio: 'Coordinates administration, office support, documentation, and smooth internal workflows.',
    image: '/images/team-admin.jpg',
    department: 'Administration',
    role: 'manager',
  },
  {
    id: '8',
    name: 'Wendy Maimbo',
    title: 'IT, Sales and Marketing Manager',
    bio: 'Coordinates IT support, sales activity, marketing communication, and customer engagement.',
    image: '/images/team-sales.jpg',
    department: 'IT, Sales and Marketing',
    role: 'manager',
  },
  {
    id: '9',
    name: 'Rajesh Ngandu',
    title: 'Agrovert Manager',
    bio: 'Leads Agrovert supply activities, agricultural input coordination, and customer support for chicks, vaccines, feed, and veterinary products.',
    image: '/images/team-agrovert.jpg',
    department: 'Agrovert',
    role: 'manager',
  },
  {
    id: '10',
    name: 'Queen Chiinda',
    title: 'Operations Manager',
    bio: 'Supports operational planning, delivery coordination, customer service, and supply chain execution.',
    image: '/images/team-operations-manager.jpg',
    department: 'Operations',
    role: 'manager',
  },
  {
    id: '11',
    name: 'Harison Chooye',
    title: 'Farm Manager',
    bio: 'Manages farm production activities, layer and egg production support, and practical farm operations.',
    image: '/images/team-farms.jpg',
    department: 'Farms',
    role: 'manager',
  },
]

// Services
export const services: Service[] = [
  {
    id: '1',
    title: 'Agricultural Inputs',
    description: 'Chicks, vaccines, feed, veterinary medicine, and related agricultural products sourced through reliable channels.',
    icon: 'Leaf',
  },
  {
    id: '2',
    title: 'Layer and Egg Production',
    description: 'Production and supply support for eggs, layer operations, and practical farm needs.',
    icon: 'Lightbulb',
  },
  {
    id: '3',
    title: 'Veterinary Drugs and Services',
    description: 'Veterinary products and service support for farmers and livestock customers.',
    icon: 'BookOpen',
  },
  {
    id: '4',
    title: 'Printing and General Supply',
    description: 'Plain T-shirts, hoodies, printing, design, office supplies, stationery, and general supply services.',
    icon: 'TrendingUp',
  },
]

// Sub-organization data
export const subOrganizations = {
  agrovert: {
    name: 'Hami Agrovert',
    tagline: 'Chicks, Vaccines, Drugs, Feed, and Consultations',
    description: 'Agrovert supplies chicks, vaccines, veterinary drugs, animal feed, and practical farm consultations for poultry and livestock producers.',
    mission: 'To provide reliable farm products, animal health support, feed, and consultations in a timely manner.',
    services: [
      'Chick supply',
      'Vaccines and veterinary drugs',
      'Animal feed and stock feed',
      'Poultry and livestock consultations',
      'Reliable farm product sourcing',
    ],
    image: '/images/agrovert-hero.jpg',
  },
  mifi: {
    name: 'Hami Mifi',
    tagline: 'Microfinance and Daily Loans',
    description: 'Mifi is a microfinance company specializing in daily loans for customers who need practical short-term financial support.',
    mission: 'To provide accessible daily loan services with practical customer support.',
    services: [
      'Daily loans',
      'Microfinance services',
      'Short-term financial support',
      'Customer onboarding',
      'Repayment coordination',
    ],
    image: '/images/mifi-hero.jpg',
  },
  farms: {
    name: 'Hami Farms',
    tagline: 'Poultry Farming and Cattle Production',
    description: 'Hami Farms focuses on poultry farming and cattle production, with practical farm management and quality production support.',
    mission: 'To produce quality poultry and cattle products using reliable, efficient, and practical farming methods.',
    services: [
      'Poultry farming',
      'Layer and egg production',
      'Cattle production',
      'Animal care and feed planning',
      'Farm operations management',
    ],
    image: '/images/farms-hero.jpg',
  },
}

// Testimonials from farmers and partners
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Local Farmer',
    role: 'Agricultural Customer',
    company: 'Zambia',
    quote: 'Hami General Dealers provides reliable access to feed, veterinary products, and agricultural inputs when we need them.',
    image: '/images/testimonial-john.jpg',
  },
  {
    id: '2',
    name: 'Market Partner',
    role: 'Marketeer',
    company: 'Zambia',
    quote: 'The team values quality service and client satisfaction, which makes them a practical supply partner.',
    image: '/images/testimonial-mary.jpg',
  },
  {
    id: '3',
    name: 'Business Customer',
    role: 'Business Owner',
    company: 'Zambia',
    quote: 'Their general supply, printing, and design services help us source practical products for events and daily operations.',
    image: '/images/testimonial-samuel.jpg',
  },
  {
    id: '4',
    name: 'Poultry Customer',
    role: 'Egg and Poultry Buyer',
    company: 'Zambia',
    quote: 'Hami General Dealers understands layer production and the importance of dependable agricultural service delivery.',
    image: '/images/testimonial-rachel.jpg',
  },
]

// Hero video configuration - update this with your YouTube URL
export const heroVideo: HeroVideo = {
  type: 'youtube',
  url: '',
}
