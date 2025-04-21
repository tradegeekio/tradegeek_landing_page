"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Michael Rodriguez",
      title: "CEO, AutoWholesale Partners",
      avatar: "https://avatars.githubusercontent.com/u/848474?v=4",
      text: "TradeGeek has transformed our wholesale business. We're handling 40% more inventory with the same team size.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      title: "Sales Manager, Premier Auto Group",
      avatar: "https://avatars.githubusercontent.com/u/848474?v=4",
      text: "The AI messaging is a game-changer. Our response time has decreased from hours to seconds.",
      rating: 5,
    },
    {
      name: "David Kim",
      title: "Owner, Global Auto Imports",
      avatar: "https://avatars.githubusercontent.com/u/848474?v=4",
      text: "TradeGeek's deal tracking keeps our team aligned and helps us close more deals faster.",
      rating: 4,
    },
  ]

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Are Saying</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            See how TradeGeek is helping auto wholesalers transform their businesses
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                scale: 1.02,
                borderColor: "rgba(139, 92, 246, 0.5)",
              }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{testimonial.text}</p>
              <div className="flex items-center space-x-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
