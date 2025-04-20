"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Thermometer, Droplet, Wind, MapPin, X, Map } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ContainerDetailsProps {
  containerId: string
  onClose: () => void
}

export function ContainerDetailsPanel({ containerId, onClose }: ContainerDetailsProps) {
  // In a real application, you would fetch this data based on the containerId
  const containerDetails = {
    id: containerId,
    temperature: 23.5,
    humidity: 65,
    ventilation: "Normal",
    location: "Los Angeles, CA",
    lastUpdate: "2023-07-01T15:30:00Z",
  }

  return (
    <Card className="mt-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Container Details: {containerDetails.id}</CardTitle>
          <CardDescription>Current status and environmental conditions</CardDescription>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Thermometer className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Temperature:</span>
              <span>{containerDetails.temperature}°C</span>
            </div>
            <div className="flex items-center space-x-2">
              <Droplet className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Humidity:</span>
              <span>{containerDetails.humidity}%</span>
            </div>
            <div className="flex items-center space-x-2">
              <Wind className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Ventilation:</span>
              <span>{containerDetails.ventilation}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Location:</span>
              <span>{containerDetails.location}</span>
            </div>
            <div>
              <span className="font-medium">Last Update:</span>
              <span className="ml-2">{new Date(containerDetails.lastUpdate).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <Link
            href="/real-time-tracking"
            className="flex items-center justify-center w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <Map className="mr-2 h-4 w-4" /> View on Sri Lanka Map
          </Link>
        </div>

        <div className="mt-4 h-[200px] bg-muted rounded-md flex items-center justify-center relative overflow-hidden">
          <div className="relative w-full h-full">
            <Image src="/sri-lanka-map.png" alt="Sri Lanka Map" layout="fill" objectFit="contain" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                href="/real-time-tracking"
                className="flex flex-col items-center text-blue-500 hover:underline z-10 bg-white/80 p-2 rounded"
              >
                <Map className="h-8 w-8 mb-2" />
                <span>Click to view on Sri Lanka Map</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-end space-x-2">
          <Button variant="outline">Assign Transporter</Button>
          <Button variant="outline">Request Maintenance</Button>
          <Button>Mark as Available</Button>
        </div>
      </CardContent>
    </Card>
  )
}
