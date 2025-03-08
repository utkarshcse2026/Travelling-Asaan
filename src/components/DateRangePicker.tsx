"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import type { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface DateRangePickerProps {
  className?: string
  placeholder?: string
  onChange?: (dateRange: DateRange | undefined) => void
}

export function DateRangePicker({ className, placeholder = "Select dates", onChange }: DateRangePickerProps) {
  const [date, setDate] = React.useState<DateRange | undefined>()
  const [isOpen, setIsOpen] = React.useState(false)

  const handleSelect = (newDate: DateRange | undefined) => {
    setDate(newDate)
  }

  const handleConfirm = () => {
    onChange?.(date)
    setIsOpen(false)
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "MMM d, yyyy")} - {format(date.to, "MMM d, yyyy")}
                </>
              ) : (
                format(date.from, "MMM d, yyyy")
              )
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="p-4 space-y-4">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={handleSelect}
              numberOfMonths={2}
              disabled={(date) => date < new Date()}
            />
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                {date?.from && date?.to
                  ? `${format(date.from, "MMM d, yyyy")} - ${format(date.to, "MMM d, yyyy")}`
                  : "Select start and end dates"}
              </p>
              <Button onClick={handleConfirm} disabled={!date?.from || !date?.to}>
                Select
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

