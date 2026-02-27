import Link from 'next/link'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'

export function BlogCard({
  title,
  excerpt,
  author,
  date,
  category,
  slug,
}: {
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  slug: string
}) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="bg-white rounded-lg border border-border hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full">
      <div className="p-6 flex flex-col h-full">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <span>{author}</span>
          <span>{formattedDate}</span>
        </div>
        <Link
          href={`/blog/${slug}`}
          className="text-primary font-semibold text-sm hover:text-primary/80 flex items-center gap-2 mt-auto"
        >
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  )
}

export function EventCard({
  title,
  date,
  time,
  location,
  description,
  type,
}: {
  title: string
  date: string
  time: string
  location: string
  description: string
  type: string
}) {
  const eventDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div className="bg-white rounded-lg border border-border hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full">
      <div className="bg-primary/10 p-4 border-b border-border">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
            {type}
          </span>
          <div className="flex items-center gap-1 text-primary text-sm font-bold">
            <Calendar className="w-4 h-4" />
            {eventDate}
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
          {title}
        </h3>
        <div className="space-y-2 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{location}</span>
          </div>
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
          {description}
        </p>
        <button className="w-full bg-primary text-primary-foreground py-2 rounded-md font-semibold text-sm hover:bg-primary/90 transition-colors">
          Register Event
        </button>
      </div>
    </div>
  )
}

export function TeamCard({
  name,
  title,
  bio,
  department,
}: {
  name: string
  title: string
  bio: string
  department: string
}) {
  return (
    <div className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
      <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl font-bold text-primary">
          {name.charAt(0)}
        </div>
      </div>
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-lg font-bold text-foreground mb-1">
          {name}
        </h3>
        <p className="text-primary font-semibold text-sm mb-2">
          {title}
        </p>
        <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full mb-3 w-fit">
          {department}
        </span>
        <p className="text-muted-foreground text-sm line-clamp-3 flex-grow">
          {bio}
        </p>
      </div>
    </div>
  )
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <div className="bg-white rounded-lg border border-border p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
        {Icon}
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm flex-grow">
        {description}
      </p>
    </div>
  )
}
