"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Users, TrendingUp, Clock, Bot, BarChart3, Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WhoItsFor() {
  const personas = [
    {
      title: "Small Wholesalers",
      description: "Perfect for dealers selling 5-20 vehicles per month looking to scale without adding staff.",
      icon: Users,
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Mid-Size Operations",
      description: "Ideal for established wholesalers handling 20-100 vehicles monthly who want to boost efficiency.",
      icon: TrendingUp,
      color: "from-cyan-400 to-teal-400",
    },
    {
      title: "Large Enterprises",
      description: "Enterprise-ready solution for high-volume dealers managing 100+ vehicles with multiple locations.",
      icon: BarChart3,
      color: "from-teal-400 to-green-400",
    },
  ]

  const benefits = [
    {
      text: "24/7 automated buyer engagement",
      icon: Clock,
    },
    {
      text: "AI-powered communication",
      icon: Bot,
    },
    {
      text: "Real-time analytics dashboard",
      icon: BarChart3,
    },
    {
      text: "Customizable workflow automation",
      icon: Settings,
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden" id="who-its-for">
      {/* Background elements */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900/30" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-cyan-400/5 to-teal-400/5 rounded-full blur-3xl" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-blue-200 dark:border-blue-900/30 rounded-lg rotate-12 opacity-20" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-cyan-200 dark:border-cyan-900/30 rounded-full opacity-20" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-slate-200 dark:border-slate-800 rounded-full opacity-10" />

      <div className="container px-4 md:px-6 relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Built for Auto Wholesalers Who Want to Scale
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Whether you sell 10 or 100+ cars a week, TradeGeek helps you handle more deals with less manual work.
            </p>
          </motion.div>
        </div>

        {/* Persona cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {personas.map((persona, index) => (
            <Card
              key={index}
              className="border border-slate-200 dark:border-slate-800 overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${persona.color} flex items-center justify-center`}
                  >
                    <persona.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{persona.title}</h3>
                <p className="text-muted-foreground">{persona.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Benefits and CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500/10 rounded-lg rotate-12" />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-cyan-500/10 rounded-lg -rotate-12" />

            <div className="relative bg-white dark:bg-slate-800 rounded-xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-6">Key Benefits for Wholesalers</h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-2 rounded-lg flex-shrink-0">
                      <benefit.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{benefit.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                <p className="text-sm text-muted-foreground mb-4">
                  "TradeGeek has transformed our wholesale business. We're handling 40% more inventory with the same
                  team size."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 mr-3"></div>
                  <div>
                    <p className="font-medium text-sm">Michael Rodriguez</p>
                    <p className="text-xs text-muted-foreground">AutoWholesale Partners, CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold">Ready to transform your wholesale business?</h3>
            <p className="text-muted-foreground">
              Join the growing community of auto wholesalers who are using TradeGeek to scale their operations, improve
              customer engagement, and close more deals.
            </p>

            <ul className="space-y-3 my-6">
              {[
                "Reduce response time from hours to seconds",
                "Never miss a follow-up opportunity again",
                "Track every deal from inquiry to closing",
                "Scale your business without scaling your team",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                >
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 shadow-lg shadow-blue-500/20">
                Join Waitlist
              </Button>
              <Button variant="outline" className="border-blue-200 dark:border-blue-800">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
