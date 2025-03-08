"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Car } from "lucide-react"
import type { DateRange } from "react-day-picker"
import { format } from "date-fns"
import { LocationDropdown } from "./LocationDropdown"
import { DateRangePicker } from "./DateRangePicker"
import { handleSearch } from "@/utils/search"

export function CarBooking() {
  const [location, setLocation] = useState("")
  const [dateRange, setDateRange] = useState<DateRange>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearch("car", {
      location,
      dates: dateRange ? `${format(dateRange.from!, "yyyy-MM-dd")},${format(dateRange.to!, "yyyy-MM-dd")}` : "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Pick-up Location
        </label>
        <LocationDropdown id="location" placeholder="Enter city or airport" onSelect={setLocation} type="city" />
      </div>

      <div className="space-y-2">
        <label htmlFor="dates" className="block text-sm font-medium text-gray-700">
          Pick-up - Drop-off
        </label>
        <DateRangePicker id="dates" placeholder="Select pick-up and drop-off dates" onChange={setDateRange} />
      </div>

      <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg rounded-md">
        <Car className="mr-2 h-5 w-5" />
        Search Cars
      </Button>
    </form>
  )
}

