import { MobileNav } from "@/components/mobile-nav"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <MobileNav />
          <h1 className="text-2xl font-bold tracking-tight">Transporter Dashboard</h1>
        </div>
      </div>
    </header>
  )
}

