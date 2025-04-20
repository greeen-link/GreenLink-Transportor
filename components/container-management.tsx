"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ContainerDetailsPanel } from "./container-details-panel"
import { ChevronDown, Filter } from "lucide-react"

// Sample data (replace with actual data in a real application)
const containers = [
  {
    id: "VEG001",
    status: "In Transit",
    transporter: "John Doe",
    location: "Los Angeles, CA",
    lastMaintenance: "2023-05-15",
    health: "Good",
  },
  {
    id: "VEG002",
    status: "Available",
    transporter: "",
    location: "Chicago, IL",
    lastMaintenance: "2023-06-01",
    health: "Good",
  },
  {
    id: "VEG003",
    status: "Maintenance Required",
    transporter: "Jane Smith",
    location: "New York, NY",
    lastMaintenance: "2023-04-30",
    health: "Critical",
  },
  {
    id: "VEG004",
    status: "In Transit",
    transporter: "Bob Johnson",
    location: "Miami, FL",
    lastMaintenance: "2023-05-20",
    health: "Warning",
  },
]

export function ContainerManagement({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [filterValue, setFilterValue] = React.useState("")
  const [statusFilter, setStatusFilter] = React.useState<string[]>([])
  const [selectedContainers, setSelectedContainers] = React.useState<string[]>([])
  const [selectedContainer, setSelectedContainer] = React.useState<string | null>(null)

  const filteredContainers = containers.filter((container) => {
    const matchesFilter =
      container.id.toLowerCase().includes(filterValue.toLowerCase()) ||
      container.transporter.toLowerCase().includes(filterValue.toLowerCase()) ||
      container.location.toLowerCase().includes(filterValue.toLowerCase())
    const matchesStatus = statusFilter.length === 0 || statusFilter.includes(container.status)
    return matchesFilter && matchesStatus
  })

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedContainers(filteredContainers.map((c) => c.id))
    } else {
      setSelectedContainers([])
    }
  }

  const handleSelectContainer = (containerId: string, checked: boolean) => {
    if (checked) {
      setSelectedContainers([...selectedContainers, containerId])
    } else {
      setSelectedContainers(selectedContainers.filter((id) => id !== containerId))
    }
  }

  const handleBulkAction = (action: string) => {
    console.log(`Performing ${action} on containers:`, selectedContainers)
    // Implement bulk action logic here
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Container Management</CardTitle>
        <CardDescription>Manage and monitor your smart containers</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <Input
            placeholder="Search containers..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            className="max-w-sm"
          />
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Filter <Filter className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {["In Transit", "Available", "Maintenance Required"].map((status) => (
                  <DropdownMenuCheckboxItem
                    key={status}
                    checked={statusFilter.includes(status)}
                    onCheckedChange={(checked) =>
                      setStatusFilter(checked ? [...statusFilter, status] : statusFilter.filter((s) => s !== status))
                    }
                  >
                    {status}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" disabled={selectedContainers.length === 0}>
                  Bulk Actions <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => handleBulkAction("assign")}>Assign Transporter</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => handleBulkAction("maintenance")}>
                  Request Maintenance
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => handleBulkAction("available")}>Mark as Available</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40px]">
                  <Checkbox
                    checked={selectedContainers.length === filteredContainers.length}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>Container ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Transporter</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Last Maintenance</TableHead>
                <TableHead>Health</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContainers.map((container) => (
                <TableRow
                  key={container.id}
                  className="cursor-pointer"
                  onClick={() => setSelectedContainer(container.id)}
                >
                  <TableCell>
                    <Checkbox
                      checked={selectedContainers.includes(container.id)}
                      onCheckedChange={(checked) => handleSelectContainer(container.id, checked)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </TableCell>
                  <TableCell>{container.id}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        container.status === "In Transit"
                          ? "default"
                          : container.status === "Available"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {container.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{container.transporter || "N/A"}</TableCell>
                  <TableCell>{container.location}</TableCell>
                  <TableCell>{container.lastMaintenance}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        container.health === "Good"
                          ? "success"
                          : container.health === "Warning"
                            ? "warning"
                            : "destructive"
                      }
                    >
                      {container.health}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {selectedContainer && (
          <ContainerDetailsPanel containerId={selectedContainer} onClose={() => setSelectedContainer(null)} />
        )}
      </CardContent>
    </Card>
  )
}
