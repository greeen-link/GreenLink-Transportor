import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Thermometer, Droplet, Wind } from "lucide-react"

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

interface ContainerListProps {
  containers: Container[]
  selectedContainer: Container | null
  onSelectContainer: (container: Container) => void
}

export function ContainerList({ containers, selectedContainer, onSelectContainer }: ContainerListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Container List</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          <div className="space-y-4">
            {containers.map((container) => (
              <div
                key={container.id}
                className={`p-4 rounded-lg cursor-pointer transition-colors ${
                  selectedContainer?.id === container.id ? "bg-muted" : "hover:bg-muted/50"
                }`}
                onClick={() => onSelectContainer(container)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{container.id}</h3>
                  <Badge
                    variant={
                      container.status === "Available"
                        ? "success"
                        : container.status === "In Transit"
                          ? "default"
                          : "destructive"
                    }
                  >
                    {container.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{container.transporter}</p>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="flex items-center">
                    <Thermometer className="mr-1 h-4 w-4" />
                    {container.temperature}°C
                  </div>
                  <div className="flex items-center">
                    <Droplet className="mr-1 h-4 w-4" />
                    {container.humidity}%
                  </div>
                  <div className="flex items-center">
                    <Wind className="mr-1 h-4 w-4" />
                    {container.ventilation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

