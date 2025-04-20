import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Box, Truck, AlertTriangle, Route } from "lucide-react"

interface Container {
  id: string
  status: string
  location: { lat: number; lng: number }
  temperature: number
  humidity: number
  ventilation: string
  transporter: string
  lastUpdate: string
}

interface SummaryPanelProps {
  containers: Container[]
}

export function SummaryPanel({ containers }: SummaryPanelProps) {
  const totalContainers = containers.length
  const activeContainers = containers.filter((c) => c.status === "In Transit").length
  const criticalContainers = containers.filter((c) => c.status === "Maintenance Required" || c.temperature > 25).length
  const averageDeliveryTime = "2.5 days" // This would be calculated based on real data

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Containers</CardTitle>
          <Box className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalContainers}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Containers</CardTitle>
          <Truck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{activeContainers}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Critical Containers</CardTitle>
          <AlertTriangle className="h-4 w-4 text-destructive" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{criticalContainers}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Delivery Time</CardTitle>
          <Route className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{averageDeliveryTime}</div>
        </CardContent>
      </Card>
    </div>
  )
}
