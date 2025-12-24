"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartPulseIcon, BrainIcon, ScaleIcon, SparklesIcon, ArrowRightIcon, ShieldCheckIcon, MessageCircleIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserInfoDialog } from "@/components/user-info-dialog"
import { UserAvatar } from "@/components/user-avatar"
import { useUser } from "@/lib/user-context"

const features = [
  {
    icon: BrainIcon,
    title: "Burnout Prevention",
    description: "Catch early warning signs and get personalized strategies before burnout takes hold.",
  },
  {
    icon: ScaleIcon,
    title: "Work-Life Balance",
    description: "Build sustainable habits and boundaries that protect your personal time and energy.",
  },
  {
    icon: MessageCircleIcon,
    title: "AI Coaching",
    description: "Have meaningful conversations with an AI coach who understands workplace challenges.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Stress Management",
    description: "Learn evidence-based techniques to manage stress and build resilience.",
  },
]

export default function LandingPage() {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [destinationPath, setDestinationPath] = React.useState("/onboarding")
  const { user, isLoading } = useUser()
  const router = useRouter()

  const handleCTAClick = (path: string) => {
    // If user exists, navigate directly
    if (user) {
      router.push(path)
      return
    }
    // Otherwise show the dialog
    setDestinationPath(path)
    setDialogOpen(true)
  }

  return (
    <div className="min-h-screen">
      {/* User Info Dialog */}
      <UserInfoDialog 
        open={dialogOpen} 
        onOpenChange={setDialogOpen} 
        destinationPath={destinationPath}
      />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="container max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <HeartPulseIcon className="size-6 text-primary" />
            <span className="font-semibold text-lg">MyHealthGPT</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <UserAvatar />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        <div className="container relative max-w-screen-xl mx-auto px-4 pt-28 pb-24 sm:pt-36 sm:pb-32">
          <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <HeartPulseIcon className="size-4" />
              <span>Your AI Wellness Companion</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Take Care of Your Mind
              <span className="block text-primary mt-2">While You Work</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
              MyHealthGPT helps employees prevent burnout, manage stress, and find balance. 
              Powered by AI that truly understands workplace wellness.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button 
                onClick={() => handleCTAClick("/onboarding")}
                className={cn(buttonVariants({ size: "lg" }), "gap-2 text-base")}
              >
                Start Your Journey
                <ArrowRightIcon className="size-4" />
              </button>
              <button 
                onClick={() => handleCTAClick("/dashboard")}
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2 text-base")}
              >
                <SparklesIcon className="size-4" />
                Explore Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How MyHealthGPT Helps You</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive approach to workplace wellness, powered by conversational AI.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <feature.icon className="size-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Wellness Journey</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Start with a conversation, build healthy habits, and track your progress over time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Onboard", desc: "Have a conversation with our AI to understand your unique situation and goals." },
              { step: "2", title: "Check-in Daily", desc: "Quick daily check-ins help you stay aware of your mental state and patterns." },
              { step: "3", title: "Grow", desc: "Access coaching sessions and resources tailored to your needs." },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div className="size-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Feel Better at Work?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Join thousands of employees who are taking control of their workplace wellness.
          </p>
          <button 
            onClick={() => handleCTAClick("/onboarding")}
            className={cn(buttonVariants({ size: "lg" }), "gap-2 text-base")}
          >
            Get Started Free
            <ArrowRightIcon className="size-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <HeartPulseIcon className="size-5 text-primary" />
            <span className="font-medium">MyHealthGPT</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 MyHealthGPT. Your wellness matters.
          </p>
        </div>
      </footer>
    </div>
  )
}
