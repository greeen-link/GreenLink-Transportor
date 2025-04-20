"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MapPin } from "lucide-react"

interface Container {
  id: string
  status: string
  location: { lat: number; lng: number }
  locationName: string
  temperature: number
  humidity: number
  ventilation: string
  transporter: string
  lastUpdate: string
  lastMaintenance: string
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
      <CardContent className="p-0 sm:p-6">
        <ScrollArea className="h-[400px]">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Container ID</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Location</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {containers.map((container) => (
                  <TableRow
                    key={container.id}
                    className={`cursor-pointer ${selectedContainer?.id === container.id ? "bg-muted" : "hover:bg-muted/50"}`}
                    onClick={() => onSelectContainer(container)}
                  >
                    <TableCell className="font-medium">{container.id}</TableCell>
                    <TableCell>
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
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{container.locationName}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
