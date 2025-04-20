"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { InteractiveMap } from "@/components/interactive-map"
import { ContainerList } from "@/components/container-list"
import { AlertsNotifications } from "@/components/alerts-notifications"
import { SummaryPanel } from "@/components/summary-panel"
import { Plus, RefreshCw, Search } from "lucide-react"

// Sample data (replace with actual data in a real application)
const containers = [
  {
    id: "CONT001",
    status: "In Transit",
    location: { lat: 40, lng: 45 }, // Roughly Colombo
    locationName: "Colombo Port",
    temperature: 22,
    humidity: 45,
    ventilation: "Normal",
    transporter: "ABC Logistics",
    lastUpdate: "2023-07-01T15:30:00Z",
    lastMaintenance: "2023-06-15",
  },
  {
    id: "CONT002",
    status: "Available",
    location: { lat: 60, lng: 70 }, // Roughly Jaffna
    locationName: "Jaffna Warehouse",
    temperature: 20,
    humidity: 50,
    ventilation: "Normal",
    transporter: "XYZ Transport",
    lastUpdate: "2023-07-01T16:00:00Z",
    lastMaintenance: "2023-05-20",
  },
  {
    id: "CONT003",
    status: "Maintenance Required",
    location: { lat: 75, lng: 30 }, // Roughly Trincomalee
    locationName: "Trincomalee Depot",
    temperature: 28,
    humidity: 60,
    ventilation: "Faulty",
    transporter: "123 Shipping",
    lastUpdate: "2023-07-01T14:45:00Z",
    lastMaintenance: "2023-03-10",
  },
  {
    id: "CONT004",
    status: "In Transit",
    location: { lat: 85, lng: 55 }, // Roughly Batticaloa
    locationName: "Batticaloa Highway",
    temperature: 24,
    humidity: 55,
    ventilation: "Normal",
    transporter: "Fast Freight Ltd",
    lastUpdate: "2023-07-01T17:15:00Z",
    lastMaintenance: "2023-04-05",
  },
]

export function RealTimeTrackingPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [statusFilter, setStatusFilter] = React.useState("All")
  const [timeRange, setTimeRange] = React.useState("Last Hour")
  const [selectedContainer, setSelectedContainer] = React.useState(null)

  const filteredContainers = containers.filter((container) => {
    const matchesSearch =
      container.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      container.transporter.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "All" || container.status === statusFilter
    // Implement time range filtering logic here
    return matchesSearch && matchesStatus
  })

  const handleRefresh = () => {
    // Implement refresh logic here
    console.log("Refreshing data...")
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0">Real-Time Tracking</h1>
        <div className="flex space-x-2">
          <Button onClick={handleRefresh}>
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh Data
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add New Container
          </Button>
        </div>
      </header>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by Container ID, Transporter Name, or Location"
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
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Time Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Last Hour">Last Hour</SelectItem>
            <SelectItem value="Today">Today</SelectItem>
            <SelectItem value="Custom">Custom</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <SummaryPanel containers={containers} />

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3">
          <InteractiveMap containers={filteredContainers} onSelectContainer={setSelectedContainer} />
        </div>
        <div className="lg:w-1/3 space-y-6">
          <ContainerList
            containers={filteredContainers}
            selectedContainer={selectedContainer}
            onSelectContainer={setSelectedContainer}
          />
          <AlertsNotifications containers={filteredContainers} />
        </div>
      </div>
    </div>
  )
}
