"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ContainerDetailModal } from "@/components/container-detail-modal"
import { Plus, Search, Box, Truck, Wrench, MapPin, Thermometer, Droplet, Wind } from "lucide-react"
import { InteractiveMap } from "@/components/interactive-map"

// Sample data (replace with actual data in a real application)
const containers = [
  {
    id: "CONT001",
    status: "Available",
    transporter: "Unassigned",
    location: { lat: 40, lng: 45 }, // Colombo area
    locationName: "Warehouse A, Colombo",
    lastMaintenance: "2023-06-15",
    temperature: 22,
    humidity: 45,
    ventilation: "Normal",
  },
  {
    id: "CONT002",
    status: "In Transit",
    transporter: "John Doe Logistics",
    location: { lat: 60, lng: 70 }, // Jaffna area
    locationName: "Highway A9, Jaffna",
    lastMaintenance: "2023-05-20",
    temperature: 24,
    humidity: 50,
    ventilation: "Active",
  },
  {
    id: "CONT003",
    status: "Maintenance Required",
    transporter: "Smith Trucking",
    location: { lat: 75, lng: 30 }, // Trincomalee area
    locationName: "Depot B, Trincomalee",
    lastMaintenance: "2023-03-10",
    temperature: 26,
    humidity: 60,
    ventilation: "Faulty",
  },
  {
    id: "CONT004",
    status: "In Transit",
    transporter: "Fast Freight Ltd",
    location: { lat: 85, lng: 55 }, // Batticaloa area
    locationName: "Port Road, Batticaloa",
    lastMaintenance: "2023-04-05",
    temperature: 23,
    humidity: 55,
    ventilation: "Normal",
  },
]

export function ContainerManagementPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [statusFilter, setStatusFilter] = React.useState("All")
  const [selectedContainer, setSelectedContainer] = React.useState(null)

  const filteredContainers = containers.filter((container) => {
    const matchesSearch =
      container.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      container.transporter.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "All" || container.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0">Container Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Container
        </Button>
      </header>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by Container ID, Status, or Transporter Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Available">Available</SelectItem>
            <SelectItem value="In Transit">In Transit</SelectItem>
            <SelectItem value="Maintenance Required">Maintenance Required</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 mb-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Containers</CardTitle>
            <Box className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{containers.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available</CardTitle>
            <Box className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{containers.filter((c) => c.status === "Available").length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Transit</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{containers.filter((c) => c.status === "In Transit").length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Under Maintenance</CardTitle>
            <Wrench className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {containers.filter((c) => c.status === "Maintenance Required").length}
            </div>
          </CardContent>
        </Card>
      </div>

      <InteractiveMap containers={filteredContainers} onSelectContainer={setSelectedContainer} />

      <Card>
        <CardHeader>
          <CardTitle>Container List</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Container ID</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Transporter</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Last Maintenance</TableHead>
                  <TableHead>Temperature</TableHead>
                  <TableHead>Humidity</TableHead>
                  <TableHead>Ventilation</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredContainers.map((container) => (
                  <TableRow key={container.id} className="cursor-pointer hover:bg-muted/50">
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
                    <TableCell>{container.transporter}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{container.locationName}</span>
                      </div>
                    </TableCell>
                    <TableCell>{container.lastMaintenance}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Thermometer className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{container.temperature}°C</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Droplet className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{container.humidity}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Wind className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{container.ventilation}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedContainer(container)}>
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[625px]">
                          <DialogHeader>
                            <DialogTitle>Container Details</DialogTitle>
                          </DialogHeader>
                          {selectedContainer && <ContainerDetailModal container={selectedContainer} />}
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}
