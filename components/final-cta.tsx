"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { useState } from "react"

export function FinalCTA() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Email submitted:", email)
    setEmail("")
    // Show success message or redirect
  }

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Join the Future of Auto Wholesaling?
            </h2>
            <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
              Be among the first to experience TradeGeek and transform your business.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-2 mt-6">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button type="submit" className="bg-white text-blue-600 hover:bg-white/90">
                Join Waitlist
              </Button>
            </div>
          </form>

          <p className="text-sm text-blue-100 mt-4">No credit card required. Get notified when we launch.</p>
        </motion.div>
      </div>
    </section>
  )
}
