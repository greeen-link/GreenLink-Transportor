import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Thermometer, Droplet, Wind } from "lucide-react"

interface ContainerDetailModalProps {
  container: {
    id: string
    status: string
    transporter: string
    location: string
    lastMaintenance: string
    temperature: number
    humidity: number
    ventilation: string
  }
}

export function ContainerDetailModal({ container }: ContainerDetailModalProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{container.id}</h3>
          <p className="text-sm text-muted-foreground">{container.transporter}</p>
        </div>
        <Badge
          variant={
            container.status === "Available" ? "success" : container.status === "In Transit" ? "default" : "destructive"
          }
        >
          {container.status}
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
              {container.location}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Last Maintenance</CardTitle>
          </CardHeader>
          <CardContent>{container.lastMaintenance}</CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Temperature</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Thermometer className="mr-2 h-4 w-4 text-muted-foreground" />
              {container.temperature}°C
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Humidity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Droplet className="mr-2 h-4 w-4 text-muted-foreground" />
              {container.humidity}%
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Ventilation Status</CardTitle>
          <CardDescription>Current air circulation information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <Wind className="mr-2 h-4 w-4 text-muted-foreground" />
            {container.ventilation}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Maintenance Log</CardTitle>
          <CardDescription>Recent maintenance activities</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4 space-y-2">
            <li>Routine check - 2023-06-15</li>
            <li>Sensor calibration - 2023-05-20</li>
            <li>Ventilation system repair - 2023-04-10</li>
          </ul>
        </CardContent>
      </Card>

      <div className="h-[200px] bg-muted rounded-lg flex items-center justify-center">Map Placeholder</div>

      <CardFooter className="flex justify-between">
        <Button variant="outline">Edit Details</Button>
        <Button variant="outline">Assign to Transporter</Button>
        <Button>Mark for Maintenance</Button>
      </CardFooter>
    </div>
  )
}

