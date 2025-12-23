"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { buttonVariants } from "@/components/ui/button"
import { HeartPulseIcon, LayoutDashboardIcon, MessageCircleIcon, BookOpenIcon, SparklesIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboardIcon },
  { href: "/checkin", label: "Check-in", icon: MessageCircleIcon },
  { href: "/coaching", label: "Coaching", icon: SparklesIcon },
  { href: "/resources", label: "Resources", icon: BookOpenIcon },
]

export function Navigation() {
  const pathname = usePathname()
  
  // Don't show nav on landing or onboarding
  if (pathname === "/" || pathname === "/onboarding") {
    return null
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4 mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <HeartPulseIcon className="size-6 text-primary" />
          <span className="font-semibold text-lg">MyHealthGPT</span>
        </Link>
        
        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  buttonVariants({ variant: isActive ? "secondary" : "ghost", size: "sm" }),
                  "gap-2",
                  isActive && "bg-primary/10 text-primary"
                )}
              >
                <item.icon className="size-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            )
          })}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

