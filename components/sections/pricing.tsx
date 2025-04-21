"use client"

export function Pricing({ onJoinWaitlist }: { onJoinWaitlist: () => void }) {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small wholesalers selling 5-20 vehicles per month",
      price: "$199",
      features: [
        "AI messaging for up to 100 leads/month",
        "Basic engagement automation",
        "Deal tracking for up to 50 vehicles",
        "Email and chat support",
        "1 user account",
      ],
      popular: false,
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "Professional",
      description: "Ideal for established wholesalers handling 20-100 vehicles monthly",
      price: "$399",
      features: [
        "AI messaging for up to 500 leads/month",
        "Advanced engagement automation",
        "Deal tracking for up to 200 vehicles",
        "Priority support",
        "5 user accounts",
        "Custom AI training",
        "Analytics dashboard",
      ],
      popular: true,
      color: "from-cyan-400 to-teal-400",
    },
    {
      name: "Enterprise",
      description: "For high-volume dealers managing 100+ vehicles with multiple locations",
      price: "Custom",
      features: [
        "Unlimited AI messaging",
        "Premium engagement automation",
        "Unlimited deal tracking",
        "24/7 dedicated support",
        "Unlimited user accounts",
        "Custom AI training",
        "Advanced analytics",
        "API access",
        "Custom integrations",
      ],
      popular: false,
      color: "from-teal-400 to-green-400",
    },
  ]

  return null
}
