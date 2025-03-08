"use client"

import * as React from "react"
import Link from "next/link"
import { Plane, Hotel, Car, Search, Menu, X, User } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function TravelNavbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
          <Link href="/" className="flex items-center space-x-2">
            <Plane className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">TravelEase</span>
          </Link>
          <MainNav isOpen={isOpen} />
          <div className="flex items-center space-x-4">
            <SearchBar />
            <UserNav />
          </div>
        </div>
      </div>
    </header>
  )
}

function MainNav({ isOpen }: { isOpen: boolean }) {
  return (
    <nav
      className={cn(
        "absolute left-0 right-0 top-full flex-col items-center space-y-4 bg-background p-4 shadow-lg md:static md:flex md:flex-row md:space-x-6 md:space-y-0 md:p-0 md:shadow-none",
        isOpen ? "flex" : "hidden md:flex",
      )}
    >
      <NavigationMenu>
        <NavigationMenuList className="flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="h-9">
              <Plane className="mr-2 h-4 w-4" />
              Flights
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <Link
                    href="/flights"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <Plane className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">Flights</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Search and book flights to destinations worldwide.
                    </p>
                  </Link>
                </li>
                <ListItem href="/flights/domestic" title="Domestic Flights">
                  Book flights within your country
                </ListItem>
                <ListItem href="/flights/international" title="International Flights">
                  Explore international destinations
                </ListItem>
                <ListItem href="/flights/deals" title="Flight Deals">
                  Find the best flight offers
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="h-9">
              <Hotel className="mr-2 h-4 w-4" />
              Hotels
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem href="/hotels/search" title="Find Hotels">
                  Search for hotels in your destination
                </ListItem>
                <ListItem href="/hotels/deals" title="Hotel Deals">
                  Discover great hotel offers
                </ListItem>
                <ListItem href="/hotels/reviews" title="Hotel Reviews">
                  Read reviews from other travelers
                </ListItem>
                <ListItem href="/hotels/luxury" title="Luxury Stays">
                  Explore high-end accommodations
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="h-9">
              <Car className="mr-2 h-4 w-4" />
              Car Rentals
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem href="/cars/search" title="Rent a Car">
                  Find car rentals at your destination
                </ListItem>
                <ListItem href="/cars/deals" title="Car Rental Deals">
                  Get the best prices on car rentals
                </ListItem>
                <ListItem href="/cars/luxury" title="Luxury Cars">
                  Rent premium and sports cars
                </ListItem>
                <ListItem href="/cars/compare" title="Compare Rentals">
                  Compare prices from different providers
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}

function SearchBar() {
  return (
    <form className="relative hidden md:block">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search destinations..." className="pl-8 w-[200px] lg:w-[300px]" />
    </form>
  )
}

function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <User className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">John Doe</p>
            <p className="text-xs leading-none text-muted-foreground">john@example.com</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Bookings</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function MobileNav({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  return (
    <Button
      variant="ghost"
      className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      <span className="sr-only">Toggle Menu</span>
    </Button>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

