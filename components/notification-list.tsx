import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AlertTriangle, CheckCircle, Info } from "lucide-react"

interface Notification {
  id: number
  containerId: string
  type: string
  message: string
  timestamp: string
}

interface NotificationListProps {
  notifications: Notification[]
  onSelectNotification: (notification: Notification) => void
}

export function NotificationList({ notifications, onSelectNotification }: NotificationListProps) {
  return (
    <ScrollArea className="h-[600px]">
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start space-x-4 p-4 rounded-lg bg-card hover:bg-accent cursor-pointer transition-colors"
            onClick={() => onSelectNotification(notification)}
          >
            {notification.type === "critical" ? (
              <AlertTriangle className="h-5 w-5 mt-0.5 text-destructive" />
            ) : notification.type === "warning" ? (
              <Info className="h-5 w-5 mt-0.5 text-warning" />
            ) : (
              <CheckCircle className="h-5 w-5 mt-0.5 text-muted-foreground" />
            )}
            <div className="flex-1 space-y-1">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium leading-none">{notification.containerId}</p>
                <Badge
                  variant={
                    notification.type === "critical"
                      ? "destructive"
                      : notification.type === "warning"
                        ? "warning"
                        : "default"
                  }
                >
                  {notification.type}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{notification.message}</p>
              <p className="text-xs text-muted-foreground">{new Date(notification.timestamp).toLocaleString()}</p>
            </div>
            <div className="flex flex-col space-y-2">
              <Button size="sm" variant="outline">
                Resolve
              </Button>
              <Button size="sm" variant="outline">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

