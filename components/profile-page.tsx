"use client"
import { UserInformationSection } from "@/components/user-information-section"
import { SecurityAccountSettings } from "@/components/security-account-settings"
import { SubscriptionPaymentDetails } from "@/components/subscription-payment-details"
import { NotificationPreferences } from "@/components/notification-preferences"
import { ActivityLog } from "@/components/activity-log"
import { ProfileHeader } from "@/components/profile-header"

export function ProfilePage() {
  return (
    <div className="space-y-6">
      <ProfileHeader />
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <UserInformationSection />
        <SecurityAccountSettings />
      </div>
      <SubscriptionPaymentDetails />
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <NotificationPreferences />
        <ActivityLog />
      </div>
    </div>
  )
}

