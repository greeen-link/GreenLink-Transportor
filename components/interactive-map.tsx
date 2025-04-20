"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"

interface Container {
  id: string
  status: string
  location: { lat: number; lng: number } // Represents percentages
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
        <div className="relative w-full h-full bg-gray-100 rounded-md flex items-center justify-center">
          <div className="text-center p-4">
            <h3 className="text-lg font-semibold mb-2">Sri Lanka Map</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Interactive map showing container locations across Sri Lanka
            </p>
            <div className="relative w-full h-[400px] border border-gray-200 rounded-md overflow-hidden">
              {containers.map((container) => (
                <div
                  key={container.id}
                  className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:z-10"
                  style={{
                    left: `${container.location.lng}%`,
                    top: `${container.location.lat}%`,
                  }}
                  onClick={() => onSelectContainer(container)}
                >
                  <MapPin
                    className={`h-8 w-8 ${
                      container.status === "Available"
                        ? "text-green-500"
                        : container.status === "In Transit"
                          ? "text-yellow-500"
                          : "text-red-500"
                    }`}
                  />
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-black/75 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {container.id}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Click on a container marker to view details</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
