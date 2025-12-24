"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@/lib/user-context"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { HeartPulseIcon } from "lucide-react"

interface UserInfoDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  destinationPath: string
}

export function UserInfoDialog({ open, onOpenChange, destinationPath }: UserInfoDialogProps) {
  const router = useRouter()
  const { setUser } = useUser()
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [errors, setErrors] = React.useState<{ name?: string; email?: string }>({})

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newErrors: { name?: string; email?: string } = {}
    
    if (!name.trim()) {
      newErrors.name = "Name is required"
    }
    
    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email"
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setUser({ name: name.trim(), email: email.trim() })
    onOpenChange(false)
    router.push(destinationPath)
  }

  const handleCancel = () => {
    setName("")
    setEmail("")
    setErrors({})
    onOpenChange(false)
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <div className="mx-auto mb-2 size-12 rounded-full bg-primary/10 flex items-center justify-center">
            <HeartPulseIcon className="size-6 text-primary" />
          </div>
          <AlertDialogTitle className="text-center">Welcome to MyHealthGPT</AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            Please enter your details to personalize your wellness experience.
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }))
              }}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
              }}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>
          
          <AlertDialogFooter className="pt-2">
            <AlertDialogCancel type="button" onClick={handleCancel}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction type="submit">
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}

