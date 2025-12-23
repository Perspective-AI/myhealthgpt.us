"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircleIcon, SunIcon, CloudIcon, ZapIcon, BatteryLowIcon } from "lucide-react"
import { PERSPECTIVE_CONFIG } from "@/lib/perspective"

const moodOptions = [
  { emoji: "😊", label: "Great", value: 5 },
  { emoji: "🙂", label: "Good", value: 4 },
  { emoji: "😐", label: "Okay", value: 3 },
  { emoji: "😔", label: "Low", value: 2 },
  { emoji: "😞", label: "Struggling", value: 1 },
]

const energyOptions = [
  { icon: ZapIcon, label: "High Energy", value: "high", color: "text-energy" },
  { icon: SunIcon, label: "Normal", value: "normal", color: "text-warning" },
  { icon: CloudIcon, label: "Low", value: "low", color: "text-muted-foreground" },
  { icon: BatteryLowIcon, label: "Exhausted", value: "exhausted", color: "text-destructive" },
]

const stressOptions = [
  { label: "Very Low", value: 1, color: "bg-success" },
  { label: "Low", value: 2, color: "bg-success/70" },
  { label: "Moderate", value: 3, color: "bg-warning" },
  { label: "High", value: 4, color: "bg-warning/70" },
  { label: "Very High", value: 5, color: "bg-destructive" },
]

export default function CheckinPage() {
  const [mood, setMood] = useState<number | null>(null)
  const [energy, setEnergy] = useState<string | null>(null)
  const [stress, setStress] = useState<number | null>(null)

  const isComplete = mood !== null && energy !== null && stress !== null

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Daily Check-in</h1>
            <p className="text-muted-foreground">
              Take a moment to reflect on how you&apos;re feeling today.
            </p>
          </div>

          {/* Mood Selection */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">How are you feeling?</CardTitle>
              <CardDescription>Select the emoji that best represents your mood</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-4">
                {moodOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setMood(option.value)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all ${
                      mood === option.value
                        ? "bg-primary/10 ring-2 ring-primary scale-105"
                        : "hover:bg-muted"
                    }`}
                  >
                    <span className="text-4xl">{option.emoji}</span>
                    <span className="text-sm text-muted-foreground">{option.label}</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Energy Level */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Energy Level</CardTitle>
              <CardDescription>How&apos;s your energy right now?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {energyOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setEnergy(option.value)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all ${
                      energy === option.value
                        ? "bg-primary/10 ring-2 ring-primary"
                        : "hover:bg-muted border border-border"
                    }`}
                  >
                    <option.icon className={`size-6 ${option.color}`} />
                    <span className="text-sm">{option.label}</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Stress Level */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Stress Level</CardTitle>
              <CardDescription>Rate your current stress from 1 (low) to 5 (high)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-3">
                {stressOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setStress(option.value)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all min-w-[70px] ${
                      stress === option.value
                        ? "ring-2 ring-primary scale-105"
                        : "hover:bg-muted"
                    }`}
                  >
                    <div className={`size-8 rounded-full ${option.color}`} />
                    <span className="text-xs text-muted-foreground">{option.label}</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Continue Button - Triggers Perspective Popup */}
          <div className="text-center">
            <button 
              data-perspective-popup={PERSPECTIVE_CONFIG.checkin.id}
              disabled={!isComplete}
              className={`inline-flex items-center justify-center gap-2 rounded-4xl px-6 py-3 text-base font-medium transition-all ${
                isComplete 
                  ? "bg-primary text-primary-foreground hover:bg-primary/80 cursor-pointer" 
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
            >
              <MessageCircleIcon className="size-4" />
              {isComplete ? "Continue to Chat" : "Complete all fields to continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

