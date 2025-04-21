"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Database, MessageCircle, CheckCircle, Car, Bot, BarChart3, ChevronRight } from "lucide-react"
import { useRef, useState, useEffect } from "react"

export function HowItWorks() {
  // Animation states
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Auto-advance steps for animation
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 3)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  const steps = [
    {
      icon: Database,
      title: "Import Inventory",
      description: "Seamlessly connect your inventory management system or upload your vehicle data in minutes.",
      color: "#8B5CF6", // Violet
      secondaryColor: "#06B6D4", // Cyan
      bgColor: "#8B5CF610",
      image: "/placeholder.svg?height=400&width=600&text=Vehicle+Database",
    },
    {
      icon: MessageCircle,
      title: "Engage with AI",
      description: "Let our AI handle buyer inquiries, follow-ups, and qualification while you focus on closing deals.",
      color: "#EC4899", // Pink
      secondaryColor: "#8B5CF6", // Violet
      bgColor: "#EC489910",
      image: "/placeholder.svg?height=400&width=600&text=AI+Conversation",
    },
    {
      icon: CheckCircle,
      title: "Track & Close Deals",
      description: "Monitor every deal in real-time and get actionable insights to maximize your closing rate.",
      color: "#10B981", // Emerald
      secondaryColor: "#06B6D4", // Cyan
      bgColor: "#10B98110",
      image: "/placeholder.svg?height=400&width=600&text=Deal+Analytics",
    },
  ]

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  // Particle animation component
  const Particles = ({ color }: { color: string }) => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: color,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.4,
            }}
            animate={{
              y: [0, -Math.random() * 100 - 50],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.4, 0],
              scale: [1, Math.random() * 0.5 + 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <section className="py-32 relative overflow-hidden" id="how-it-works" ref={containerRef}>
      {/* Enhanced animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800/50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiM4QjVDRjYiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTMwIDMwIEw2MCAzMCIvPjxwYXRoIGQ9Ik0zMCAzMCBMMzAgNjAiLz48cGF0aCBkPSJNMzAgMzAgTDAgMzAiLz48cGF0aCBkPSJNMzAgMzAgTDMwIDAiLz48L2c+PC9zdmc+')] bg-[length:60px_60px]" />

        {/* Animated gradient blobs */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 5 }}
        />

        {/* Animated flowing lines */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"
              style={{ top: `${15 + i * 20}%` }}
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 15 + i * 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: i * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
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
              Simple Process
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-600 dark:from-violet-400 dark:to-cyan-400 inline-block"
                animate={{
                  backgroundPosition: ["0% center", "100% center", "0% center"],
                }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                style={{ backgroundSize: "200% auto" }}
              >
                How TradeGeek Works
              </motion.span>
            </h2>

            <p className="text-xl text-muted-foreground">
              Three simple steps to transform your wholesale business and close more deals.
            </p>
          </motion.div>
        </div>

        {/* Step indicators */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center space-x-2">
            {steps.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  activeStep === index
                    ? "bg-gradient-to-r from-violet-500 to-cyan-500"
                    : "bg-slate-300 dark:bg-slate-700"
                }`}
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={activeStep === index ? { scale: [1, 1.2, 1] } : {}}
                transition={
                  activeStep === index ? { duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 } : {}
                }
              />
            ))}
          </div>
        </div>

        {/* Animated steps showcase */}
        <div className="relative mb-32 h-[500px] overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800" />

          {/* Animated particles based on active step */}
          <AnimatePresence>
            {activeStep === 0 && <Particles color={steps[0].color} />}
            {activeStep === 1 && <Particles color={steps[1].color} />}
            {activeStep === 2 && <Particles color={steps[2].color} />}
          </AnimatePresence>

          <div className="relative h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {/* Step 1: Import Inventory Animation */}
              {activeStep === 0 && (
                <motion.div
                  key="step1"
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative w-full max-w-4xl mx-auto px-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="mb-6"
                        >
                          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300 mb-2">
                            Step 1
                          </span>
                          <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-cyan-600">
                            Import Inventory
                          </h3>
                          <p className="text-slate-600 dark:text-slate-300">
                            Seamlessly connect your inventory management system or upload your vehicle data in minutes.
                          </p>
                        </motion.div>

                        <div className="space-y-3">
                          {["Connect your existing system", "Upload CSV files", "Manual data entry"].map((item, i) => (
                            <motion.div
                              key={i}
                              className="flex items-center gap-2"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + i * 0.1 }}
                            >
                              <div className="w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0">
                                <ChevronRight className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                              </div>
                              <span>{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="relative">
                        {/* Animated illustration */}
                        <motion.div
                          className="relative bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-xl p-6 border border-violet-200 dark:border-violet-800/30"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="relative z-10">
                            {/* Database icon */}
                            <motion.div
                              className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white"
                              animate={{
                                y: [0, -10, 0],
                                boxShadow: [
                                  "0 0 0 rgba(139, 92, 246, 0)",
                                  "0 0 20px rgba(139, 92, 246, 0.5)",
                                  "0 0 0 rgba(139, 92, 246, 0)",
                                ],
                              }}
                              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            >
                              <Database className="w-8 h-8" />
                            </motion.div>

                            {/* Animated cars flowing into database */}
                            <div className="relative h-40 mb-4">
                              <motion.div
                                className="absolute left-0 top-1/2 transform -translate-y-1/2"
                                animate={{ x: ["0%", "100%", "100%", "0%"] }}
                                transition={{
                                  duration: 4,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "easeInOut",
                                  times: [0, 0.4, 0.6, 1],
                                }}
                              >
                                <Car className="w-8 h-8 text-violet-500" />
                              </motion.div>

                              <motion.div
                                className="absolute left-0 top-1/4 transform -translate-y-1/2"
                                animate={{ x: ["0%", "100%", "100%", "0%"] }}
                                transition={{
                                  duration: 5,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "easeInOut",
                                  times: [0, 0.4, 0.6, 1],
                                  delay: 0.5,
                                }}
                              >
                                <Car className="w-8 h-8 text-cyan-500" />
                              </motion.div>

                              <motion.div
                                className="absolute left-0 top-3/4 transform -translate-y-1/2"
                                animate={{ x: ["0%", "100%", "100%", "0%"] }}
                                transition={{
                                  duration: 4.5,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "easeInOut",
                                  times: [0, 0.4, 0.6, 1],
                                  delay: 1,
                                }}
                              >
                                <Car className="w-8 h-8 text-blue-500" />
                              </motion.div>

                              {/* Database container */}
                              <motion.div
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-24 h-32 border-2 border-violet-500 rounded-md flex items-center justify-center"
                                animate={{
                                  borderColor: ["#8B5CF6", "#06B6D4", "#8B5CF6"],
                                  boxShadow: [
                                    "0 0 0 rgba(139, 92, 246, 0)",
                                    "0 0 15px rgba(139, 92, 246, 0.3)",
                                    "0 0 0 rgba(139, 92, 246, 0)",
                                  ],
                                }}
                                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                              >
                                <Database className="w-12 h-12 text-violet-500" />
                              </motion.div>
                            </div>

                            {/* Progress bar */}
                            <motion.div
                              className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
                              initial={{ width: "100%" }}
                            >
                              <motion.div
                                className="h-full bg-gradient-to-r from-violet-500 to-cyan-500"
                                animate={{ width: ["0%", "100%"] }}
                                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                              />
                            </motion.div>

                            <motion.div
                              className="mt-2 text-center text-sm text-slate-500 dark:text-slate-400"
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            >
                              Importing inventory data...
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: AI Engagement Animation */}
              {activeStep === 1 && (
                <motion.div
                  key="step2"
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative w-full max-w-4xl mx-auto px-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="mb-6"
                        >
                          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 mb-2">
                            Step 2
                          </span>
                          <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600">
                            Engage with AI
                          </h3>
                          <p className="text-slate-600 dark:text-slate-300">
                            Let our AI handle buyer inquiries, follow-ups, and qualification while you focus on closing
                            deals.
                          </p>
                        </motion.div>

                        <div className="space-y-3">
                          {["24/7 automated responses", "Personalized follow-ups", "Lead qualification"].map(
                            (item, i) => (
                              <motion.div
                                key={i}
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + i * 0.1 }}
                              >
                                <div className="w-6 h-6 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center flex-shrink-0">
                                  <ChevronRight className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                                </div>
                                <span>{item}</span>
                              </motion.div>
                            ),
                          )}
                        </div>
                      </div>

                      <div className="relative">
                        {/* Animated chat illustration */}
                        <motion.div
                          className="relative bg-gradient-to-br from-pink-500/10 to-violet-500/10 rounded-xl p-6 border border-pink-200 dark:border-pink-800/30"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="relative z-10">
                            {/* AI Bot icon */}
                            <motion.div
                              className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center text-white"
                              animate={{
                                y: [0, -10, 0],
                                boxShadow: [
                                  "0 0 0 rgba(236, 72, 153, 0)",
                                  "0 0 20px rgba(236, 72, 153, 0.5)",
                                  "0 0 0 rgba(236, 72, 153, 0)",
                                ],
                              }}
                              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            >
                              <Bot className="w-8 h-8" />
                            </motion.div>

                            {/* Chat conversation */}
                            <div className="space-y-3 mb-4">
                              {/* Customer message */}
                              <motion.div
                                className="ml-auto max-w-[80%] bg-slate-200 dark:bg-slate-700 p-3 rounded-lg rounded-tr-none"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                              >
                                <p className="text-sm">Is the 2023 Honda Civic still available?</p>
                              </motion.div>

                              {/* AI response with typing animation */}
                              <motion.div
                                className="max-w-[80%] bg-gradient-to-r from-pink-500 to-violet-500 p-3 rounded-lg rounded-tl-none text-white"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 }}
                              >
                                <TypingAnimation />
                                <motion.p
                                  className="text-sm"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 2 }}
                                >
                                  Yes, the 2023 Honda Civic is available! It has 12,000 miles and is priced at $24,500.
                                  Would you like to schedule a viewing?
                                </motion.p>
                              </motion.div>

                              {/* Customer response */}
                              <motion.div
                                className="ml-auto max-w-[80%] bg-slate-200 dark:bg-slate-700 p-3 rounded-lg rounded-tr-none"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 3 }}
                              >
                                <p className="text-sm">That sounds great. What times are available?</p>
                              </motion.div>
                            </div>

                            {/* AI status indicator */}
                            <motion.div
                              className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400"
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            >
                              <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                              </span>
                              AI assistant is responding...
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Deal Tracking Animation */}
              {activeStep === 2 && (
                <motion.div
                  key="step3"
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative w-full max-w-4xl mx-auto px-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="mb-6"
                        >
                          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 mb-2">
                            Step 3
                          </span>
                          <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">
                            Track & Close Deals
                          </h3>
                          <p className="text-slate-600 dark:text-slate-300">
                            Monitor every deal in real-time and get actionable insights to maximize your closing rate.
                          </p>
                        </motion.div>

                        <div className="space-y-3">
                          {["Real-time deal status", "Performance analytics", "Automated follow-ups"].map((item, i) => (
                            <motion.div
                              key={i}
                              className="flex items-center gap-2"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + i * 0.1 }}
                            >
                              <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                                <ChevronRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                              </div>
                              <span>{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="relative">
                        {/* Animated dashboard illustration */}
                        <motion.div
                          className="relative bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="relative z-10">
                            {/* Analytics icon */}
                            <motion.div
                              className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white"
                              animate={{
                                y: [0, -10, 0],
                                boxShadow: [
                                  "0 0 0 rgba(16, 185, 129, 0)",
                                  "0 0 20px rgba(16, 185, 129, 0.5)",
                                  "0 0 0 rgba(16, 185, 129, 0)",
                                ],
                              }}
                              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            >
                              <BarChart3 className="w-8 h-8" />
                            </motion.div>

                            {/* Dashboard visualization */}
                            <div className="space-y-4 mb-4">
                              {/* Chart */}
                              <div className="h-24 flex items-end justify-between gap-1">
                                {[40, 65, 35, 85, 55, 70, 60].map((height, i) => (
                                  <motion.div
                                    key={i}
                                    className="h-full flex-1 flex flex-col justify-end"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                  >
                                    <motion.div
                                      className="bg-gradient-to-t from-emerald-500 to-cyan-500 rounded-t-sm"
                                      initial={{ height: 0 }}
                                      animate={{ height: `${height}%` }}
                                      transition={{
                                        delay: 0.5 + i * 0.1,
                                        duration: 1,
                                        ease: "easeOut",
                                      }}
                                    />
                                  </motion.div>
                                ))}
                              </div>

                              {/* Stats cards */}
                              <div className="grid grid-cols-2 gap-2">
                                <motion.div
                                  className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 1.2 }}
                                >
                                  <div className="text-xs text-slate-500 dark:text-slate-400">Conversion Rate</div>
                                  <motion.div
                                    className="text-lg font-bold text-emerald-600 dark:text-emerald-400"
                                    animate={{ opacity: [0.7, 1, 0.7] }}
                                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                  >
                                    +28%
                                  </motion.div>
                                </motion.div>

                                <motion.div
                                  className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 1.4 }}
                                >
                                  <div className="text-xs text-slate-500 dark:text-slate-400">Deals Closed</div>
                                  <motion.div
                                    className="text-lg font-bold text-emerald-600 dark:text-emerald-400"
                                    animate={{
                                      opacity: [0.7, 1, 0.7],
                                      textContent: ["10", "11", "12"],
                                    }}
                                    transition={{
                                      opacity: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                                      textContent: {
                                        duration: 5,
                                        repeat: Number.POSITIVE_INFINITY,
                                        times: [0, 0.5, 1],
                                      },
                                    }}
                                  >
                                    12
                                  </motion.div>
                                </motion.div>
                              </div>
                            </div>

                            {/* Status indicator */}
                            <motion.div
                              className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400"
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            >
                              <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                              </span>
                              Live data updating...
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

// Typing animation component
const TypingAnimation = () => {
  return (
    <div className="flex space-x-1 mb-2">
      <motion.div
        className="w-2 h-2 rounded-full bg-white"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: 2, repeatType: "loop" }}
      />
      <motion.div
        className="w-2 h-2 rounded-full bg-white"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: 2, repeatType: "loop", delay: 0.3 }}
      />
      <motion.div
        className="w-2 h-2 rounded-full bg-white"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: 2, repeatType: "loop", delay: 0.6 }}
      />
    </div>
  )
}
