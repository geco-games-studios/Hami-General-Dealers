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
    title: 'Sustainable Agriculture Practices for 2024',
    excerpt: 'Discover the latest sustainable farming techniques that maximize yield while protecting the environment.',
    content: 'Full content about sustainable agriculture...',
    author: 'John Mwangi',
    date: '2024-02-14',
    category: 'Agriculture',
    slug: 'sustainable-agriculture-2024',
  },
  {
    id: '2',
    title: 'Hami General Dealers Expands to New Region',
    excerpt: 'We are excited to announce our expansion into the northern region, bringing quality products and services closer to you.',
    content: 'Full content about expansion...',
    author: 'Sarah Kipchoge',
    date: '2024-02-10',
    category: 'Company News',
    slug: 'expansion-announcement',
  },
  {
    id: '3',
    title: 'The Future of Agricultural Technology',
    excerpt: 'Exploring how AI and IoT are transforming modern farming operations.',
    content: 'Full content about agri-tech...',
    author: 'David Ochieng',
    date: '2024-02-05',
    category: 'Technology',
    slug: 'agri-tech-future',
  },
  {
    id: '4',
    title: 'Meet Our New Partnership with Tech Innovators',
    excerpt: 'Hami Farms partners with leading tech companies to bring cutting-edge solutions.',
    content: 'Full content about partnership...',
    author: 'Grace Mutua',
    date: '2024-01-28',
    category: 'Partnerships',
    slug: 'tech-partnership',
  },
  {
    id: '5',
    title: 'Community Impact: Our Contribution to Local Agriculture',
    excerpt: 'Learn how Hami General Dealers supports local farming communities through training and resources.',
    content: 'Full content about community impact...',
    author: 'James Kariuki',
    date: '2024-01-20',
    category: 'Community',
    slug: 'community-impact',
  },
  {
    id: '6',
    title: 'Organic Farming: Benefits and Best Practices',
    excerpt: 'A comprehensive guide to transitioning to organic farming methods.',
    content: 'Full content about organic farming...',
    author: 'Martha Njeri',
    date: '2024-01-15',
    category: 'Agriculture',
    slug: 'organic-farming-guide',
  },
]

// Events
export const events: Event[] = [
  {
    id: '1',
    title: 'Annual Agricultural Summit 2024',
    date: '2024-03-15',
    time: '09:00 AM',
    location: 'Nairobi Convention Centre',
    description: 'Join us for our premier annual summit featuring industry leaders, research presentations, and networking opportunities.',
    image: '/images/summit.jpg',
    type: 'Conference',
  },
  {
    id: '2',
    title: 'Hami Agrovert Product Launch',
    date: '2024-03-22',
    time: '02:00 PM',
    location: 'Westgate Mall, Nairobi',
    description: 'Experience our new sustainable agriculture product line. Exclusive previews and special launch discounts available.',
    image: '/images/product-launch.jpg',
    type: 'Product Launch',
  },
  {
    id: '3',
    title: 'Farming Workshop: Modern Techniques',
    date: '2024-04-05',
    time: '10:00 AM',
    location: 'Hami Farms Training Center, Kiambu',
    description: 'Hands-on workshop covering latest farming techniques, pest management, and crop optimization.',
    image: '/images/workshop.jpg',
    type: 'Workshop',
  },
  {
    id: '4',
    title: 'Community Outreach: Seeds for Success',
    date: '2024-04-12',
    time: '08:00 AM',
    location: 'Multiple Locations Across Kenya',
    description: 'Free training and seed distribution program for smallholder farmers in partnership with Mifi.',
    image: '/images/outreach.jpg',
    type: 'Community Event',
  },
]

// Team Members
export const teamMembers: TeamMember[] = [
  // Directors
  {
    id: '1',
    name: 'Peter Kipchoge',
    title: 'Director & Founder',
    bio: 'Visionary leader with 25+ years in agricultural business and sustainability. Oversees strategic direction and organizational growth.',
    image: '/images/team-ceo.jpg',
    department: 'Executive',
    role: 'director',
  },
  {
    id: '2',
    name: 'Dr. Michael Omondi',
    title: 'Director of Operations',
    bio: 'Strategic operations expert with deep expertise in supply chain management and business optimization across all divisions.',
    image: '/images/team-operations.jpg',
    department: 'Operations',
    role: 'director',
  },
  // PA to Director
  {
    id: '3',
    name: 'Grace Mutua',
    title: 'Personal Assistant to Director',
    bio: 'Highly organized professional providing executive support and coordination for all directorial activities and communications.',
    image: '/images/team-pa.jpg',
    department: 'Executive',
    role: 'pa',
  },
  // General Manager
  {
    id: '4',
    name: 'Sarah Kipchoge',
    title: 'General Manager',
    bio: 'Experienced manager overseeing day-to-day operations and ensuring seamless coordination between all organizational units.',
    image: '/images/team-gm.jpg',
    department: 'Management',
    role: 'general-manager',
  },
  // Managers
  {
    id: '5',
    name: 'Priya Sharma',
    title: 'Manager - Agrovert Division',
    bio: 'Sustainability specialist leading Agrovert\'s eco-friendly initiatives and sustainable farming solutions.',
    image: '/images/team-agrovert.jpg',
    department: 'Agrovert',
    role: 'manager',
  },
  {
    id: '6',
    name: 'Joseph Kipkemoi',
    title: 'Manager - Hami Farms',
    bio: 'Modern farming expert managing large-scale agricultural operations and advanced farming techniques.',
    image: '/images/team-farms.jpg',
    department: 'Farms',
    role: 'manager',
  },
  {
    id: '7',
    name: 'Fatima Hassan',
    title: 'Manager - Mifi Division',
    bio: 'Business development leader managing market expansion and commercial growth strategies for Mifi.',
    image: '/images/team-mifi.jpg',
    department: 'Mifi',
    role: 'manager',
  },
  {
    id: '8',
    name: 'David Ochieng',
    title: 'Manager - Sales & Marketing',
    bio: 'Results-driven manager driving sales strategies and brand development across all organizational divisions.',
    image: '/images/team-sales.jpg',
    department: 'Sales',
    role: 'manager',
  },
  {
    id: '9',
    name: 'Dr. Alice Wanjiru',
    title: 'Manager - Agricultural Innovation',
    bio: 'PhD in Agricultural Science leading research and innovation initiatives across our farming subsidiaries.',
    image: '/images/team-innovation.jpg',
    department: 'Innovation',
    role: 'manager',
  },
  {
    id: '10',
    name: 'James Kariuki',
    title: 'Manager - Community Relations',
    bio: 'Community engagement specialist managing stakeholder relations and community development programs.',
    image: '/images/team-community.jpg',
    department: 'Community',
    role: 'manager',
  },
  {
    id: '11',
    name: 'Martha Njeri',
    title: 'Manager - Human Resources',
    bio: 'HR professional responsible for talent management, recruitment, and organizational development.',
    image: '/images/team-hr.jpg',
    department: 'Human Resources',
    role: 'manager',
  },
  {
    id: '12',
    name: 'Robert Kiplagat',
    title: 'Manager - Finance & Administration',
    bio: 'Financial management expert overseeing budgeting, accounting, and administrative operations.',
    image: '/images/team-finance.jpg',
    department: 'Finance',
    role: 'manager',
  },
]

// Services
export const services: Service[] = [
  {
    id: '1',
    title: 'Agricultural Supplies',
    description: 'Quality seeds, fertilizers, and farming equipment for optimal crop yields.',
    icon: 'Leaf',
  },
  {
    id: '2',
    title: 'Consulting Services',
    description: 'Expert advice on farming practices, market trends, and business growth.',
    icon: 'Lightbulb',
  },
  {
    id: '3',
    title: 'Training Programs',
    description: 'Comprehensive training for modern farming techniques and sustainability.',
    icon: 'BookOpen',
  },
  {
    id: '4',
    title: 'Market Access',
    description: 'Direct access to reliable markets for your agricultural products.',
    icon: 'TrendingUp',
  },
]

// Sub-organization data
export const subOrganizations = {
  agrovert: {
    name: 'Hami Agrovert',
    tagline: 'Sustainable Agriculture Solutions',
    description: 'Agrovert specializes in eco-friendly and sustainable agricultural practices, promoting environmental conservation while maintaining productivity.',
    mission: 'To provide sustainable farming solutions that benefit farmers, communities, and the environment.',
    services: [
      'Organic farming supplies and certification',
      'Soil health management',
      'Water conservation technologies',
      'Biodiversity preservation',
      'Carbon-neutral farming practices',
    ],
    image: '/images/agrovert-hero.jpg',
  },
  mifi: {
    name: 'Hami Mifi',
    tagline: 'General Trade & Commerce',
    description: 'Mifi is our general trading division, providing a wide range of commercial goods and services to businesses and individuals across Kenya.',
    mission: 'To be the trusted partner for quality general merchandise and business solutions.',
    services: [
      'General merchandise distribution',
      'Wholesale trading',
      'Retail partnerships',
      'Import and export services',
      'Business logistics',
    ],
    image: '/images/mifi-hero.jpg',
  },
  farms: {
    name: 'Hami Farms',
    tagline: 'Modern Agriculture Operations',
    description: 'Hami Farms operates large-scale modern farming operations, producing quality crops and livestock using advanced farming techniques.',
    mission: 'To produce quality agricultural products using modern, efficient farming methods.',
    services: [
      'Crop production and processing',
      'Livestock farming',
      'Agricultural research',
      'Farm equipment rental',
      'Agricultural product processing',
    ],
    image: '/images/farms-hero.jpg',
  },
}

// Testimonials from farmers and partners
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Mwangi',
    role: 'Small-scale Farmer',
    company: 'Mwangi Farms, Kiambu',
    quote: 'Hami General Dealers transformed my farming operation. Their training and quality seeds increased my yield by 40%. I now earn three times more than before.',
    image: '/images/testimonial-john.jpg',
  },
  {
    id: '2',
    name: 'Mary Kipchoge',
    role: 'Agricultural Cooperative Manager',
    company: 'Rift Valley Farmers Cooperative',
    quote: 'Working with Hami Agrovert has helped our cooperative adopt sustainable practices. Our members are happier, our profits are up, and we\'re helping the environment.',
    image: '/images/testimonial-mary.jpg',
  },
  {
    id: '3',
    name: 'Samuel Kipkemoi',
    role: 'Business Owner',
    company: 'Kipkemoi Trading Ltd',
    quote: 'Hami Mifi is our trusted partner for quality merchandise. Their reliability and competitive pricing have helped us grow our business significantly.',
    image: '/images/testimonial-samuel.jpg',
  },
  {
    id: '4',
    name: 'Dr. Rachel Ochieng',
    role: 'Agricultural Researcher',
    company: 'Kenya Agricultural Institute',
    quote: 'Hami Farms\' commitment to modern farming techniques and research is commendable. They\'re truly pushing the boundaries of what\'s possible in Kenyan agriculture.',
    image: '/images/testimonial-rachel.jpg',
  },
]

// Hero video configuration - update this with your YouTube URL
export const heroVideo: HeroVideo = {
  type: 'youtube',
  url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your actual video URL
}
