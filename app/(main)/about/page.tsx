import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import {
  ArrowRight,
  BadgeDollarSign,
  BriefcaseBusiness,
  CheckCircle2,
  Facebook,
  Instagram,
  Leaf,
  Linkedin,
  Play,
  ShieldCheck,
  Twitter,
  Users,
} from 'lucide-react'

export const metadata = {
  title: 'About Us - Hami General Dealers',
  description: 'Learn about Hami General Dealers, our mission, vision, and commitment to agricultural excellence.',
}

const strengths = [
  {
    title: 'Best Value Guaranteed',
    description: 'Reliable sourcing, fair pricing, and practical support for every partner.',
    icon: BadgeDollarSign,
  },
  {
    title: 'Business Analysis',
    description: 'Clear planning for farming, supply, trade, and growth decisions.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Professional Team',
    description: 'A hands-on group serving farmers, suppliers, clients, and communities.',
    icon: Users,
  },
]

const directors = [
  {
    name: 'Nchimunya iLLute Hamaimbo',
    role: 'Chief Executive Director',
    image: '/images/Nchimunya-iLute-Hamaimbo.png',
  },
  {
    name: 'Miyanda Hamimbo',
    role: 'Commercial Director',
    image: '/images/Miyanda-Hamimbo.png',
  },
]

const managementTeam = [
  {
    name: 'Dyabbu Hikande',
    role: 'General Manager',
    image: '/images/Dyabbu-Hikande.png',
  },
  {
    name: 'Choolwe Mwiinga',
    role: 'Executive Business Officer',
    image: '/images/Choolwe-Mwiinga.png',
  },
  {
    name: 'Judith Hankombo',
    role: 'Finance Manager',
    image: '/images/Judith-Hankombo.png',
  },
  {
    name: 'Mapalo Kayange',
    role: 'Human Resource Manager',
    image: '/images/Mapalo-Kayange.png',
  },
  {
    name: 'Brighton Mutena',
    role: 'Administrative Manager',
    image: '/images/Brighton-Mutena.png',
  },
  {
    name: 'Wendy Maimbo',
    role: 'IT, Sales and Marketing Manager',
    image: '/images/Wendy-Maimbo.png',
  },
  {
    name: 'Rajesh Ngandu',
    role: 'Agrovert Manager',
    image: '/images/Rajesh-Ngandu.png',
  },
  {
    name: 'Queen Chiinda',
    role: 'Operations Manager',
    image: '/images/Queen-Chiinda.png',
  },
  {
    name: 'Harison Chooye',
    role: 'Farm Manager',
    image: '/images/Harison-Chooye.png',
  },
]

const socialIcons = [Facebook, Twitter, Linkedin, Instagram]

export default function About() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Header />
      <main>
        <section className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-slate-950 text-white">
          <Image
            src="/images/team-1.jpeg"
            alt="Hami General Dealers team planning together"
            fill
            priority
            className="object-cover opacity-35 grayscale"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="relative z-10 px-4 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">Hami General Dealers</p>
            <h1 className="text-5xl font-extrabold md:text-6xl">About us</h1>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-600" />
                  About Us
                </span>
                <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
                  Introduction To Best <span className="text-emerald-700">Business Group!</span>
                </h2>
              </div>
              <div className="grid gap-6 text-sm leading-7 text-slate-600 md:grid-cols-2">
                <p>
                  Hami General Dealers is a Zambian-owned enterprise registered in 2015, providing cost-effective products and services across agriculture, trade, printing, design, office supplies, and stationery.
                </p>
                <p>
                  The company focuses on eggs, agricultural inputs, animal feed, veterinary drugs and services, day-old chicks, general supply, and dependable execution for farmers, marketeers, and business customers.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {strengths.map((item) => {
                const Icon = item.icon

                return (
                  <article key={item.title} className="flex items-center gap-5 rounded-md bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-950">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-500">{item.description}</p>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="relative mt-16 max-w-5xl">
              <div className="relative aspect-[1.65] overflow-hidden rounded-md bg-slate-100 shadow-sm md:w-[72%]">
                <Image
                  src="/images/team-1.jpeg"
                  alt="Hami General Dealers team collaboration"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 60vw, 100vw"
                />
              </div>
              <div className="mt-6 overflow-hidden rounded-md bg-white shadow-[0_18px_50px_rgba(15,23,42,0.18)] md:absolute md:right-0 md:top-20 md:mt-0 md:w-[43%]">
                <div className="relative aspect-video">
                  <Image
                    src="/images/hami-hero-professional.png"
                    alt="Hami General Dealers professional consultant"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 38vw, 100vw"
                  />
                  <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-700 text-white shadow-xl" aria-label="Play video">
                    <Play className="ml-1 h-7 w-7 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-emerald-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                Our Team
              </span>
              <h2 className="mt-6 text-3xl font-extrabold text-slate-950 md:text-4xl">
                Team Members
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                A practical team coordinating agriculture, trade, consulting, and operations across Hami divisions.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-7 md:grid-cols-2">
              {directors.map((member, index) => (
                <article key={member.name} className="overflow-hidden rounded-md bg-white text-center shadow-sm">
                  <div className="relative aspect-[5/7] bg-slate-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="bg-emerald-700 px-5 py-5 text-white">
                    <h3 className="text-lg font-extrabold">{member.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-white/80">{member.role}</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-6 py-5 text-slate-500">
                    {socialIcons.map((Icon, socialIndex) => (
                      <Link
                        href="#"
                        key={`${member.name}-${socialIndex}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 transition-colors hover:bg-emerald-700 hover:text-white"
                        aria-label={`${member.name} social link ${socialIndex + 1}`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </Link>
                    ))}
                  </div>
                  {index === 0 && <div className="h-1 bg-emerald-700" />}
                </article>
              ))}
            </div>

            <div className="mt-16">
              <div className="text-center">
                <h3 className="text-2xl font-extrabold text-slate-950 md:text-3xl">Management Team</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Department leaders keeping daily operations, finance, people, projects, farms, and Agrovert moving.
                </p>
              </div>

              <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {managementTeam.map((member, index) => (
                  <article key={member.name} className="overflow-hidden rounded-md bg-white text-center shadow-sm">
                    <div className="relative aspect-[5/7] bg-slate-100">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    </div>
                    <div className="min-h-24 bg-emerald-700 px-4 py-4 text-white">
                      <h4 className="font-extrabold">{member.name}</h4>
                      <p className="mt-1 text-xs font-semibold text-white/80">{member.role}</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-6 py-5 text-slate-500">
                      {socialIcons.map((Icon, socialIndex) => (
                        <Link
                          href="#"
                          key={`${member.name}-${socialIndex}`}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 transition-colors hover:bg-emerald-700 hover:text-white"
                          aria-label={`${member.name} social link ${socialIndex + 1}`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </Link>
                      ))}
                    </div>
                    {index === 0 && <div className="h-1 bg-emerald-700" />}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
            {[
              ['9+', 'Years of Experience'],
              ['PACRA', 'Registered Business'],
              ['TPIN', 'ZRA Registered'],
              ['100%', 'Quality Commitment'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-md border border-emerald-100 bg-[#f6fbf8] p-6 text-center">
                <div className="text-4xl font-extrabold text-emerald-700">{value}</div>
                <p className="mt-2 text-sm font-semibold text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white pb-16 md:pb-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {[
                ['Hami Agrovert', 'Chicks, vaccines, drugs, feed, and consultations.', '/agrovert', Leaf],
                ['Mifi Business Solutions', 'Microfinance services specializing in daily loans.', '/mifi', ShieldCheck],
                ['Hami Farms', 'Poultry farming and cattle production.', '/farms', CheckCircle2],
                ['Hamiz Motors', 'Motorbikes, parts, riding clothes, gloves, and boots.', '/hamiz', BriefcaseBusiness],
                ['Mipro', 'IT, media, digital content, and brand communication.', '/mipro', Users],
              ].map(([title, description, href, icon]) => {
                const Icon = icon as typeof Leaf

                return (
                  <article key={title as string} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-950">{title as string}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{description as string}</p>
                    <Link href={href as string} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-700">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
