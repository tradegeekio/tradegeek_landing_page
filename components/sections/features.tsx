"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { MessageSquare, Zap, BarChart3, Clock, Users, Shield } from "lucide-react"
import { useRef, useState } from "react"

// Custom animated feature card component
const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        className="h-full relative bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden p-8 border border-slate-200 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
        animate={isHovered ? { y: -10 } : { y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-white/50 dark:from-slate-900/50 dark:to-slate-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative">
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 relative overflow-hidden`}
              style={{ backgroundColor: feature.bgColor }}
              animate={isHovered ? { rotate: [0, -5, 5, 0], scale: 1.1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, ${feature.color}20, ${feature.color}40)`,
                }}
              />
              <motion.div animate={isHovered ? { scale: [1, 1.2, 1] } : {}} transition={{ duration: 0.5 }}>
                <feature.icon className={`w-7 h-7`} style={{ color: feature.color }} />
              </motion.div>
            </motion.div>
            <h3 className="text-2xl font-bold">{feature.title}</h3>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">{feature.description}</p>

          <motion.div
            className="flex items-center text-sm font-medium transition-all duration-300 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
            style={{ color: feature.color }}
            animate={isHovered ? { x: 5 } : {}}
          >
            Learn more
            <motion.svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              animate={isHovered ? { x: [0, 5, 0] } : {}}
              transition={{ duration: 1, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.div>

          {/* Animated particles on hover */}
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    backgroundColor: feature.color,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: 0.4,
                  }}
                  animate={{
                    y: [0, -Math.random() * 50 - 20],
                    x: [0, (Math.random() - 0.5) * 30],
                    opacity: [0.4, 0],
                    scale: [1, Math.random() * 0.5 + 0.5],
                  }}
                  transition={{
                    duration: Math.random() * 1.5 + 1,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: "AI Messaging",
      description:
        "Instantly respond to inquiries 24/7 with intelligent, context-aware responses that feel personal and drive engagement.",
      color: "#8B5CF6", // Violet
      bgColor: "#8B5CF610",
    },
    {
      icon: Zap,
      title: "Engagement Automation",
      description:
        "Nurture buyers with smart follow-ups that adapt to their behavior and increase conversion rates without manual effort.",
      color: "#EC4899", // Pink
      bgColor: "#EC489910",
    },
    {
      icon: BarChart3,
      title: "Live Deal Tracking",
      description:
        "Know exactly where every deal stands with real-time updates and actionable insights to optimize your sales process.",
      color: "#10B981", // Emerald
      bgColor: "#10B98110",
    },
    {
      icon: Clock,
      title: "Time Saving",
      description:
        "Reclaim hours each day by automating repetitive tasks like responding to common questions and following up with leads.",
      color: "#F59E0B", // Amber
      bgColor: "#F59E0B10",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Enable your entire team to work together seamlessly with shared conversations, notes, and deal status updates.",
      color: "#6366F1", // Indigo
      bgColor: "#6366F110",
    },
    {
      icon: Shield,
      title: "Data Security",
      description:
        "Keep your customer and inventory data secure with enterprise-grade encryption and role-based access controls.",
      color: "#0EA5E9", // Sky
      bgColor: "#0EA5E910",
    },
  ]

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])

  return (
    <section className="py-32 relative overflow-hidden" id="features" ref={containerRef}>
      {/* Modern background with animated patterns */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900" />
        <motion.div style={{ y }} className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400 dark:via-slate-600 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400 dark:via-slate-600 to-transparent"></div>
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-slate-400 dark:via-slate-600 to-transparent"></div>
          <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-slate-400 dark:via-slate-600 to-transparent"></div>

          <motion.div
            className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiM4QjVDRjYiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuMiI+PHBhdGggZD0iTTMwIDMwIEw2MCAzMCIvPjxwYXRoIGQ9Ik0zMCAzMCBMMzAgNjAiLz48cGF0aCBkPSJNMzAgMzAgTDAgMzAiLz48cGF0aCBkPSJNMzAgMzAgTDMwIDAiLz48L2c+PC9zdmc+')] bg-[length:60px_60px]"
            animate={{
              backgroundPosition: ["0px 0px", "60px 60px"],
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        </motion.div>

        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-violet-500/5 to-cyan-500/5 blur-3xl"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 30 - 15],
                x: [0, Math.random() * 30 - 15],
                scale: [1, Math.random() * 0.2 + 0.9, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <motion.div className="container mx-auto px-4 md:px-6" style={{ opacity, scale }}>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 text-sm font-medium text-violet-700 dark:text-violet-300 mb-4"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-4 h-4 mr-2 rounded-full border-2 border-violet-500/30 border-t-violet-500"
              />
              Powerful Features
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="block">Everything You Need to</span>
              <motion.span
                className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-600 dark:from-violet-400 dark:to-cyan-400"
                animate={{
                  backgroundPosition: ["0% center", "100% center", "0% center"],
                }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                style={{ backgroundSize: "200% auto" }}
              >
                Sell More Vehicles
              </motion.span>
            </h2>

            <p className="text-xl text-muted-foreground">
              TradeGeek combines AI technology with industry-specific tools to transform how you sell vehicles.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
