import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  Car,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Leaf,
  Search,
  ShieldCheck,
  Sparkles,
  Sprout,
  Star,
  Tractor,
  TrendingUp,
  Users,
} from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const categories = ['Overview', 'Agrovert', 'Hami Farms', 'Mifi Business Solutions', 'Hamiz Motors', 'Mipro']

const partners = [
  { name: 'Agrovert', mark: 'Ag', color: 'text-emerald-700' },
  { name: 'Hami Farms', mark: 'HF', color: 'text-lime-700' },
  { name: 'Mifi Business Solutions', mark: 'MB', color: 'text-sky-700' },
  { name: 'Hamiz Motors', mark: 'HM', color: 'text-orange-600' },
  { name: 'Mipro', mark: 'MP', color: 'text-indigo-700' },
  { name: 'Hami Consult', mark: 'HC', color: 'text-violet-700' },
  { name: 'Hami Supplies', mark: 'HS', color: 'text-rose-700' },
  { name: 'Local Farmers', mark: 'LF', color: 'text-teal-700' },
  { name: 'Retail Network', mark: 'RN', color: 'text-slate-700' },
]

const serviceCards = [
  {
    title: 'Group-wide supply, agriculture, and business support',
    manager: 'Jason Williams',
    category: 'Overview',
    icon: Leaf,
    price: 'Active',
    oldPrice: '',
    tone: 'bg-emerald-100 text-emerald-800',
    art: 'from-emerald-200 via-lime-100 to-white',
  },
  {
    title: 'Sustainable farming inputs and advisory programs',
    manager: 'Pamela Foster',
    category: 'Agrovert',
    icon: Tractor,
    price: 'Growing',
    oldPrice: '',
    tone: 'bg-sky-100 text-sky-800',
    art: 'from-sky-100 via-emerald-100 to-white',
  },
  {
    title: 'Farm production, planning, and crop operations',
    manager: 'Rose Simmons',
    category: 'Hami Farms',
    icon: ShieldCheck,
    price: 'Managed',
    oldPrice: '',
    tone: 'bg-amber-100 text-amber-800',
    art: 'from-amber-100 via-orange-50 to-white',
  },
  {
    title: 'Retail supply, procurement, and trading network',
    manager: 'Jason Williams',
    category: 'Mifi Business Solutions',
    icon: TrendingUp,
    price: 'Connected',
    oldPrice: '',
    tone: 'bg-teal-100 text-teal-800',
    art: 'from-teal-100 via-cyan-50 to-white',
  },
  {
    title: 'Vehicle sourcing and motors waiting-list pipeline',
    manager: 'Jason Williams',
    category: 'Hamiz Motors',
    icon: Sparkles,
    price: 'Launching',
    oldPrice: '',
    tone: 'bg-violet-100 text-violet-800',
    art: 'from-violet-100 via-fuchsia-50 to-white',
  },
  {
    title: 'Consulting, partnerships, and growth coordination',
    manager: 'Jason Williams',
    category: 'Consulting',
    icon: Sprout,
    price: 'Available',
    oldPrice: '',
    tone: 'bg-rose-100 text-rose-800',
    art: 'from-rose-100 via-orange-50 to-white',
  },
  {
    title: 'Projects, procurement, and delivery coordination',
    manager: 'Jason Williams',
    category: 'Mipro',
    icon: ShieldCheck,
    price: 'Coordinating',
    oldPrice: '',
    tone: 'bg-indigo-100 text-indigo-800',
    art: 'from-indigo-100 via-sky-50 to-white',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[#eaf8f0]">
          <div className="absolute left-8 top-10 hidden h-24 w-24 rounded-full border-[10px] border-dashed border-amber-300/80 md:block" />
          <div className="absolute right-10 top-32 hidden h-32 w-20 rounded-full border-r-2 border-emerald-700/60 lg:block" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:py-20 lg:px-8">
            <div className="relative z-10 max-w-xl">
              <p className="mb-5 text-sm font-semibold text-emerald-700">Start with a trusted local partner</p>
              <h1 className="text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
                Grow from anywhere, and build your brighter business.
              </h1>
              <p className="mt-6 max-w-md text-sm leading-7 text-slate-600">
                Hami General Dealers brings farm inputs, commercial supply, consulting, and market support together for producers and partners ready to move.
              </p>
              <Link
                href="/consult"
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-emerald-800"
              >
                Start A Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative min-h-[360px] md:min-h-[480px]">
              <div className="absolute left-5 top-16 z-20 hidden rounded-full bg-emerald-700 px-7 py-6 text-center text-white shadow-xl sm:block">
                <BookOpen className="mx-auto mb-1 h-7 w-7" />
                <div className="text-2xl font-extrabold">1,235</div>
                <div className="text-xs font-semibold">projects</div>
              </div>
              <div className="absolute right-5 top-4 z-20 rounded-full bg-white/90 px-4 py-3 text-center shadow-lg">
                <div className="text-lg font-extrabold text-emerald-700">4.8</div>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-3 w-3 fill-current" />
                  ))}
                </div>
              </div>
              <Image
                src="/images/hami-hero-professional.png"
                alt="Hami General Dealers consultant holding a laptop"
                fill
                priority
                className="object-contain object-bottom"
                sizes="(min-width: 768px) 55vw, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-950">
                  Organizational <span className="text-emerald-700">Summary</span>
                </h2>
                <div className="mt-2 h-4 w-28 rounded-full border-b-2 border-emerald-700" />
              </div>
              <label className="relative block w-full md:w-96">
                <span className="sr-only">Search organization summary</span>
                <input
                  type="search"
                  placeholder="Search the organization"
                  className="h-12 w-full rounded-md border border-emerald-100 bg-white px-4 pr-12 text-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                />
                <span className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
                  <Search className="h-4 w-4" />
                </span>
              </label>
            </div>

            <div className="mt-10 flex items-center gap-4 bg-[#eaf8f0] px-4 py-5">
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm" aria-label="Previous category">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    className={`h-11 rounded-md border px-3 text-sm font-semibold transition-colors ${
                      index === 0
                        ? 'border-emerald-700 bg-white text-emerald-800'
                        : 'border-transparent bg-white/80 text-slate-700 hover:border-emerald-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm" aria-label="Next category">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {serviceCards.map((service) => {
                const Icon = service.icon

                return (
                  <article key={service.title} className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <div className={`relative flex aspect-[1.55] items-center justify-center bg-gradient-to-br ${service.art}`}>
                      <div className="absolute inset-x-5 bottom-5 h-10 rounded-full bg-white/45 blur-xl" />
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-emerald-700 shadow-lg">
                        <Icon className="h-11 w-11" />
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-emerald-700">
                            {service.manager.charAt(0)}
                          </div>
                          <span className="text-xs text-slate-500">{service.manager}</span>
                        </div>
                        <span className={`rounded-sm px-3 py-1 text-xs font-semibold ${service.tone}`}>
                          {service.category}
                        </span>
                      </div>
                      <h3 className="min-h-[48px] text-sm font-bold leading-6 text-slate-950">{service.title}</h3>
                      <div className="mt-4 flex items-center justify-between border-b border-slate-100 pb-4 text-xs text-slate-500">
                        <span className="inline-flex items-center gap-1">
                          <Clock3 className="h-3.5 w-3.5 text-emerald-700" />
                          08 hr 15 min
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Users className="h-3.5 w-3.5 text-emerald-700" />
                          29 partners
                        </span>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-emerald-700">{service.price}</span>
                          {service.oldPrice && <span className="text-xs font-semibold text-slate-400 line-through">{service.oldPrice}</span>}
                        </div>
                        <div className="flex items-center gap-1 text-xs font-bold text-slate-700">
                          4.9
                          <span className="flex text-amber-400">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <Star key={index} className="h-3 w-3 fill-current" />
                            ))}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/our-work"
                className="inline-flex items-center gap-2 rounded-md border border-emerald-700 px-8 py-3 text-sm font-bold text-emerald-800 transition-colors hover:bg-emerald-700 hover:text-white"
              >
                View Our Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#f6fbf8] py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-700 text-white">
                <Car className="h-7 w-7" />
              </div>
              <p className="text-sm font-semibold text-emerald-700">Hamiz Motors</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">
                Join the Waiting List for Hamiz Motors
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
                Be first to hear about vehicle sourcing, sales updates, and launch offers from Hamiz Motors.
              </p>
            </div>

            <form className="rounded-md border border-emerald-100 bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-800">Full Name</span>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                    className="h-12 w-full rounded-md border border-slate-200 px-4 text-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-800">Email Address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                    className="h-12 w-full rounded-md border border-slate-200 px-4 text-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-800">Phone Number</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                    className="h-12 w-full rounded-md border border-slate-200 px-4 text-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 inline-flex h-12 items-center justify-center rounded-md bg-emerald-700 px-6 text-sm font-bold text-white transition-colors hover:bg-emerald-800"
                >
                  Join Waiting List
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-700">Our Partners</p>
              <h2 className="mt-4 text-3xl font-extrabold text-slate-950 md:text-4xl">
                We work with the best partners
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex h-20 items-center justify-center rounded-md border border-slate-100 bg-white px-5 shadow-[0_12px_35px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.11)]"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className={`text-xl font-black ${partner.color}`}>{partner.mark}</span>
                    <span className="truncate text-base font-extrabold text-slate-800">{partner.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white pb-16 md:pb-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden bg-[#e3f6ec] px-8 py-10 md:px-24">
              <div className="absolute left-6 bottom-6 h-16 w-16 rounded-full border-[8px] border-dashed border-amber-300/80" />
              <div className="absolute right-8 top-6 h-14 w-14 rounded-full border-[7px] border-dashed border-amber-300/80" />
              <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
                <div>
                  <p className="text-sm font-semibold text-emerald-700">Become A Partner</p>
                  <h2 className="mt-3 text-2xl font-extrabold leading-tight text-slate-950 md:text-3xl">
                    You can grow with Hami as a supplier or client?
                  </h2>
                  <div className="mt-1 h-4 w-36 rounded-full border-b-2 border-emerald-700" />
                </div>
                <ArrowRight className="hidden h-24 w-24 rotate-[-18deg] text-emerald-700 md:block" />
                <div className="md:text-right">
                  <Link
                    href="/contact"
                    className="inline-flex rounded-md bg-emerald-700 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-800"
                  >
                    Drop Information
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
