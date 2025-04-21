"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export function IndustryChallenges() {
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

  return (
    <section className=" bg-slate-50 dark:bg-slate-900/50" id="challenges">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Industry Challenges vs TradeGeek Solutions
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            See how TradeGeek transforms common wholesaling pain points into competitive advantages
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[768px]">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 mb-6 font-bold">
              <div className="p-4 bg-slate-200 dark:bg-slate-800 rounded-lg">Challenge</div>
              <div className="p-4 bg-slate-200 dark:bg-slate-800 rounded-lg">Traditional Approach</div>
              <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg">
                TradeGeek Solution
              </div>
            </div>

            {/* Rows */}
            {challenges.map((item, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-3 gap-4 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                  {item.challenge}
                </div>
                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{item.traditional}</span>
                </div>
                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-blue-200 dark:border-blue-900 flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{item.solution}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="#countdown"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-medium transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Join the Waitlist
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
