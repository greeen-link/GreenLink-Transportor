"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CreditCard, Download } from "lucide-react"

export function SubscriptionPaymentDetails() {
  const [autoRenewal, setAutoRenewal] = React.useState(true)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscription & Payment Details</CardTitle>
        <CardDescription>Manage your subscription and payment information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold">Current Plan: Premium</h4>
            <p className="text-sm text-muted-foreground">Your plan renews on Aug 1, 2023</p>
          </div>
          <Button>Upgrade</Button>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">Payment Method</h4>
          <div className="flex items-center space-x-2">
            <CreditCard className="h-5 w-5 text-muted-foreground" />
            <span>Visa ending in 1234</span>
            <Badge variant="outline">Primary</Badge>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Billing History</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Invoice</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Jul 1, 2023</TableCell>
                <TableCell>$99.00</TableCell>
                <TableCell>
                  <Badge variant="outline">Paid</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    PDF
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jun 1, 2023</TableCell>
                <TableCell>$99.00</TableCell>
                <TableCell>
                  <Badge variant="outline">Paid</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    PDF
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="font-semibold">Auto-Renewal</h4>
            <p className="text-sm text-muted-foreground">Automatically renew your subscription</p>
          </div>
          <Switch checked={autoRenewal} onCheckedChange={setAutoRenewal} />
        </div>
      </CardContent>
    </Card>
  )
}

