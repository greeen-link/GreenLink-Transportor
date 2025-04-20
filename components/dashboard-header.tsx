"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Settings, Box, LayoutDashboard, Map, UserCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const navItems = [
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

export function DashboardHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-[#1a1a1a] text-white">
      <div className="container flex h-16 items-center">
        <div className="mr-8 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Box className="h-6 w-6 text-green-500" />
            <span className="font-bold text-xl">GreenLink</span>
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 items-center space-x-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex h-10 items-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  isActive ? "bg-[#333333] text-white" : "text-white/70 hover:bg-[#333333] hover:text-white",
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            )
          })}
        </nav>

        <div className="ml-auto flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative text-white/70 hover:text-white">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-auto">
                <DropdownMenuItem className="flex flex-col items-start p-3">
                  <div className="font-medium">Temperature Alert</div>
                  <div className="text-sm text-muted-foreground">Temperature exceeded in Container CONT001</div>
                  <div className="mt-1 text-xs text-muted-foreground">2 hours ago</div>
                  <div className="mt-2 w-full">
                    <Link
                      href="/real-time-tracking"
                      className="flex items-center text-xs text-blue-500 hover:underline"
                    >
                      <Map className="mr-1 h-3 w-3" /> View on map
                    </Link>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex flex-col items-start p-3">
                  <div className="font-medium">Maintenance Required</div>
                  <div className="text-sm text-muted-foreground">Container CONT003 needs maintenance</div>
                  <div className="mt-1 text-xs text-muted-foreground">5 hours ago</div>
                  <div className="mt-2 w-full">
                    <Link
                      href="/real-time-tracking"
                      className="flex items-center text-xs text-blue-500 hover:underline"
                    >
                      <Map className="mr-1 h-3 w-3" /> View on map
                    </Link>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex flex-col items-start p-3">
                  <div className="font-medium">Container Arrived</div>
                  <div className="text-sm text-muted-foreground">Container CONT002 arrived at destination</div>
                  <div className="mt-1 text-xs text-muted-foreground">Yesterday</div>
                  <div className="mt-2 w-full">
                    <Link
                      href="/real-time-tracking"
                      className="flex items-center text-xs text-blue-500 hover:underline"
                    >
                      <Map className="mr-1 h-3 w-3" /> View on map
                    </Link>
                  </div>
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="justify-center font-medium">
                <Link href="/notifications">View all notifications</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
                <Settings className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile">Account Security</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile">Notification Preferences</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <MobileNav className="md:hidden" />
        </div>
      </div>
    </header>
  )
}
