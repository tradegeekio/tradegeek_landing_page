"use client"

import { motion } from "framer-motion"
import { Database, MessageCircle, CheckCircle } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Database,
      title: "Import Inventory",
      description: "Seamlessly connect your inventory management system or upload your vehicle data in minutes.",
      color: "bg-blue-500",
    },
    {
      icon: MessageCircle,
      title: "Engage with AI",
      description: "Let our AI handle buyer inquiries, follow-ups, and qualification while you focus on closing deals.",
      color: "bg-cyan-400",
    },
    {
      icon: CheckCircle,
      title: "Track & Close Deals",
      description: "Monitor every deal in real-time and get actionable insights to maximize your closing rate.",
      color: "bg-green-400",
    },
  ]

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50" id="how-it-works">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Three simple steps to transform your wholesale business
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-green-400 hidden md:block" />

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="md:grid md:grid-cols-2 md:gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`md:text-right ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="mb-4 md:mb-0 flex flex-col items-center md:items-end">
                    <div
                      className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center mb-4 md:mb-2 z-10`}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-blue-500 hidden md:block"
                  style={{ top: `calc(${index * 50}% + ${index * 12}px + 24px)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
