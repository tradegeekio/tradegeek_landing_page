"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function CountdownTimer({ onJoinWaitlist }: { onJoinWaitlist: () => void }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [prevTimeLeft, setPrevTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set the launch date to 30 days from now
    const launchDate = new Date()
    launchDate.setDate(launchDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setPrevTimeLeft(timeLeft)

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-2xl blur-md opacity-30"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          backgroundPosition: ["0% center", "100% center", "0% center"],
        }}
        transition={{
          opacity: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          backgroundPosition: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        style={{ backgroundSize: "200% auto" }}
      />

      <div className="relative bg-white dark:bg-slate-800 rounded-xl p-8 max-w-3xl mx-auto shadow-xl backdrop-blur-sm border border-slate-200 dark:border-slate-700">
        <div className="text-center mb-8">
          <motion.h2
            className="text-2xl font-bold mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-600 dark:from-violet-400 dark:to-cyan-400"
              animate={{
                backgroundPosition: ["0% center", "100% center", "0% center"],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              style={{ backgroundSize: "200% auto" }}
            >
              TradeGeek Beta Launches Soon!
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Be the first to experience AI-driven auto wholesaling.
          </motion.p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          <CountdownUnit value={timeLeft.days} prevValue={prevTimeLeft.days} label="Days" delay={0.3} />
          <CountdownUnit value={timeLeft.hours} prevValue={prevTimeLeft.hours} label="Hours" delay={0.4} />
          <CountdownUnit value={timeLeft.minutes} prevValue={prevTimeLeft.minutes} label="Minutes" delay={0.5} />
          <CountdownUnit value={timeLeft.seconds} prevValue={prevTimeLeft.seconds} label="Seconds" delay={0.6} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button
            onClick={onJoinWaitlist}
            className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white h-12 rounded-lg text-lg shadow-lg shadow-violet-500/20 group"
          >
            Join Waitlist
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="ml-2"
            >
              <ArrowRight className="h-5 w-5" />
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

function CountdownUnit({
  value,
  prevValue,
  label,
  delay,
}: { value: number; prevValue: number; label: string; delay: number }) {
  const hasChanged = value !== prevValue

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <div className="relative w-full aspect-square flex items-center justify-center">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-xl border border-slate-200 dark:border-slate-700"
          animate={{
            borderColor: hasChanged
              ? ["rgba(139, 92, 246, 0.5)", "rgba(139, 92, 246, 0.2)"]
              : "rgba(139, 92, 246, 0.2)",
            boxShadow: hasChanged
              ? ["0 0 0 rgba(139, 92, 246, 0)", "0 0 15px rgba(139, 92, 246, 0.5)", "0 0 0 rgba(139, 92, 246, 0)"]
              : "0 0 0 rgba(139, 92, 246, 0)",
          }}
          transition={{ duration: hasChanged ? 1 : 0.3, ease: "easeOut" }}
        />

        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            className="relative text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-600 dark:from-violet-400 dark:to-cyan-400"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0, position: "absolute" }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {value.toString().padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-2 text-xs sm:text-sm text-muted-foreground">{label}</span>
    </motion.div>
  )
}

// Missing ArrowRight component
const ArrowRight = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)
