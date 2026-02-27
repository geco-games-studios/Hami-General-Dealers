import { Testimonial } from '@/lib/data'
import { Star } from 'lucide-react'

interface TestimonialCardProps extends Testimonial {}

export function TestimonialCard({
  name,
  role,
  company,
  quote,
  image,
}: TestimonialCardProps) {
  return (
    <div className="bg-white border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground text-sm leading-relaxed mb-6 italic">"{quote}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
          <span className="text-xs font-bold text-primary">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-semibold text-sm text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
          <p className="text-xs text-muted-foreground">{company}</p>
        </div>
      </div>
    </div>
  )
}
