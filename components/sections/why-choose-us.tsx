"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function WhyChooseUs() {
  const rightFeatures = [
    {
      icon: "/placeholder.svg?height=50&width=50",
      title: "24/7 AI Assistance",
      description: "Get instant responses to buyer inquiries at any time of day or night.",
    },
    {
      icon: "/placeholder.svg?height=50&width=50",
      title: "Increased Deal Velocity",
      description: "Close deals 3x faster with automated follow-ups and qualification.",
    },
    {
      icon: "/placeholder.svg?height=50&width=50",
      title: "Seamless Integration",
      description: "Works with your existing tools and inventory management systems.",
    },
    {
      icon: "/placeholder.svg?height=50&width=50",
      title: "Customer Satisfaction",
      description: "Maintain 98% positive ratings with consistent communication.",
    },
  ]

  const leftFeatures = [
    {
      title: "Advanced AI Technology",
      description:
        "Our platform leverages cutting-edge AI to understand buyer intent and provide personalized responses.",
    },
    {
      title: "Specialized Automation",
      description: "Purpose-built workflows designed specifically for auto wholesalers' unique needs.",
    },
    {
      title: "Data-Driven Insights",
      description: "Comprehensive analytics dashboard reveals what's working and what needs attention.",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      {/* Add animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-violet-500/5 dark:bg-violet-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-[10%] -left-[10%] w-[30%] h-[30%] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Background watermark text */}
      <div className="absolute top-20 left-0 text-slate-200/10 dark:text-slate-800/10 text-[180px] font-bold leading-none tracking-tight">
        TradeGeek
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight gradient-text sm:text-5xl md:text-6xl"
          >
            Why Choose Us
          </motion.h2>
          <div className="w-24 h-1 bg-violet-500 mt-2"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[700px] text-slate-600 dark:text-slate-300 md:text-lg"
          >
            Choose us for a seamless auto wholesaling journey where AI technology meets industry expertise
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left side features */}
          <div className="lg:col-span-4 space-y-16">
            {leftFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5, scale: 1.02 }}
                className="text-left"
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <motion.div
                  className="w-16 h-1 bg-violet-500 mb-3"
                  whileHover={{ width: "100px" }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Center image */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
              whileHover={{ scale: 1.05, rotate: 5 }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                },
                rotate: {
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                },
              }}
            >
              <div className="w-[350px] h-[350px] relative">
                {/* Enhanced shadow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[40px] bg-black/20 dark:bg-black/40 rounded-full blur-xl transform -translate-y-[20px] z-0"></div>

                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6vqjTHH9RdQ1EYmfSTshhv20CSUgZP.png"
                  alt="Performance Tire"
                  width={350}
                  height={350}
                  className="object-contain drop-shadow-2xl relative z-10"
                />

                {/* Reflection effect */}
                <div className="absolute bottom-[-20px] left-0 right-0 h-[40px] bg-gradient-to-b from-slate-900/40 to-transparent blur-md transform scale-x-[0.9] scale-y-[-0.4] opacity-40 z-0"></div>

                {/* Animated connection points with lines - LEFT SIDE */}
                {/* These dots and lines connect to the three left features */}
                <div className="absolute top-[25%] left-0 w-4 h-4 bg-violet-500 rounded-full z-20">
                  {/* Advanced AI Technology dot */}
                </div>
                <div className="absolute top-[25%] left-0 w-[100px] h-[2px] bg-violet-500 transform -translate-x-[100px] z-20">
                  {/* Advanced AI Technology line */}
                </div>

                <div className="absolute top-[50%] left-0 w-4 h-4 bg-violet-500 rounded-full z-20">
                  {/* Specialized Automation dot */}
                </div>
                <div className="absolute top-[50%] left-0 w-[100px] h-[2px] bg-violet-500 transform -translate-x-[100px] z-20">
                  {/* Specialized Automation line */}
                </div>

                <div className="absolute top-[75%] left-0 w-4 h-4 bg-violet-500 rounded-full z-20">
                  {/* Data-Driven Insights dot */}
                </div>
                <div className="absolute top-[75%] left-0 w-[100px] h-[2px] bg-violet-500 transform -translate-x-[100px] z-20">
                  {/* Data-Driven Insights line */}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side feature cards */}
          <div className="lg:col-span-4 space-y-6">
            {rightFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  x: -5,
                  scale: 1.02,
                  boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 15px -5px rgba(0, 0, 0, 0.05)",
                  borderColor: "rgba(139, 92, 246, 0.5)",
                }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-5 border border-slate-200/80 dark:border-slate-700/80 transition-all duration-300 shadow-md"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500/20 to-violet-600/20 flex items-center justify-center border border-violet-500/30 shadow-inner"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(124, 58, 237, 0.2)" }}
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ rotate: { duration: 5, repeat: Number.POSITIVE_INFINITY } }}
                  >
                    <Image
                      src={feature.icon || "/placeholder.svg"}
                      alt={feature.title}
                      width={24}
                      height={24}
                      className="text-violet-500"
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                    <motion.div
                      className="w-16 h-1 bg-gradient-to-r from-violet-500 to-violet-400 my-1"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm mt-3 pl-16 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
