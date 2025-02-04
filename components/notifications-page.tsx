"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NotificationList } from "@/components/notification-list"
import { NotificationDetailsPanel } from "@/components/notification-details-panel"
import { AlertTriangle, Bell, CheckCircle, Info, Search } from "lucide-react"

// Sample data (replace with actual data in a real application)
const notifications = [
  {
    id: 1,
    containerId: "CONT001",
    type: "critical",
    message: "Temperature exceeded threshold in Container CONT001",
    timestamp: "2023-07-01T10:30:00Z",
  },
  {
    id: 2,
    containerId: "CONT002",
    type: "warning",
    message: "Humidity levels low in Container CONT002",
    timestamp: "2023-07-01T11:15:00Z",
  },
  {
    id: 3,
    containerId: "CONT003",
    type: "info",
    message: "Container CONT003 has arrived at the destination",
    timestamp: "2023-07-01T12:00:00Z",
  },
  // Add more sample notifications as needed
]

export function NotificationsPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [typeFilter, setTypeFilter] = React.useState("All")
  const [dateFilter, setDateFilter] = React.useState("All")
  const [selectedNotification, setSelectedNotification] = React.useState(null)

  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch =
      notification.containerId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = typeFilter === "All" || notification.type === typeFilter.toLowerCase()
    // Implement date filtering logic here
    return matchesSearch && matchesType
  })

  const notificationStats = {
    total: notifications.length,
    unread: notifications.length, // Assuming all are unread for this example
    critical: notifications.filter((n) => n.type === "critical").length,
    warning: notifications.filter((n) => n.type === "warning").length,
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0">Notifications & Alerts</h1>
        <div className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto">
            <CheckCircle className="mr-2 h-4 w-4" /> Mark All as Read
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-grow w-full sm:w-64">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search notifications"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 w-full"
          />
        </div>
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue placeholder="Filter by Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Critical">Critical</SelectItem>
            <SelectItem value="Warning">Warning</SelectItem>
            <SelectItem value="Info">Informational</SelectItem>
          </SelectContent>
        </Select>
        <Select value={dateFilter} onValueChange={setDateFilter}>
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue placeholder="Filter by Date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Today">Today</SelectItem>
            <SelectItem value="PastWeek">Past Week</SelectItem>
            <SelectItem value="Custom">Custom</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Alerts</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{notificationStats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unread Alerts</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{notificationStats.unread}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{notificationStats.critical}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Warnings</CardTitle>
            <Info className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{notificationStats.warning}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Notification List</CardTitle>
          </CardHeader>
          <CardContent>
            <NotificationList notifications={filteredNotifications} onSelectNotification={setSelectedNotification} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Notification Details</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedNotification ? (
              <NotificationDetailsPanel notification={selectedNotification} />
            ) : (
              <p className="text-muted-foreground">Select a notification to view details</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

