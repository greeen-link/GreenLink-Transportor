import { cn } from "@/lib/utils"
import * as React from "react"
import { type VariantProps, cva } from "class-variance-authority"

const sidebarMenuButtonVariants = cva(
  {
    base: "flex items-center justify-between p-2 text-sm font-medium transition-colors hover:bg-gray-100",
    variants: {
      variant: {
        default: "text-gray-900",
        active: "text-blue-600 font-semibold",
      },
    },
  },
  {
    compoundVariants: [
      {
        variant: "active",
        className: "bg-gray-100",
      },
    ],
  },
)

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button"> & VariantProps<typeof sidebarMenuButtonVariants>
>(({ className, variant = "default", ...props }, ref) => (
  <button ref={ref} className={cn(sidebarMenuButtonVariants({ variant }), className)} {...props} />
))

SidebarMenuButton.displayName = "SidebarMenuButton"

const Sidebar = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex h-screen w-64 flex-col bg-white border-r", className)} {...props} />
))

Sidebar.displayName = "Sidebar"

const SidebarMenu = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(({ className, ...props }, ref) => (
  <ul ref={ref} className={cn("space-y-1", className)} {...props} />
))

SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("px-2", className)} {...props} />
))

SidebarMenuItem.displayName = "SidebarMenuItem"

export { Sidebar, SidebarMenu, SidebarMenuItem, SidebarMenuButton }

