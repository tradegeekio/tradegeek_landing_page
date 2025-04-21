"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MessageSquare } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2] bg-[size:20px_20px] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-3/4 h-3/4 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
                Sell More Vehicles, Close Deals Faster
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                TradeGeek streamlines vehicle sales with AI-powered messaging, buyer engagement automation, and
                deal-tracking tools built specifically for auto wholesalers.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500">
                Join Waitlist
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-xl overflow-hidden border shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900">
                <div className="absolute top-0 left-0 right-0 h-12 bg-slate-950/20 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 text-xs text-white/70">TradeGeek Dashboard</div>
                </div>

                <div className="absolute top-12 left-0 bottom-0 w-48 bg-slate-900/50 p-4">
                  <div className="space-y-4">
                    <div className="h-8 w-32 rounded bg-blue-500/20"></div>
                    <div className="space-y-2">
                      <div className="h-6 w-full rounded bg-slate-700/50"></div>
                      <div className="h-6 w-full rounded bg-slate-700/50"></div>
                      <div className="h-6 w-full rounded bg-slate-700/50"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-12 left-48 right-0 bottom-0 p-4">
                  <div className="h-full rounded-lg bg-slate-800/50 p-4 flex flex-col">
                    <div className="flex-1 space-y-4">
                      <div className="h-8 w-32 rounded bg-blue-500/20 mb-6"></div>

                      <div className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center">
                          <MessageSquare className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 w-3/4 rounded bg-slate-700/50"></div>
                          <div className="h-4 w-1/2 rounded bg-slate-700/50"></div>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-slate-700/30 flex items-center justify-center">
                          <MessageSquare className="w-4 h-4 text-slate-400" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 w-5/6 rounded bg-slate-700/50"></div>
                          <div className="h-4 w-2/3 rounded bg-slate-700/50"></div>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center">
                          <MessageSquare className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 w-4/5 rounded bg-slate-700/50"></div>
                          <div className="h-4 w-3/5 rounded bg-slate-700/50"></div>
                        </div>
                      </div>
                    </div>

                    <div className="h-10 rounded bg-slate-700/50 mt-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
