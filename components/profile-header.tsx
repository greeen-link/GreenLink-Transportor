"use client"

import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Camera } from "lucide-react"

export function ProfileHeader() {
  const [avatarUrl, setAvatarUrl] = React.useState("/placeholder.svg")

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setAvatarUrl(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <Avatar className="h-24 w-24">
          <AvatarImage src={avatarUrl} alt="Profile picture" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 cursor-pointer">
          <div className="rounded-full bg-primary p-2 text-primary-foreground">
            <Camera className="h-4 w-4" />
          </div>
          <input id="avatar-upload" type="file" accept="image/*" className="hidden" onChange={handleAvatarUpload} />
        </label>
      </div>
      <div>
        <h2 className="text-2xl font-bold">John Doe</h2>
        <p className="text-muted-foreground">john.doe@example.com</p>
        <Badge className="mt-1">Verified Transporter</Badge>
      </div>
    </div>
  )
}

