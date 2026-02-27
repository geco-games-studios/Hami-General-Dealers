import Header from '@/components/header'
import Footer from '@/components/footer'
import { teamMembers } from '@/lib/data'
import { TeamCard } from '@/components/cards'

export const metadata = {
  title: 'Our Team - Hami General Dealers',
  description: 'Meet the talented team behind Hami General Dealers driving innovation and excellence.',
}

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Our Exceptional Team
            </h1>
            <p className="text-xl text-white/90 max-w-3xl text-balance">
              Meet the dedicated professionals driving innovation and excellence across our organization.
            </p>
          </div>
        </section>

        {/* Team Grid - Organized by Role */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Directors Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Directors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {teamMembers
                  .filter((member) => member.role === 'director')
                  .map((member) => (
                    <TeamCard
                      key={member.id}
                      name={member.name}
                      title={member.title}
                      bio={member.bio}
                      department={member.department}
                    />
                  ))}
              </div>
            </div>

            {/* PA to Director */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Executive Support</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {teamMembers
                  .filter((member) => member.role === 'pa')
                  .map((member) => (
                    <TeamCard
                      key={member.id}
                      name={member.name}
                      title={member.title}
                      bio={member.bio}
                      department={member.department}
                    />
                  ))}
              </div>
            </div>

            {/* General Manager */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">General Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {teamMembers
                  .filter((member) => member.role === 'general-manager')
                  .map((member) => (
                    <TeamCard
                      key={member.id}
                      name={member.name}
                      title={member.title}
                      bio={member.bio}
                      department={member.department}
                    />
                  ))}
              </div>
            </div>

            {/* Managers Section */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Management Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers
                  .filter((member) => member.role === 'manager')
                  .map((member) => (
                    <TeamCard
                      key={member.id}
                      name={member.name}
                      title={member.title}
                      bio={member.bio}
                      department={member.department}
                    />
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Culture */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center text-balance">
              Our Team Culture
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe in the power of teamwork and cross-divisional cooperation to solve complex problems and drive innovation.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  We invest in our team's professional development through training programs, workshops, and mentorship opportunities.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Impact Driven</h3>
                <p className="text-muted-foreground">
                  Every team member is committed to creating positive change and meaningful impact in agriculture and commerce.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Careers CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Join Our Team
            </h2>
            <p className="text-lg text-white/90 mb-8 text-balance">
              We're always looking for talented individuals passionate about agriculture and business excellence.
            </p>
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              View Career Opportunities
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
