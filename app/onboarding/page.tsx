"use client"

import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { HeartPulseIcon, ArrowLeftIcon, SparklesIcon } from "lucide-react"
import { PERSPECTIVE_CONFIG, getIframeSrc } from "@/lib/perspective"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { useUser } from "@/lib/user-context"

export default function OnboardingPage() {
  const { user } = useUser()
  const iframeSrc = getIframeSrc(PERSPECTIVE_CONFIG.onboarding.id, user)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10">
      {/* Simple Header */}
      <header className="container max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <HeartPulseIcon className="size-6 text-primary" />
            <span className="font-semibold text-lg">MyHealthGPT</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/" className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}>
              <ArrowLeftIcon className="size-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-screen-xl mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Intro Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <SparklesIcon className="size-4" />
              <span>Personalized Onboarding</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Let&apos;s Get to Know You{user?.name ? `, ${user.name}` : ""}
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Have a conversation with our AI to help us understand your work situation, 
              stress levels, and wellness goals. This helps us personalize your experience.
            </p>
          </div>

          {/* Perspective Fullpage Embed */}
          <div className="bg-card rounded-2xl shadow-lg border overflow-hidden">
            <iframe 
              src={iframeSrc}
              className="w-full border-0"
              style={{ height: "70vh", minHeight: "500px" }}
              allow="microphone; camera"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            />
          </div>

          <div className="mt-6 text-center">
            <Link href="/dashboard" className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}>
              Skip to Dashboard →
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
