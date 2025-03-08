import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FlightBooking } from "@/components/FlightBooking"
import { CarBooking } from "@/components/CarBooking"
import { HotelBooking } from "@/components/HotelBooking"
import { Plane, Car, Building2 } from "lucide-react"
import Image from "next/image"
// import { Navbar } from "@/components/Navbar"
import { TravelPros } from "@/components/TravelPros"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* <Navbar /> */}
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="/main.jpg"
            alt="Travel Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Search Box */}
        <div className="relative container mx-auto px-4 pt-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-8 text-center">
              Discover Your Next Adventure
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-xl">
              <Tabs defaultValue="flight" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger
                    value="flight"
                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-200"
                  >
                    <Plane className="mr-2 h-4 w-4" />
                    Flights
                  </TabsTrigger>
                  <TabsTrigger
                    value="hotel"
                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-200"
                  >
                    <Building2 className="mr-2 h-4 w-4" />
                    Hotels
                  </TabsTrigger>
                  <TabsTrigger
                    value="car"
                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-200"
                  >
                    <Car className="mr-2 h-4 w-4" />
                    Cars
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="flight">
                  <FlightBooking />
                </TabsContent>
                <TabsContent value="hotel">
                  <HotelBooking />
                </TabsContent>
                <TabsContent value="car">
                  <CarBooking />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Destinations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: "Paris",
                image: "/s1.jpg",
              },
              {
                name: "Tokyo",
                image: "/s2.jpg",
              },
              {
                name: "New York",
                image: "/s3.jpg",
              },
              {
                name: "Bali",
                image: "/s4.jpg",
              },
            ].map((destination) => (
              <div
                key={destination.name}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={500}
                  height={300}
                  className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{destination.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TravelPros />

      {/* Footer */}
      <Footer />
    </main>
  )
}