"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plane } from "lucide-react"
import type { DateRange } from "react-day-picker"
import { format } from "date-fns"
import { LocationDropdown } from "./LocationDropdown"
import { DateRangePicker } from "./DateRangePicker"
import { handleSearch } from "@/utils/search"
import { motion } from "framer-motion"

export function FlightBooking() {
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [dateRange, setDateRange] = useState<DateRange>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearch("flight", {
      origin,
      destination,
      dates: dateRange ? `${format(dateRange.from!, "yyyy-MM-dd")},${format(dateRange.to!, "yyyy-MM-dd")}` : "",
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label htmlFor="origin" className="block text-sm font-medium text-gray-700">
              From
            </label>
            <LocationDropdown id="origin" placeholder="Select origin" onSelect={setOrigin} type="airport" />
          </motion.div>
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
              To
            </label>
            <LocationDropdown
              id="destination"
              placeholder="Select destination"
              onSelect={setDestination}
              type="airport"
            />
          </motion.div>
        </div>

        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label htmlFor="dates" className="block text-sm font-medium text-gray-700">
            Travel Dates
          </label>
          <DateRangePicker id="dates" placeholder="Select departure and return dates" onChange={setDateRange} />
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white py-3 text-lg rounded-md transition-all duration-300 transform hover:shadow-lg"
          >
            <Plane className="mr-2 h-5 w-5" />
            Search Flights
          </Button>
        </motion.div>
      </form>
    </motion.div>
  )
}

