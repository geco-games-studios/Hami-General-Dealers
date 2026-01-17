"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const shops = [
  {
    id: 1,
    name: "Shikoswe",
    region: "Southern Region",
    color: "from-green-400 to-emerald-600",
    lightColor: "bg-green-50",
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  },
  {
    id: 2,
    name: "Chirundu",
    region: "Border Region",
    color: "from-amber-400 to-orange-600",
    lightColor: "bg-amber-50",
    images: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 3,
    name: "Kafue Town",
    region: "Industrial Zone",
    color: "from-blue-400 to-cyan-600",
    lightColor: "bg-blue-50",
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  },
]

const awards = [
  {
    id: 1,
    title: "Presidential Award",
    year: 2025,
    description: "Recognition for Excellence in Economic Growth Medium Enterprise Category",
    icon: "👑",
    image: "/Awards/1.jpeg",
    color: "from-yellow-400 to-amber-500",
  },
]

function AnimatedBubble({ delay, size }: { delay: number; size: string }) {
  return (
    <div
      className={`absolute rounded-full opacity-20 animate-float blur-xl ${size}`}
      style={{
        animation: `float 8s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        background: `radial-gradient(circle, rgba(255,255,255,0.5), transparent)`,
      }}
    />
  )
}

function ShopGallery({ shop }: { shop: (typeof shops)[0] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const getImagePath = (shopName: string, imageNum: number) => {
    return `/${shopName}/${imageNum}.jpeg`
  }

  const currentImages = shop.images
  const totalImages = currentImages.length

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % totalImages)
    }, 4000)
    return () => clearInterval(timer)
  }, [totalImages])

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages)
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImages)
  }

  return (
    <div
      className={`${shop.lightColor} rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Animated Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedBubble delay={0} size="w-24 h-24" />
        <AnimatedBubble delay={2} size="w-32 h-32" />
        <AnimatedBubble delay={4} size="w-20 h-20" />
      </div>

      {/* Image Container */}
      <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <Image
          src={getImagePath(shop.name.replace(" ", "-"), currentImages[currentImageIndex])}
          alt={`${shop.name} image ${currentImageIndex + 1}`}
          fill
          className={`object-cover transition-all duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-500 ${isHovered ? "opacity-30" : "opacity-50"}`}
        />

        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all transform hover:scale-110 opacity-0 group-hover:opacity-100 z-10"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all transform hover:scale-110 opacity-0 group-hover:opacity-100 z-10"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        <div
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r ${shop.color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-all duration-300 ${isHovered ? "scale-110" : "scale-100"}`}
        >
          {currentImageIndex + 1} / {totalImages}
        </div>
      </div>

      <div className="p-8 relative z-20">
        <h3
          className={`text-3xl font-bold bg-gradient-to-r ${shop.color} bg-clip-text text-transparent mb-2 animate-pulse-slow`}
        >
          {shop.name}
        </h3>
        <p className={`text-sm font-semibold mb-6 bg-gradient-to-r ${shop.color} bg-clip-text text-transparent`}>
          {shop.region}
        </p>

        <div className="flex flex-wrap gap-3">
          {currentImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`rounded-full transition-all transform ${
                index === currentImageIndex
                  ? `h-3 bg-gradient-to-r ${shop.color} shadow-lg animate-bounce-slow`
                  : "h-2 w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              style={{
                width: index === currentImageIndex ? "24px" : "8px",
              }}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const processes = [
  {
    id: 1,
    title: "Farm Inputs & Drugs",
    subtitle: "Premium Quality Products",
    icon: "💊",
    image: "/Kafue-town/1.jpeg",
    description: "Carefully sourced and selected premium farm drugs and inputs from trusted suppliers for optimal crop and animal productivity",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: 2,
    title: "Crop Services",
    subtitle: "Expert Guidance",
    icon: "🌾",
    image: "/Shikoswe/3.jpeg",
    description: "Comprehensive crop management and agronomic expertise to ensure healthy yields and sustainable farming practices",
    color: "from-green-400 to-emerald-500",
  },
  {
    id: 3,
    title: "Animal Services",
    subtitle: "Livestock Health",
    icon: "🐄",
    image: "/Kafue-town/5.jpeg",
    description: "Professional animal health management, veterinary consultations, and livestock care solutions for your farming operations",
    color: "from-blue-400 to-cyan-500",
  },
  {
    id: 4,
    title: "Expert Consultations",
    subtitle: "Professional Advisory",
    icon: "👨‍🌾",
    image: "/Shikoswe/7.jpeg",
    description: "Personalized farming consultations and technical support from experienced agricultural specialists and advisors",
    color: "from-purple-400 to-pink-500",
  },
]

function ProcessCard({ process }: { process: (typeof processes)[0] }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <Image
          src={process.image || `/placeholder.svg?height=320&width=400&query=${process.title}`}
          alt={process.title}
          fill
          className={`object-cover transition-all duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 ${isHovered ? "from-black/40" : "from-black/60"}`}
        />

        {/* Icon Badge */}
        <div className={`absolute top-4 right-4 text-4xl bg-white/20 backdrop-blur-md p-3 rounded-full shadow-lg transition-all transform ${isHovered ? "scale-125 rotate-12" : "scale-100 rotate-0"}`}>
          {process.icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-20">
        <p className={`text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 transition-colors ${isHovered ? "text-transparent bg-gradient-to-r " + process.color + " bg-clip-text" : ""}`}>
          {process.subtitle}
        </p>
        <h3 className={`text-2xl font-bold mb-3 transition-all duration-300 ${isHovered ? "bg-gradient-to-r " + process.color + " bg-clip-text text-transparent" : "text-gray-900"}`}>
          {process.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {process.description}
        </p>

        {/* Learn More Button */}
        <button
          className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
            isHovered
              ? "text-transparent bg-gradient-to-r " + process.color + " bg-clip-text"
              : "text-gray-700 hover:text-gray-900"
          }`}
        >
          Learn More
          <ChevronRight size={16} className={`transition-transform ${isHovered ? "translate-x-2" : "translate-x-0"}`} />
        </button>
      </div>

      {/* Bottom Accent Bar */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${process.color} transform origin-left transition-all duration-500 ${isHovered ? "scale-x-100" : "scale-x-0"}`} />
    </div>
  )
}

function AwardCard({ award }: { award: (typeof awards)[0] }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${award.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500 transform scale-105`}
      />

      {/* Card */}
      <div className={`relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-gradient-to-br from-white to-gray-50 border border-gray-100`}>
        {/* Image Section */}
        {award.image && (
          <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
            <Image
              src={award.image}
              alt={award.title}
              fill
              className={`object-cover transition-all duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-500 ${isHovered ? "from-black/20" : "from-black/40"}`} />
          </div>
        )}

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-amber-300 to-yellow-300 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative p-12 text-center">
          {/* Icon */}
          <div className={`text-7xl mb-6 inline-block transform transition-all duration-500 ${isHovered ? "scale-125 rotate-12" : "scale-100 rotate-0"}`}>
            {award.icon}
          </div>

          {/* Award Title */}
          <h3 className={`text-4xl font-black mb-2 transition-all duration-300 ${
            isHovered
              ? `bg-gradient-to-r ${award.color} bg-clip-text text-transparent`
              : "text-gray-900"
          }`}>
            {award.title}
          </h3>

          {/* Year Badge */}
          <div className={`inline-block px-6 py-2 rounded-full mb-4 font-bold transition-all duration-300 ${
            isHovered
              ? `bg-gradient-to-r ${award.color} text-white shadow-lg`
              : "bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-700"
          }`}>
            {award.year}
          </div>

          {/* Description */}
          <p className={`text-gray-700 text-lg leading-relaxed max-w-md transition-all duration-300 ${
            isHovered ? "text-gray-900 font-semibold" : ""
          }`}>
            {award.description}
          </p>
        </div>

        {/* Shine Effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform skew-x-12`}
          style={{
            animation: isHovered ? "shimmer 3s infinite" : "none",
          }}
        />
      </div>
    </div>
  )
}

export function AgroShops() {
  return (
    <>
      <section
        id="agro-shops"
        className="py-24 px-4 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-green-300/20 to-emerald-300/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/3 w-36 h-36 bg-gradient-to-br from-amber-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold text-green-600 uppercase tracking-widest bg-green-100 px-4 py-2 rounded-full">
                Fresh & Modern
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent animate-pulse-slow">
              Hami Agro Shops
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Step into our vibrant agricultural retail spaces designed to inspire and empower farmers with quality
              products and expert guidance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {shops.map((shop, index) => (
              <div
                key={shop.id}
                className="animate-slide-up"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <ShopGallery shop={shop} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-20 right-10 w-48 h-48 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-green-300/20 to-emerald-300/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold text-amber-600 uppercase tracking-widest bg-amber-100 px-4 py-2 rounded-full">
                Our Process
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent animate-pulse-slow">
              From Farm to Table
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our comprehensive process ensures quality at every step, from collection to delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processes.map((process, index) => (
              <div
                key={process.id}
                className="animate-slide-up"
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <ProcessCard process={process} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-br from-yellow-300/20 to-amber-300/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-br from-amber-300/20 to-yellow-300/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold text-yellow-600 uppercase tracking-widest bg-yellow-100 px-4 py-2 rounded-full">
                Recognition
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent animate-pulse-slow">
              Awards & Honors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Celebrating our commitment to excellence and sustainable agricultural development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {awards.map((award, index) => (
              <div
                key={award.id}
                className="animate-slide-up"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <AwardCard award={award} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
