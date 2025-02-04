"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Thermometer, Droplet, Wind, MapPin, X } from "lucide-react"

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
        <div className="mt-4 h-[200px] bg-muted rounded-md flex items-center justify-center">
          Map Widget Placeholder
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

