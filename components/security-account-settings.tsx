"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function SecurityAccountSettings() {
  const [twoFAEnabled, setTwoFAEnabled] = React.useState(false)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Security & Account Settings</CardTitle>
        <CardDescription>Manage your account security and active sessions</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h4 className="font-semibold">Change Password</h4>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
          </div>
          <Button>Update Password</Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="font-semibold">Two-Factor Authentication (2FA)</h4>
            <p className="text-sm text-muted-foreground">Enhance your account security with 2FA</p>
          </div>
          <Switch checked={twoFAEnabled} onCheckedChange={setTwoFAEnabled} />
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Linked Devices & Active Sessions</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Device</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>MacBook Pro</TableCell>
                <TableCell>New York, USA</TableCell>
                <TableCell>2 minutes ago</TableCell>
                <TableCell>
                  <Badge>Current</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>iPhone 12</TableCell>
                <TableCell>Los Angeles, USA</TableCell>
                <TableCell>1 hour ago</TableCell>
                <TableCell>
                  <Badge variant="outline">Active</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button variant="outline" className="mt-4">
            Log out all other devices
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
