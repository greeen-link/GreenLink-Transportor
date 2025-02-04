"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Image from "next/image"

interface Container {
  id: string
  status: string
  location: { lat: number; lng: number } // Now represents percentages
  temperature: number
  humidity: number
  ventilation: string
  transporter: string
  lastUpdate: string
}

interface InteractiveMapProps {
  containers: Container[]
  onSelectContainer: (container: Container) => void
}

export function InteractiveMap({ containers, onSelectContainer }: InteractiveMapProps) {
  return (
    <Card className="h-[600px]">
      <CardHeader>
        <CardTitle>Interactive Map</CardTitle>
      </CardHeader>
      <CardContent className="relative h-[calc(100%-5rem)] overflow-hidden">
        <Image src="/sri-lanka-map.png" alt="Sri Lanka Map" layout="fill" objectFit="contain" />
        {containers.map((container) => (
          <div
            key={container.id}
            className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${container.location.lng}%`,
              top: `${container.location.lat}%`,
            }}
            onClick={() => onSelectContainer(container)}
          >
            <MapPin
              className={`h-6 w-6 ${
                container.status === "Available"
                  ? "text-green-500"
                  : container.status === "In Transit"
                    ? "text-yellow-500"
                    : "text-red-500"
              }`}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

