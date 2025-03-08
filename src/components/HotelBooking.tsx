"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Building2 } from "lucide-react"
import type { DateRange } from "react-day-picker"
import { format } from "date-fns"
import { LocationDropdown } from "./LocationDropdown"
import { DateRangePicker } from "./DateRangePicker"
import { handleSearch } from "@/utils/search"

export function HotelBooking() {
  const [location, setLocation] = useState("")
  const [dateRange, setDateRange] = useState<DateRange>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearch("hotel", {
      location,
      dates: dateRange ? `${format(dateRange.from!, "yyyy-MM-dd")},${format(dateRange.to!, "yyyy-MM-dd")}` : "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Destination
        </label>
        <LocationDropdown id="location" placeholder="Where are you going?" onSelect={setLocation} type="city" />
      </div>

      <div className="space-y-2">
        <label htmlFor="dates" className="block text-sm font-medium text-gray-700">
          Check-in - Check-out
        </label>
        <DateRangePicker id="dates" placeholder="Select check-in and check-out dates" onChange={setDateRange} />
      </div>

      <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg rounded-md">
        <Building2 className="mr-2 h-5 w-5" />
        Search Hotels
      </Button>
    </form>
  )
}

