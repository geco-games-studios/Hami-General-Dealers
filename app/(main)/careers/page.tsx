import Header from '@/components/header'
import Footer from '@/components/footer'
import { BriefcaseBusiness, Mail, MapPin, Send, Users } from 'lucide-react'

export const metadata = {
  title: 'Join Us - Hami General Dealers',
  description: 'Apply to work with Hami General Dealers when hiring opportunities are available.',
}

const interestAreas = [
  'Agricultural inputs and Agrovet support',
  'Farm operations and livestock production',
  'Microfinance and customer service',
  'Motors, logistics, and parts support',
  'Administration, sales, marketing, and projects',
]

export default function Careers() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary py-16 text-primary-foreground md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white/75">Join Us</p>
            <h1 className="mb-5 max-w-3xl text-4xl font-bold md:text-5xl">
              Apply to work with Hami General Dealers
            </h1>
            <p className="max-w-3xl text-xl text-white/90">
              When we are hiring, this is where candidates can share their details, area of interest, and experience.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <div className="rounded-lg border border-border bg-white p-8 shadow-sm">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Users className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Current Hiring Status</h2>
                <p className="mt-4 text-muted-foreground">
                  We may not always have open vacancies, but you can still submit your information for future opportunities across Hami organizations.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex gap-3 text-muted-foreground">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span>Lusaka, Zambia and field operations across Zambia</span>
                  </div>
                  <div className="flex gap-3 text-muted-foreground">
                    <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span>generalmanagerhami@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg border border-border bg-muted/40 p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BriefcaseBusiness className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Areas We Hire For</h2>
                <ul className="mt-5 space-y-3 text-muted-foreground">
                  {interestAreas.map((area) => (
                    <li key={area} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <form className="rounded-lg border border-border bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-foreground">Application Form</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Share your details and we will review them when a suitable role becomes available.
              </p>

              <div className="mt-8 grid gap-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-foreground">Full Name</span>
                  <input className="h-12 w-full rounded-lg border border-border px-4 outline-none focus:ring-2 focus:ring-primary" placeholder="Your full name" />
                </label>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-foreground">Email Address</span>
                    <input type="email" className="h-12 w-full rounded-lg border border-border px-4 outline-none focus:ring-2 focus:ring-primary" placeholder="your@email.com" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-foreground">Phone Number</span>
                    <input type="tel" className="h-12 w-full rounded-lg border border-border px-4 outline-none focus:ring-2 focus:ring-primary" placeholder="+260..." />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-foreground">Area of Interest</span>
                  <select className="h-12 w-full rounded-lg border border-border bg-white px-4 outline-none focus:ring-2 focus:ring-primary" defaultValue="">
                    <option value="" disabled>Select an area</option>
                    {interestAreas.map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-foreground">Experience Summary</span>
                  <textarea className="min-h-32 w-full rounded-lg border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary" placeholder="Tell us about your skills, experience, and the role you are interested in." />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-foreground">CV or Portfolio Link</span>
                  <input className="h-12 w-full rounded-lg border border-border px-4 outline-none focus:ring-2 focus:ring-primary" placeholder="Paste a Google Drive, Dropbox, or portfolio link" />
                </label>

                <button type="submit" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                  <Send className="h-4 w-4" />
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
