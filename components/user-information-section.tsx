"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function UserInformationSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Information</CardTitle>
        <CardDescription>Manage your personal and business details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="full-name">Full Name</Label>
            <Input id="full-name" defaultValue="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Input id="role" value="Transporter" disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" defaultValue="john.doe@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input id="company" defaultValue="Doe Logistics Inc." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="business-reg">Business Registration Number</Label>
            <Input id="business-reg" defaultValue="BRN123456789" />
          </div>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">Assigned Containers / Vehicles</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">
              CONT001 <span className="ml-1 text-green-500">●</span>
            </Badge>
            <Badge variant="outline">
              CONT002 <span className="ml-1 text-yellow-500">●</span>
            </Badge>
            <Badge variant="outline">
              CONT003 <span className="ml-1 text-green-500">●</span>
            </Badge>
            <Badge variant="outline">
              TRUCK001 <span className="ml-1 text-green-500">●</span>
            </Badge>
          </div>
        </div>
        <Button>Save Changes</Button>
      </CardContent>
    </Card>
  )
}
