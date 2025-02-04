"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Thermometer, Droplet, Wind } from "lucide-react"

export function RealTimeTracking({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className}>
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Real-Time Tracking</CardTitle>
          <CardDescription>Monitor active containers in transit</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] bg-muted rounded-md flex items-center justify-center">Map View Placeholder</div>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold">Container ID: VEG001</h4>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-1 h-4 w-4" />
                  Los Angeles, CA
                </div>
              </div>
              <Badge>In Transit</Badge>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center">
                <Thermometer className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">23°C</span>
              </div>
              <div className="flex items-center">
                <Droplet className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">65%</span>
              </div>
              <div className="flex items-center">
                <Wind className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Normal</span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">Time in transit: 2d 14h 23m</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

