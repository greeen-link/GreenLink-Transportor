import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, CheckCircle, Info, MapPin, Thermometer, Droplet, Wind, Map } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Notification {
  id: number
  containerId: string
  type: string
  message: string
  timestamp: string
}

interface NotificationDetailsPanelProps {
  notification: Notification
}

export function NotificationDetailsPanel({ notification }: NotificationDetailsPanelProps) {
  // In a real application, you would fetch this data based on the containerId
  const containerDetails = {
    temperature: 23.5,
    humidity: 65,
    ventilation: "Normal",
    location: "Los Angeles, CA",
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{notification.containerId}</h3>
          <p className="text-sm text-muted-foreground">{new Date(notification.timestamp).toLocaleString()}</p>
        </div>
        <Badge
          variant={
            notification.type === "critical" ? "destructive" : notification.type === "warning" ? "warning" : "default"
          }
        >
          {notification.type}
        </Badge>
      </div>

      <p className="text-sm">{notification.message}</p>

      <Card>
        <CardHeader>
          <CardTitle>Container Status</CardTitle>
          <CardDescription>Current environmental conditions</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Thermometer className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Temperature:</span>
            <span className="text-sm">{containerDetails.temperature}°C</span>
          </div>
          <div className="flex items-center space-x-2">
            <Droplet className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Humidity:</span>
            <span className="text-sm">{containerDetails.humidity}%</span>
          </div>
          <div className="flex items-center space-x-2">
            <Wind className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Ventilation:</span>
            <span className="text-sm">{containerDetails.ventilation}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Location:</span>
            <span className="text-sm">{containerDetails.location}</span>
          </div>
        </CardContent>
      </Card>

      <div className="h-[200px] bg-muted rounded-md flex items-center justify-center relative overflow-hidden">
        <div className="relative w-full h-full">
          <Image src="/sri-lanka-map.png" alt="Sri Lanka Map" layout="fill" objectFit="contain" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href="/real-time-tracking"
              className="flex flex-col items-center text-blue-500 hover:underline z-10 bg-white/80 p-2 rounded"
            >
              <Map className="h-8 w-8 mb-2" />
              <span>View on Sri Lanka Map</span>
            </Link>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Past Alerts</CardTitle>
          <CardDescription>Recent alerts for this container</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Info className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Humidity levels normalized - 2023-06-30</span>
            </li>
            <li className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <span className="text-sm">Temperature spike detected - 2023-06-29</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Routine maintenance completed - 2023-06-25</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">Ignore Alert</Button>
        <Button variant="outline">Assign for Maintenance</Button>
        <Button>Resolve Alert</Button>
      </div>
    </div>
  )
}
