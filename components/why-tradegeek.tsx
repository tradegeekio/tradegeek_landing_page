"use client"

import { motion } from "framer-motion"
import { MessageSquare, Zap, BarChart3, Clock } from "lucide-react"
import Image from "next/image"

export function WhyTradeGeek() {
  const features = [
    {
      icon: MessageSquare,
      title: "AI Messaging",
      description: "Instantly respond to inquiries 24/7 with intelligent, context-aware responses that feel personal.",
      color: "from-violet-500 to-violet-400",
      iconBg: "bg-violet-500/10",
    },
    {
      icon: Zap,
      title: "Engagement Automation",
      description: "Nurture buyers with smart follow-ups that adapt to their behavior and increase conversion rates.",
      color: "from-violet-400 to-violet-300",
      iconBg: "bg-violet-500/10",
    },
    {
      icon: BarChart3,
      title: "Live Deal Tracking",
      description: "Know exactly where every deal stands with real-time updates and actionable insights.",
      color: "from-violet-400 to-violet-300",
      iconBg: "bg-violet-500/10",
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Reduce administrative work by 70% and focus on closing more deals with qualified buyers.",
      color: "from-violet-400 to-violet-300",
      iconBg: "bg-violet-500/10",
    },
  ]

  const leftFeatures = [
    {
      title: "Smart Lead Qualification",
      description: "Our AI automatically qualifies leads based on behavior and engagement patterns.",
    },
    {
      title: "Seamless Integration",
      description: "Works with your existing tools and workflows without disrupting your business.",
    },
    {
      title: "Data-Driven Insights",
      description: "Make informed decisions with real-time analytics and performance metrics.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden" id="features">
      {/* Background watermark text */}
      <div className="absolute top-0 left-0 text-slate-800/10 text-[180px] font-bold leading-none tracking-tighter">
        AUTO DEALS
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-5xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl">WHY CHOOSE US</h2>
          <div className="w-20 h-1 bg-violet-500 mt-2 mb-6"></div>
          <p className="mx-auto max-w-[700px] text-slate-300 md:text-xl">
            Choose us for a seamless auto wholesaling journey where AI technology meets industry expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left side features */}
          <div className="lg:col-span-3 space-y-12">
            {leftFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-right"
              >
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <div className="w-16 h-1 bg-violet-500 ml-auto mb-3"></div>
                <p className="text-slate-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Center image */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-[400px] h-[400px] relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="TradeGeek Platform"
                  width={400}
                  height={400}
                  className="object-contain"
                />

                {/* Connection points */}
                <div className="absolute top-[20%] left-0 w-4 h-4 bg-violet-500 rounded-full"></div>
                <div className="absolute top-[50%] left-0 w-4 h-4 bg-violet-500 rounded-full"></div>
                <div className="absolute top-[80%] left-0 w-4 h-4 bg-violet-500 rounded-full"></div>
                <div className="absolute top-[25%] right-0 w-4 h-4 bg-violet-500 rounded-full"></div>
                <div className="absolute top-[50%] right-0 w-4 h-4 bg-violet-500 rounded-full"></div>
                <div className="absolute top-[75%] right-0 w-4 h-4 bg-violet-500 rounded-full"></div>
              </div>
            </motion.div>
          </div>

          {/* Right side feature cards */}
          <div className="lg:col-span-3 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-lg p-4 border border-slate-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-violet-900/30 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                </div>
                <div className="w-16 h-1 bg-violet-500 my-3"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
