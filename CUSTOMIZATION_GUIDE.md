# Hami General Dealers Website - Customization Guide

## Quick Updates Needed

### 1. **Update Hero Section Video URL**
**File:** `/lib/data.ts`

Find this line (~line 388):
```typescript
export const heroVideo: HeroVideo = {
  type: 'youtube',
  url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your actual video URL
}
```

**How to add your YouTube video:**
- Copy your YouTube video ID (e.g., from `https://www.youtube.com/watch?v=VIDEO_ID`)
- Replace the URL with: `https://www.youtube.com/embed/VIDEO_ID`

Example: If your video URL is `https://www.youtube.com/watch?v=abc123def456`, use:
```typescript
url: 'https://www.youtube.com/embed/abc123def456'
```

---

### 2. **Navigation Menu with Dropdowns** ✅
Your navigation menu now has full dropdown support organized by:
- **Organization** (About Us, Our Team, Our Work)
- **Divisions** (Agrovert, Mifi, Farms)
- **Services** (Consulting, Our Services)
- **Resources** (Events, Media, Blog)
- **Contact** (Direct link)

---

### 3. **Testimonials Section** ✅
Added real testimonials from farmers and partners on the homepage. You can edit these in:
**File:** `/lib/data.ts` (lines 365-392)

Each testimonial includes:
- Customer name & role
- Company/organization
- Quote
- Star rating display (5 stars)

---

### 4. **New Homepage Sections with Personal Touch** ✅
Your homepage now includes:
- **Hero with Video** - Features your YouTube video alongside the headline
- **Testimonials Section** - Real impact stories from customers
- **Who We Are** - Mission and values
- **What We Do** - Services overview
- **Our History** - Timeline of company growth
- **Blog Section** - Latest articles and news
- **Events Section** - Upcoming events and workshops
- **Call to Action** - Final engagement prompt

---

## Customizing Your Content

### Update Team Members
**File:** `/lib/data.ts` (lines ~150-280)

Each team member has:
```typescript
{
  id: '1',
  name: 'Peter Kipchoge',
  title: 'Director & Founder',
  bio: 'Visionary leader with 25+ years...',
  image: '/images/team-ceo.jpg',
  department: 'Executive',
  role: 'director',
}
```

Replace names, titles, bios, and departments as needed.

### Update Testimonials
**File:** `/lib/data.ts` (lines ~365-392)

```typescript
{
  id: '1',
  name: 'John Mwangi',
  role: 'Small-scale Farmer',
  company: 'Mwangi Farms, Kiambu',
  quote: 'Hami General Dealers transformed...',
  image: '/images/testimonial-john.jpg',
}
```

### Update Blog Posts
**File:** `/lib/data.ts` (lines ~41-102)

### Update Events
**File:** `/lib/data.ts` (lines ~104-146)

---

## Branding & Styling

### Change Color Scheme
**File:** `/app/globals.css` (lines 1-30)

Current colors:
- **Primary:** Deep Green (#1B5E20) - Used for header, buttons, primary elements
- **Secondary:** Earth Brown (#6D4C41) - Used in hero section, accents
- **Accent:** Warm Gold (#F57C00) - Used for highlights, testimonial stars

To change colors, modify the HSL values in the `:root` section.

### Logo
The header currently shows an "H" in a green box. To customize:
- Update the logo component in `/components/header.tsx` (lines 62-67)

---

## Adding Images

### Team Member Images
Place images in `/public/images/` with names like:
- `team-ceo.jpg`
- `team-pa.jpg`
- `team-gm.jpg`
- `team-agrovert.jpg`
- etc.

### Testimonial Images
- `testimonial-john.jpg`
- `testimonial-mary.jpg`
- `testimonial-samuel.jpg`
- `testimonial-rachel.jpg`

### Other Images
- `summit.jpg` - Event image
- `product-launch.jpg` - Event image
- `workshop.jpg` - Event image
- `outreach.jpg` - Event image
- `agrovert-hero.jpg` - Agrovert division page
- `mifi-hero.jpg` - Mifi division page
- `farms-hero.jpg` - Farms division page

---

## Features Summary

✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
✅ **Navigation Dropdowns** - Organized menu with 5 main categories
✅ **Video Integration** - Hero section with your YouTube video
✅ **Testimonials** - 4 customer success stories with 5-star ratings
✅ **Team Organization** - 2 Directors + 1 PA + 1 GM + 8 Managers
✅ **Professional Layout** - Modern minimal aesthetic with green/brown/gold colors
✅ **Multiple Pages** - 10+ pages fully designed and ready
✅ **Personal Touch** - Team bios, customer testimonials, company history
✅ **SEO Ready** - Meta tags optimized for search engines

---

## Next Steps

1. **Add your YouTube video URL** to `lib/data.ts` (heroVideo)
2. **Update team member details** with actual names and bios
3. **Add real testimonials** from your actual customers
4. **Upload images** to `/public/images/`
5. **Customize blog posts** and events with your content
6. **Update contact information** in the Contact page
7. **Review all pages** and make final adjustments

---

## Need Help?

Each section is self-contained and easy to modify. Start with the data file (`lib/data.ts`) to customize content, then update components as needed.
