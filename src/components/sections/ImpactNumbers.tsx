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
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="container-acdev">
        <div className="text-center mb-14">
          <span className="text-[#1E40AF] font-semibold text-sm uppercase tracking-wider">
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-y border-gray-200">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-8 lg:p-10 text-left bg-white ${
                index % 2 === 0 ? "border-r border-gray-200" : ""
              } ${index < 2 ? "border-b border-gray-200" : ""} lg:border-b-0 ${
                index < 3 ? "lg:border-r lg:border-gray-200" : ""
              }`}
            >
              <div className="flex items-baseline gap-3 mb-3">
                <div style={{ color: stat.color }}>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <span className="inline-block w-6 h-0.5" style={{ backgroundColor: stat.color }} />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-black mb-1">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
