"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Check, X, Zap, AlertTriangle, ArrowRight } from "lucide-react"
import { useRef, useState } from "react"

export function Comparison() {
  const challenges = [
    {
      challenge: "Manual follow-ups taking too much time",
      traditional: "Staff manually calling and emailing leads",
      solution: "AI-powered automated follow-ups that adapt to buyer behavior",
    },
    {
      challenge: "Missed opportunities during off-hours",
      traditional: "Inquiries sit unanswered until business hours",
      solution: "24/7 AI responses to capture interest when it's highest",
    },
    {
      challenge: "Difficulty tracking deal progress",
      traditional: "Spreadsheets or basic CRM with manual updates",
      solution: "Real-time deal tracking with automated status updates",
    },
    {
      challenge: "Inconsistent communication with buyers",
      traditional: "Quality varies based on which staff member responds",
      solution: "Consistent, professional communication with every buyer",
    },
  ]

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50])

  // Track active challenge for enhanced interactions
  const [activeChallenge, setActiveChallenge] = useState<number | null>(null)

  return (
    <section className="py-24 relative overflow-hidden" id="comparison" ref={containerRef}>
      {/* Vibrant animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800" />

        {/* Animated gradient mesh */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          />
        </div>

        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-500"
            style={{
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

        {/* Animated grid lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-full bg-blue-500/10"
              style={{ top: `${10 * i}%` }}
              animate={{
                scaleX: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-full bg-blue-500/10"
              style={{ left: `${10 * i}%` }}
              animate={{
                scaleY: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div className="relative max-w-7xl mx-auto px-4 md:px-6" style={{ opacity, scale, y }}>
        {/* Floating 3D elements */}
        <motion.div
          className="absolute -left-20 top-20 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"
          animate={{
            rotate: [0, 10, 0, -10, 0],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-20 bottom-20 w-60 h-60 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"
          animate={{
            rotate: [0, -10, 0, 10, 0],
            scale: [1, 1.3, 1],
            y: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        />

        {/* Vibrant header with animated elements */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-medium text-white mb-4"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-4 h-4 mr-2 rounded-full border-2 border-white/30 border-t-white"
              />
              Game-Changing Solutions
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <motion.div
                className="relative inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="relative z-10">Old Way</span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-4 bg-red-500/20 rounded-full -z-10"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                />
              </motion.div>
              <motion.span
                className="mx-4 text-slate-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                vs
              </motion.span>
              <motion.div
                className="relative inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.span
                  className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                  animate={{
                    backgroundPosition: ["0% center", "100% center", "0% center"],
                  }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  style={{ backgroundSize: "200% auto" }}
                >
                  TradeGeek
                </motion.span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-4 bg-blue-500/20 rounded-full -z-10"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                />
              </motion.div>
            </h2>

            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              See how we're revolutionizing auto wholesaling with cutting-edge AI technology
            </motion.p>
          </motion.div>
        </div>

        {/* Interactive comparison cards with dramatic visuals */}
        <div className="relative">
          {challenges.map((item, index) => (
            <motion.div
              key={index}
              className="mb-24 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              onHoverStart={() => setActiveChallenge(index)}
              onHoverEnd={() => setActiveChallenge(null)}
            >
              {/* Dramatic challenge number */}
              <motion.div
                className="absolute -left-10 -top-10 text-[150px] font-black text-slate-100 dark:text-slate-800/50 select-none z-0"
                animate={
                  activeChallenge === index ? { scale: [1, 1.1, 1], rotate: [-5, 5, -5] } : { rotate: [-2, 2, -2] }
                }
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                {index + 1}
              </motion.div>

              {/* Challenge title with animated underline */}
              <motion.div className="relative z-10 mb-10 ml-6" whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                <h3 className="text-2xl md:text-3xl font-bold">{item.challenge}</h3>
                <motion.div
                  className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </motion.div>

              {/* Comparison cards with dramatic contrast */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Traditional approach card - problem visualization */}
                <motion.div
                  className="relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-xl border-2 border-red-500/30"
                  whileHover={{
                    y: -10,
                    rotateY: 5,
                    rotateX: 5,
                    boxShadow: "0 25px 50px -12px rgba(244, 63, 94, 0.25)",
                  }}
                  animate={
                    activeChallenge === index
                      ? { borderColor: "rgba(244, 63, 94, 0.5)" }
                      : { borderColor: "rgba(244, 63, 94, 0.3)" }
                  }
                  transition={{ duration: 0.3 }}
                >
                  {/* Problem badge */}
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      <span className="font-bold">Problem</span>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="text-xs font-bold bg-white/20 px-2 py-1 rounded-full"
                    >
                      OLD WAY
                    </motion.div>
                  </div>

                  {/* Content with visual problem indicators */}
                  <div className="pt-16 p-6">
                    <div className="flex items-start">
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 0.5 }}
                        className="mr-4 mt-1 bg-red-100 dark:bg-red-900/30 p-2 rounded-full"
                      >
                        <X className="w-6 h-6 text-red-500" />
                      </motion.div>
                      <div>
                        <p className="text-lg font-medium mb-3">{item.traditional}</p>

                        {/* Visual problem indicators */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {["Time-consuming", "Error-prone", "Inconsistent"].map((tag, i) => (
                            <motion.span
                              key={i}
                              className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-1 rounded-full"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 + i * 0.1 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Animated frustration visualization */}
                    <div className="mt-6 h-10 bg-slate-100 dark:bg-slate-700/30 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-red-200 dark:bg-red-900/50 flex items-center px-3"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 }}
                      >
                        <motion.span
                          className="text-xs font-bold text-red-700 dark:text-red-300"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          85% Frustration Level
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* TradeGeek solution card - solution visualization */}
                <motion.div
                  className="relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-xl border-2 border-blue-500/30"
                  whileHover={{
                    y: -10,
                    rotateY: -5,
                    rotateX: 5,
                    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                  }}
                  animate={
                    activeChallenge === index
                      ? { borderColor: "rgba(59, 130, 246, 0.5)" }
                      : { borderColor: "rgba(59, 130, 246, 0.3)" }
                  }
                  transition={{ duration: 0.3 }}
                >
                  {/* Solution badge */}
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      <span className="font-bold">Solution</span>
                    </div>
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(255, 255, 255, 0.4)",
                          "0 0 0 10px rgba(255, 255, 255, 0)",
                          "0 0 0 0 rgba(255, 255, 255, 0.4)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="text-xs font-bold bg-white/20 px-2 py-1 rounded-full"
                    >
                      TRADEGEEK
                    </motion.div>
                  </div>

                  {/* Content with visual solution indicators */}
                  <div className="pt-16 p-6">
                    <div className="flex items-start">
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                        animate={{
                          scale: [1, 1.1, 1],
                          boxShadow: [
                            "0 0 0 0 rgba(59, 130, 246, 0.4)",
                            "0 0 0 10px rgba(59, 130, 246, 0)",
                            "0 0 0 0 rgba(59, 130, 246, 0.4)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                        className="mr-4 mt-1 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full"
                      >
                        <Check className="w-6 h-6 text-green-500" />
                      </motion.div>
                      <div>
                        <p className="text-lg font-medium mb-3">{item.solution}</p>

                        {/* Visual solution benefits */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {["Automated", "24/7 Availability", "Consistent"].map((tag, i) => (
                            <motion.span
                              key={i}
                              className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 + i * 0.1 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Animated efficiency visualization */}
                    <div className="mt-6 h-10 bg-slate-100 dark:bg-slate-700/30 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center px-3"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "95%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 }}
                      >
                        <motion.span
                          className="text-xs font-bold text-white"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          95% Efficiency Boost
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Animated particles */}
                  <AnimatePresence>
                    {activeChallenge === index && (
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(10)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 0, x: 0 }}
                            animate={{ opacity: [0.4, 0.8, 0], y: -100, x: (Math.random() - 0.5) * 50 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, delay: i * 0.1 }}
                            className="absolute w-2 h-2 rounded-full bg-blue-500"
                            style={{
                              bottom: "10%",
                              left: `${10 + i * 8}%`,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Eye-catching CTA button */}
        <div className="mt-16 text-center">
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.a
              href="#countdown"
              className="relative inline-flex items-center px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg transition-all duration-200 transform group overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                initial={{ x: "100%", opacity: 0 }}
                whileHover={{ x: "0%", opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Button content */}
              <span className="relative z-10 flex items-center">
                Transform Your Business Today
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  className="ml-2"
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </span>

              {/* Animated glow effect */}
              <motion.div
                className="absolute -inset-1 rounded-full blur-xl opacity-30 bg-gradient-to-r from-blue-600 to-purple-600 z-0"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
