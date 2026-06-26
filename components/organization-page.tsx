import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Bell,
  BriefcaseBusiness,
  CheckCircle2,
  CircleDollarSign,
  MapPin,
  Search,
  Settings,
  Users,
} from 'lucide-react'
import Header from './header'
import Footer from './footer'

export interface OrganizationPageData {
  name: string
  eyebrow: string
  headline: string
  description: string
  heroImage?: string
  popular: string[]
  stats: string[]
  categories: Array<{
    title: string
    count: string
    description: string
  }>
  opportunities: Array<{
    title: string
    meta: string
    location: string
    value: string
  }>
  employerTitle: string
  employerText: string
  candidateTitle: string
  candidateText: string
}

export default function OrganizationPage({ data }: { data: OrganizationPageData }) {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Header />
      <main>
        <section className="bg-[#edf7f3]">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[0.95fr_1.05fr] md:py-24 lg:px-8">
            <div>
              <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-emerald-700">{data.eyebrow}</p>
              <h1 className="max-w-xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
                {data.headline}
              </h1>
              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600">{data.description}</p>

              <form className="mt-8 max-w-xl rounded-full bg-white p-2 shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
                <div className="grid gap-2 sm:grid-cols-[1fr_0.75fr_auto] sm:items-center">
                  <label className="flex h-11 items-center gap-3 rounded-full px-4 text-sm text-slate-400">
                    <Search className="h-4 w-4" />
                    <input className="w-full bg-transparent outline-none" placeholder="Search services or keywords" />
                  </label>
                  <label className="flex h-11 items-center gap-3 rounded-full border-t border-slate-100 px-4 text-sm text-slate-500 sm:border-l sm:border-t-0">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    <input className="w-full bg-transparent outline-none" placeholder="All locations" />
                  </label>
                  <button type="submit" className="h-11 rounded-full bg-emerald-700 px-6 text-sm font-extrabold text-white transition-colors hover:bg-emerald-800">
                    Search
                  </button>
                </div>
              </form>

              <div className="mt-5 text-sm text-slate-600">
                <span className="font-bold text-slate-950">Popular Searches: </span>
                {data.popular.join(', ')}
              </div>

              <div className="mt-14">
                <p className="text-sm font-semibold text-slate-500">Trusted by leading partners and clients</p>
                <div className="mt-4 flex flex-wrap gap-5 text-sm font-black text-slate-800">
                  {data.stats.map((stat) => (
                    <span key={stat} className="inline-flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative min-h-[410px]">
              <div className="absolute inset-x-10 bottom-0 h-[82%] rounded-full bg-orange-100" />
              <Image
                src={data.heroImage ?? '/images/hami-hero-professional.png'}
                alt={`${data.name} representative`}
                fill
                priority
                className="object-contain object-bottom"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute left-5 top-28 flex items-center gap-3 rounded-md bg-white px-5 py-4 shadow-xl">
                <Bell className="h-6 w-6 text-orange-500" />
                <span className="text-sm font-extrabold text-slate-800">Opportunity Alert</span>
              </div>
              <div className="absolute bottom-16 right-2 rounded-md bg-white px-5 py-4 shadow-xl sm:right-10">
                <div className="text-sm font-black text-slate-900">5k+ clients connected</div>
                <div className="mt-3 flex -space-x-2">
                  {['HG', 'AG', 'MF', 'HM'].map((item) => (
                    <span key={item} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-emerald-100 text-[10px] font-black text-emerald-800">
                      {item}
                    </span>
                  ))}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-emerald-700 text-sm font-black text-white">
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              <article className="grid overflow-hidden rounded-md bg-orange-50 p-7 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <h2 className="text-xl font-black text-slate-950">{data.employerTitle}</h2>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">{data.employerText}</p>
                  <Link href="/contact" className="mt-5 inline-flex rounded-full bg-emerald-700 px-6 py-3 text-sm font-extrabold text-white">
                    Contact Team
                  </Link>
                </div>
                <BriefcaseBusiness className="mt-6 h-28 w-28 text-emerald-700 md:mt-0" />
              </article>
              <article className="grid overflow-hidden rounded-md bg-orange-50 p-7 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <h2 className="text-xl font-black text-slate-950">{data.candidateTitle}</h2>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">{data.candidateText}</p>
                  <Link href="/consult" className="mt-5 inline-flex rounded-full bg-emerald-700 px-6 py-3 text-sm font-extrabold text-white">
                    Get Started
                  </Link>
                </div>
                <Users className="mt-6 h-28 w-28 text-emerald-700 md:mt-0" />
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black text-slate-950 md:text-3xl">Popular category</h2>
                <p className="mt-2 text-sm text-slate-500">Explore the active areas inside {data.name}.</p>
              </div>
              <Link href="/our-work" className="hidden text-sm font-extrabold text-emerald-700 md:inline-flex">
                View all categories
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {data.categories.map((category) => (
                <article key={category.title} className="rounded-md bg-[#edf7f3] p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-white">
                    <Settings className="h-6 w-6" />
                  </div>
                  <h3 className="font-black text-slate-950">{category.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-emerald-700">{category.count}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{category.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black text-slate-950 md:text-3xl">Latest opportunities</h2>
                <p className="mt-2 text-sm text-slate-500">Fresh ways to work with {data.name}.</p>
              </div>
              <Link href="/contact" className="hidden text-sm font-extrabold text-emerald-700 md:inline-flex">
                View all opportunities
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {data.opportunities.map((item) => (
                <article key={item.title} className="rounded-md border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                        <CircleDollarSign className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-black text-slate-950">{item.title}</h3>
                        <p className="mt-1 text-sm text-slate-500">{item.meta}</p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-300" />
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold text-emerald-700">
                    <span className="rounded-full bg-emerald-50 px-3 py-1">{item.location}</span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1">{item.value}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
