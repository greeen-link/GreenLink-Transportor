"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"
import { DashboardNav } from "@/components/dashboard-nav"
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MobileNav } from "@/components/mobile-nav"

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardShell({ children, className, ...props }: DashboardShellProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader className="border-b px-6 py-4">
            <h1 className="text-2xl font-bold tracking-tight">Transporter Dashboard</h1>
          </SidebarHeader>
          <SidebarContent>
            <ScrollArea className="h-[calc(100vh-5rem)]">
              <DashboardNav />
            </ScrollArea>
          </SidebarContent>
        </Sidebar>
        <div className="flex-1">
          <header className="sticky top-0 z-40 border-b bg-background">
            <div className="container flex h-16 items-center justify-between py-4">
              <div className="flex items-center gap-2">
                <SidebarTrigger />
                <MobileNav />
              </div>
            </div>
          </header>
          <main className={cn("container py-6", className)} {...props}>
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

