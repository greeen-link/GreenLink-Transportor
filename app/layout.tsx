import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { DashboardHeader } from "@/components/dashboard-header"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Transporter Dashboard",
  description: "IoT and blockchain-based smart logistics system",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <div className="flex min-h-screen flex-col">
          <DashboardHeader />
          <main className="flex-1 container py-6">{children}</main>
        </div>
      </body>
    </html>
  )
}
