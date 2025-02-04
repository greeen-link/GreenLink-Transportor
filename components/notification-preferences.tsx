"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function NotificationPreferences() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>Manage how you receive notifications</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h4 className="font-semibold">Notification Types</h4>
          <div className="flex items-center justify-between">
            <Label htmlFor="critical-alerts" className="flex flex-col space-y-1">
              <span>Critical Alerts</span>
              <span className="font-normal text-sm text-muted-foreground">Temperature exceeding limits, etc.</span>
            </Label>
            <Switch id="critical-alerts" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="system-updates" className="flex flex-col space-y-1">
              <span>System Updates</span>
              <span className="font-normal text-sm text-muted-foreground">New features, maintenance notifications</span>
            </Label>
            <Switch id="system-updates" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="transaction-alerts" className="flex flex-col space-y-1">
              <span>Transaction Alerts</span>
              <span className="font-normal text-sm text-muted-foreground">Payment confirmations, renewals</span>
            </Label>
            <Switch id="transaction-alerts" defaultChecked />
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold">Notification Channels</h4>
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications">Email Notifications</Label>
            <Switch id="email-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sms-notifications">SMS Notifications</Label>
            <Switch id="sms-notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="push-notifications">Push Notifications</Label>
            <Switch id="push-notifications" defaultChecked />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

