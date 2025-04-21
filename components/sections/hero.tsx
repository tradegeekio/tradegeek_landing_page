"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from "framer-motion"
import { ArrowRight, MessageSquare, BarChart3, Clock, ChevronDown } from "lucide-react"
import { CountdownTimer } from "@/components/countdown-timer"
import { useRef, useState, useEffect } from "react"

export function Hero({ onJoinWaitlist }: { onJoinWaitlist: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  // Animated text
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const animatedTexts = ["Vehicles", "Deals", "Revenue", "Growth"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % animatedTexts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Blob animation
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Scroll indicator animation
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1 && showScrollIndicator) {
      setShowScrollIndicator(false)
    } else if (latest <= 0.1 && !showScrollIndicator) {
      setShowScrollIndicator(true)
    }
  })

  return (
    <section ref={containerRef} className="relative pt-32 pb-16 overflow-hidden min-h-screen flex items-center">
      <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 blur-3xl"
          animate={{
            x: mousePosition.x * -1,
            y: mousePosition.y * -1,
            scale: [1, 1.05, 1],
          }}
          transition={{
            scale: {
              repeat: Number.POSITIVE_INFINITY,
              duration: 8,
              ease: "easeInOut",
            },
            x: { duration: 0.5 },
            y: { duration: 0.5 },
          }}
        />
      {/* Modern background with animated gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#fafafa] dark:bg-[#030712]" />

        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-3xl"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
            scale: [1, 1.1, 1],
          }}
          transition={{
            scale: {
              repeat: Number.POSITIVE_INFINITY,
              duration: 10,
              ease: "easeInOut",
              repeatType: "reverse",
            },
            x: { duration: 0.5 },
            y: { duration: 0.5 },
          }}
        />

        {/* Animated grid pattern */}
        <motion.div
          className="absolute inset-0 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2] bg-[size:20px_20px]"
          animate={{
            backgroundPosition: ["0px 0px", "20px 20px"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-violet-500/30 dark:bg-violet-400/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -Math.random() * 100 - 50],
                x: [0, (Math.random() - 0.5) * 50],
                opacity: [0.7, 0],
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
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div style={{ opacity, y }} className="lg:col-span-5 lg:col-start-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 text-sm font-medium text-violet-700 dark:text-violet-300"
            >
              <motion.span
                className="relative flex h-2 w-2 mr-2"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
              </motion.span>
              Beta Launch Coming Soon
            </motion.div>

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
              >
                <motion.span
                  className="block relative"
                  animate={{
                    backgroundPosition: ["0% center", "100% center", "0% center"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  style={{
                    backgroundSize: "200% auto",
                    backgroundImage: "linear-gradient(90deg, #000, #444, #000)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0px 2px 3px rgba(0,0,0,0.15)",
                  }}
                >
                  <span
                    className="absolute inset-0 blur-[2px] opacity-60 text-black dark:text-white"
                    aria-hidden="true"
                  >
                    Sell More
                  </span>
                  Sell More
                </motion.span>
                <div className="h-[1.25em] overflow-hidden mt-1">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentTextIndex}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-600 dark:from-violet-400 dark:to-cyan-400"
                    >
                      {animatedTexts[currentTextIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-xl"
            >
              TradeGeek's AI-powered platform streamlines vehicle sales with intelligent messaging, buyer engagement
              automation, and real-time deal tracking built for auto wholesalers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={onJoinWaitlist}
                size="lg"
                className="relative group overflow-hidden bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white h-14 px-8 rounded-full text-lg shadow-lg shadow-violet-500/20"
              >
                <motion.span
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-violet-600 to-cyan-600"
                  initial={{ x: "100%", opacity: 0 }}
                  whileHover={{ x: "0%", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center">
                  Join Waitlist
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </motion.span>
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 dark:border-slate-700 h-14 px-8 rounded-full text-lg hover:bg-slate-100 dark:hover:bg-slate-800/50"
              >
                See How It Works
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="pt-6 grid grid-cols-3 gap-4 max-w-md"
            >
              {[
                { value: "40%", label: "Faster Response Time" },
                { value: "3x", label: "More Leads Handled" },
                { value: "24/7", label: "Buyer Engagement" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="text-center p-3 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <motion.div
                    className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-600 dark:from-violet-400 dark:to-cyan-400"
                    animate={{
                      backgroundPosition: ["0% center", "100% center", "0% center"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }}
                    style={{ backgroundSize: "200% auto" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - Visual element */}
          <motion.div style={{ y, opacity, scale }} className="lg:col-span-5 relative">
            <div className="relative z-10">
              <motion.div
                className="absolute -top-10 -left-10 w-20 h-20 bg-violet-500/10 rounded-full"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute -bottom-10 -right-10 w-20 h-20 bg-cyan-500/10 rounded-full"
                animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              />

              <motion.div
                className="relative bg-gradient-to-r from-violet-500 to-cyan-500 rounded-2xl p-1 shadow-xl"
                animate={{
                  boxShadow: [
                    "0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.04)",
                    "0 25px 50px -12px rgba(139, 92, 246, 0.25), 0 10px 10px -5px rgba(139, 92, 246, 0.04)",
                    "0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.04)",
                  ],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    {/* Dashboard mockup */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900">
                      <div className="absolute top-0 left-0 right-0 h-12 bg-slate-950/20 backdrop-blur-sm flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="ml-4 text-xs text-white/70">TradeGeek Dashboard</div>
                      </div>

                      <div className="absolute top-12 left-0 bottom-0 w-48 bg-slate-900/50 backdrop-blur-sm p-4">
                        <div className="space-y-4">
                          <div className="h-8 w-32 rounded bg-gradient-to-r from-violet-500/20 to-cyan-500/20"></div>
                          <div className="space-y-2">
                            <motion.div
                              className="h-6 w-full rounded bg-slate-700/50"
                              animate={{
                                opacity: [0.5, 0.7, 0.5],
                              }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                            />
                            <motion.div
                              className="h-6 w-full rounded bg-slate-700/50"
                              animate={{
                                opacity: [0.5, 0.7, 0.5],
                              }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                            />
                            <motion.div
                              className="h-6 w-full rounded bg-slate-700/50"
                              animate={{
                                opacity: [0.5, 0.7, 0.5],
                              }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="absolute top-12 left-48 right-0 bottom-0 p-4">
                        <div className="h-full rounded-lg bg-slate-800/50 backdrop-blur-sm p-4 flex flex-col">
                          <div className="flex-1 space-y-4">
                            <div className="h-8 w-32 rounded bg-gradient-to-r from-violet-500/20 to-cyan-500/20 mb-6"></div>

                            <motion.div
                              className="flex gap-4 items-start"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.8 }}
                            >
                              <motion.div
                                className="w-8 h-8 rounded-full bg-violet-500/30 flex items-center justify-center"
                                animate={{
                                  scale: [1, 1.1, 1],
                                  boxShadow: [
                                    "0 0 0 rgba(139, 92, 246, 0)",
                                    "0 0 10px rgba(139, 92, 246, 0.5)",
                                    "0 0 0 rgba(139, 92, 246, 0)",
                                  ],
                                }}
                                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                              >
                                <MessageSquare className="w-4 h-4 text-violet-400" />
                              </motion.div>
                              <div className="flex-1 space-y-2">
                                <motion.div
                                  className="h-4 w-3/4 rounded bg-slate-700/50"
                                  animate={{
                                    width: ["60%", "75%", "60%"],
                                    opacity: [0.5, 0.7, 0.5],
                                  }}
                                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                                />
                                <motion.div
                                  className="h-4 w-1/2 rounded bg-slate-700/50"
                                  animate={{
                                    width: ["40%", "50%", "40%"],
                                    opacity: [0.5, 0.7, 0.5],
                                  }}
                                  transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    delay: 0.5,
                                  }}
                                />
                              </div>
                            </motion.div>

                            <motion.div
                              className="flex gap-4 items-start"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 1 }}
                            >
                              <div className="w-8 h-8 rounded-full bg-slate-700/30 flex items-center justify-center">
                                <MessageSquare className="w-4 h-4 text-slate-400" />
                              </div>
                              <div className="flex-1 space-y-2">
                                <motion.div
                                  className="h-4 w-5/6 rounded bg-slate-700/50"
                                  animate={{
                                    width: ["70%", "83%", "70%"],
                                    opacity: [0.5, 0.7, 0.5],
                                  }}
                                  transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    delay: 0.2,
                                  }}
                                />
                                <motion.div
                                  className="h-4 w-2/3 rounded bg-slate-700/50"
                                  animate={{
                                    width: ["50%", "66%", "50%"],
                                    opacity: [0.5, 0.7, 0.5],
                                  }}
                                  transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    delay: 0.7,
                                  }}
                                />
                              </div>
                            </motion.div>

                            <motion.div
                              className="flex gap-4 items-start"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 1.2 }}
                            >
                              <motion.div
                                className="w-8 h-8 rounded-full bg-violet-500/30 flex items-center justify-center"
                                animate={{
                                  scale: [1, 1.1, 1],
                                  boxShadow: [
                                    "0 0 0 rgba(139, 92, 246, 0)",
                                    "0 0 10px rgba(139, 92, 246, 0.5)",
                                    "0 0 0 rgba(139, 92, 246, 0)",
                                  ],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "easeInOut",
                                  delay: 1.5,
                                }}
                              >
                                <MessageSquare className="w-4 h-4 text-violet-400" />
                              </motion.div>
                              <div className="flex-1 space-y-2">
                                <motion.div
                                  className="h-4 w-4/5 rounded bg-slate-700/50"
                                  animate={{
                                    width: ["65%", "80%", "65%"],
                                    opacity: [0.5, 0.7, 0.5],
                                  }}
                                  transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    delay: 0.3,
                                  }}
                                />
                                <motion.div
                                  className="h-4 w-3/5 rounded bg-slate-700/50"
                                  animate={{
                                    width: ["45%", "60%", "45%"],
                                    opacity: [0.5, 0.7, 0.5],
                                  }}
                                  transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    delay: 0.8,
                                  }}
                                />
                              </div>
                            </motion.div>
                          </div>

                          <motion.div
                            className="h-10 rounded bg-slate-700/50 mt-4"
                            animate={{
                              opacity: [0.5, 0.7, 0.5],
                            }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating cards with enhanced animations */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.2 } }}
              className="absolute -bottom-10 -left-16 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 0 rgba(16, 185, 129, 0)",
                      "0 0 10px rgba(16, 185, 129, 0.3)",
                      "0 0 0 rgba(16, 185, 129, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <BarChart3 className="h-5 w-5 text-green-500" />
                </motion.div>
                <div>
                  <div className="text-sm font-medium">Deal Closed</div>
                  <div className="text-xs text-muted-foreground">2023 Honda Civic • $24,500</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.7, delay: 1.4 }}
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.2 } }}
              className="absolute -top-8 right-10 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/10 to-cyan-500/10 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 0 rgba(139, 92, 246, 0)",
                      "0 0 10px rgba(139, 92, 246, 0.3)",
                      "0 0 0 rgba(139, 92, 246, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                >
                  <Clock className="h-5 w-5 text-violet-500" />
                </motion.div>
                <div>
                  <div className="text-sm font-medium">Response Time</div>
                  <div className="text-xs text-muted-foreground">Avg. 45 seconds</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-20">
          <CountdownTimer onJoinWaitlist={onJoinWaitlist} />
        </div>

        {/* Scroll indicator */}
        <AnimatePresence>
          {showScrollIndicator && (
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.p
                className="text-sm text-muted-foreground mb-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Scroll to explore
              </motion.p>
              <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                <ChevronDown className="h-6 w-6 text-muted-foreground" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
