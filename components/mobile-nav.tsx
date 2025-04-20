"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LayoutDashboard, Map, Box, Bell, UserCircle, Menu } from "lucide-react"

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

interface MobileNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function MobileNav({ className }: MobileNavProps) {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <div className={className}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-white"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-[#1a1a1a] text-white pr-0">
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
            <div className="flex flex-col space-y-3">
              {navItems.map(
                (item) =>
                  item.href && (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center text-sm font-medium text-white/70",
                        pathname === item.href && "text-white bg-[#333333] rounded-md p-2",
                        pathname !== item.href && "hover:text-white hover:bg-[#333333] rounded-md p-2",
                      )}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </Link>
                  ),
              )}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  )
}
