"use client"

import { motion } from "framer-motion"
import { Clock, Globe, Map, Bell } from "lucide-react"

const features = [
  {
    title: "Best Time to Travel",
    description: "Know when to save",
    icon: Clock,
    image:
      "/timefortravel.png",
  },
  {
    title: "Explore",
    description: "See destinations on your budget",
    icon: Globe,
    image:
      "/exploretravel.png",
  },
  {
    title: "Trips",
    description: "Keep all your plans in one place",
    icon: Map,
    image:
      "/trips.png",
  },
  {
    title: "Price Alerts",
    description: "Know when prices change",
    icon: Bell,
    image:
      "/pricetrack.png",
  },
]

export function TravelPros() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl  font-bold mb-12 text-center text-blue-500">For travel pros</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="relative h-48 w-full">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

