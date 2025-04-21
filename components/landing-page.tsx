"use client"

import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Testimonials } from "@/components/sections/testimonials"
import { Comparison } from "@/components/sections/comparison"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"
import { WaitlistModal } from "@/components/waitlist-modal"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { WhyChooseUs } from "@/components/sections/why-choose-us"

export function LandingPage() {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading for initial animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 flex items-center justify-center bg-background z-50"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-cyan-600 dark:from-violet-400 dark:to-cyan-400"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            TradeGeek
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          className="min-h-screen bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header onJoinWaitlist={() => setShowWaitlistModal(true)} />
          <main>
            <Hero onJoinWaitlist={() => setShowWaitlistModal(true)} />
            <Features />
            <HowItWorks />
            <Comparison />
            <Testimonials />
            <WhyChooseUs />
            <CTA onJoinWaitlist={() => setShowWaitlistModal(true)} />
          </main>
          <Footer />
          <WaitlistModal open={showWaitlistModal} onOpenChange={setShowWaitlistModal} />

          {/* Animated cursor follower */}
          <AnimatedCursor />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Custom animated cursor effect
function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? [1, 1.2, 1] : 0,
      }}
      transition={{
        x: { type: "spring", stiffness: 500, damping: 28 },
        y: { type: "spring", stiffness: 500, damping: 28 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      }}
    >
      <div className="w-full h-full rounded-full bg-white/80 backdrop-blur-sm" />
    </motion.div>
  )
}
