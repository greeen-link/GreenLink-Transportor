import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AlertTriangle, CheckCircle } from "lucide-react"

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

interface AlertsNotificationsProps {
  containers: Container[]
}

export function AlertsNotifications({ containers }: AlertsNotificationsProps) {
  const alerts = containers.filter(
    (container) => container.status === "Maintenance Required" || container.temperature > 25,
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Alerts & Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px]">
          <div className="space-y-4">
            {alerts.map((container) => (
              <div key={container.id} className="flex items-start space-x-4">
                <AlertTriangle className="h-5 w-5 mt-0.5 text-destructive" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {container.status === "Maintenance Required"
                      ? `Maintenance required for ${container.id}`
                      : `High temperature in ${container.id}`}
                  </p>
                  <p className="text-sm text-muted-foreground">Current temperature: {container.temperature}°C</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <Button size="sm" variant="outline">
                    Resolve
                  </Button>
                  <Button size="sm" variant="outline">
                    Notify
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

