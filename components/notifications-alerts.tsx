"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle } from "lucide-react"

const initialAlerts = [
  {
    id: 1,
    type: "critical",
    message: "Temperature exceeded in Container VEG001",
    timestamp: "2023-07-01T10:30:00Z",
  },
  {
    id: 2,
    type: "warning",
    message: "Humidity levels low in Container VEG003",
    timestamp: "2023-07-01T11:15:00Z",
  },
  {
    id: 3,
    type: "info",
    message: "Maintenance due for Container VEG002",
    timestamp: "2023-07-01T12:00:00Z",
  },
]

export function NotificationsAlerts({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [alerts, setAlerts] = React.useState(initialAlerts)

  const handleResolve = (id: number) => {
    setAlerts(alerts.filter((alert) => alert.id !== id))
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Notifications & Alerts</CardTitle>
        <CardDescription>Real-time updates and critical information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-start space-x-4">
              {alert.type === "critical" ? (
                <AlertTriangle className="h-5 w-5 mt-0.5 text-destructive" />
              ) : (
                <CheckCircle className="h-5 w-5 mt-0.5 text-muted-foreground" />
              )}
              <div className="flex-1 space-y-1">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium leading-none">{alert.message}</p>
                  <Badge variant={alert.type === "critical" ? "destructive" : "secondary"}>{alert.type}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{new Date(alert.timestamp).toLocaleString()}</p>
              </div>
              <Button size="sm" onClick={() => handleResolve(alert.id)}>
                Resolve
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
