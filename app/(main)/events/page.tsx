import Header from '@/components/header'
import Footer from '@/components/footer'
import { events } from '@/lib/data'
import { EventCard } from '@/components/cards'

export const metadata = {
  title: 'Events - Hami General Dealers',
  description: 'Discover upcoming events, workshops, and conferences organized by Hami General Dealers.',
}

export default function Events() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Upcoming Events
            </h1>
            <p className="text-xl text-white/90 max-w-3xl text-balance">
              Join us for conferences, workshops, and community events that drive innovation and growth.
            </p>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  description={event.description}
                  type={event.type}
                />
              ))}
            </div>

            {events.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No events currently scheduled.</p>
                <p className="text-muted-foreground">Check back soon for announcements!</p>
              </div>
            )}
          </div>
        </section>

        {/* Event Types Info */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center text-balance">
              Types of Events We Organize
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">Conferences</h3>
                <p className="text-muted-foreground">
                  Large-scale industry gatherings featuring keynote speakers, research presentations, and networking opportunities.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">Workshops</h3>
                <p className="text-muted-foreground">
                  Hands-on training sessions covering specific topics from modern farming techniques to business development.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">Product Launches</h3>
                <p className="text-muted-foreground">
                  Exclusive previews of new products and services with special launch offers for early adopters.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">Community Events</h3>
                <p className="text-muted-foreground">
                  Grassroots initiatives providing free training, resources, and support to farming communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Never Miss an Event
            </h2>
            <p className="text-lg text-white/90 mb-8 text-balance">
              Subscribe to our newsletter to receive updates about upcoming events and special announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
