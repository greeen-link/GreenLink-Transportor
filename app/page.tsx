import { DashboardOverview } from "@/components/dashboard-overview"
import { RealTimeTracking } from "@/components/real-time-tracking"
import { ContainerManagement } from "@/components/container-management"
import { NotificationsAlerts } from "@/components/notifications-alerts"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <DashboardOverview className="md:col-span-2" />
        <RealTimeTracking />
        <NotificationsAlerts />
        <ContainerManagement className="md:col-span-2" />
      </div>
    </div>
  )
}

