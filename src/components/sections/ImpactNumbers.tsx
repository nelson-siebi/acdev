"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  {
    value: 8400,
    suffix: "+",
    label: "Enfants sensibilisés",
    description: "aux violences sexuelles et enlèvements",
    color: "#1E40AF"
  },
  {
    value: 3000,
    suffix: "+",
    label: "Élèves formés",
    description: "sur l'hygiène menstruelle",
    color: "#DC2626"
  },
  {
    value: 100,
    suffix: "+",
    label: "Mères accompagnées",
    description: "soutien juridique et médical",
    color: "#16A34A"
  },
  {
    value: 3,
    suffix: "",
    label: "Régions",
    description: "Littoral, Est, Centre",
    color: "#1E40AF"
  }
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-bold tabular-nums">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

export function ImpactNumbers() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-acdev">
        <div className="text-center mb-16">
          <span className="text-[#DC2626] font-semibold text-sm uppercase tracking-wider">
            Nos réalisations
          </span>
          <h2 
            className="text-4xl font-bold text-black mt-2 mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Impact depuis 2012
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des chiffres qui témoignent de notre engagement sur le terrain
          </p>
        </div>

        {/* Cards avec animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group p-8 bg-white border-2 border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-xl"
              style={{ 
                borderTopColor: stat.color,
                borderTopWidth: '4px'
              }}
            >
              <div 
                className="mb-4"
                style={{ color: stat.color }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-500">
                {stat.description}
              </p>
              {/* Hover effect background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity -z-10"
                style={{ backgroundColor: stat.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
