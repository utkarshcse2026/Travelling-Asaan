"use client"

import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Check, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

import locations from "../data/locations.json"

interface LocationDropdownProps {
  placeholder: string
  onSelect: (value: string) => void
  type?: "airport" | "city"
}

export function LocationDropdown({ placeholder, onSelect, type = "airport" }: LocationDropdownProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  const items = type === "airport" ? locations.airports : locations.cities

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-start bg-white/5 hover:bg-white/10 border-0"
        >
          <MapPin className="mr-2 h-4 w-4" />
          {value
            ? type === "airport"
              ? `${items.find((item) => item.code === value)?.city} (${value})`
              : value
            : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search location..." />
          <CommandList>
            <CommandEmpty>No location found.</CommandEmpty>
            <CommandGroup>
              {type === "airport"
                ? items.map((item: any) => (
                    <CommandItem
                      key={item.code}
                      onSelect={() => {
                        setValue(item.code)
                        setOpen(false)
                        onSelect(item.code)
                      }}
                    >
                      <Check className={cn("mr-2 h-4 w-4", value === item.code ? "opacity-100" : "opacity-0")} />
                      <div className="flex flex-col">
                        <span>
                          {item.city} ({item.code})
                        </span>
                        <span className="text-sm text-muted-foreground">{item.name}</span>
                      </div>
                    </CommandItem>
                  ))
                : items.map((city: string) => (
                    <CommandItem
                      key={city}
                      onSelect={() => {
                        setValue(city)
                        setOpen(false)
                        onSelect(city)
                      }}
                    >
                      <Check className={cn("mr-2 h-4 w-4", value === city ? "opacity-100" : "opacity-0")} />
                      {city}
                    </CommandItem>
                  ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

