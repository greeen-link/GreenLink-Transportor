"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { LayoutDashboard, Map, Bell, UserCircle, Box } from "lucide-react"
import type React from "react" // Added import for React

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Real-Time Tracking",
    href: "/real-time-tracking",
    icon: Map,
  },
  {
    title: "Container Management",
    href: "/container-management",
    icon: Box,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: UserCircle,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton asChild isActive={pathname === item.href}>
            <Link href={item.href}>
              <item.icon className="mr-2 h-4 w-4" />
              {item.title}
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}

