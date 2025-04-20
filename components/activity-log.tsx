"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const activityData = [
  { date: "2023-07-01 14:30", action: "Profile Updated", device: "MacBook Pro", location: "New York, USA" },
  { date: "2023-06-30 09:15", action: "Password Changed", device: "iPhone 12", location: "Los Angeles, USA" },
  { date: "2023-06-29 11:45", action: "New Container Assigned", device: "Windows PC", location: "Chicago, USA" },
  { date: "2023-06-28 16:20", action: "Logged In", device: "Android Phone", location: "Miami, USA" },
]

export function ActivityLog() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Log & Recent Actions</CardTitle>
        <CardDescription>Track your recent account activities and actions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by activity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Activities</SelectItem>
              <SelectItem value="profile">Profile Updates</SelectItem>
              <SelectItem value="security">Security Changes</SelectItem>
              <SelectItem value="container">Container Assignments</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date & Time</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Device</TableHead>
              <TableHead>Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activityData.map((activity, index) => (
              <TableRow key={index}>
                <TableCell>{activity.date}</TableCell>
                <TableCell>
                  <Badge variant="outline">{activity.action}</Badge>
                </TableCell>
                <TableCell>{activity.device}</TableCell>
                <TableCell>{activity.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
