"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  SparklesIcon, 
  FlameIcon, 
  ScaleIcon, 
  BrainIcon, 
  HeartIcon,
  ArrowLeftIcon,
  ClockIcon
} from "lucide-react"
import { PERSPECTIVE_CONFIG } from "@/lib/perspective"

const coachingTopics = [
  {
    id: "stress",
    icon: BrainIcon,
    title: "Stress Management",
    description: "Learn techniques to manage daily work stress and build resilience.",
    duration: "15-20 min",
    color: "bg-wellness-stress/10 text-wellness-stress",
  },
  {
    id: "burnout",
    icon: FlameIcon,
    title: "Burnout Prevention",
    description: "Identify warning signs and develop strategies to prevent burnout.",
    duration: "20-25 min",
    color: "bg-wellness-burnout/10 text-wellness-burnout",
  },
  {
    id: "balance",
    icon: ScaleIcon,
    title: "Work-Life Balance",
    description: "Create boundaries and habits for a healthier work-life integration.",
    duration: "15-20 min",
    color: "bg-wellness-balance/10 text-wellness-balance",
  },
  {
    id: "wellbeing",
    icon: HeartIcon,
    title: "General Wellbeing",
    description: "Open conversation about whatever is on your mind today.",
    duration: "10-15 min",
    color: "bg-wellness-heart/10 text-wellness-heart",
  },
]

export default function CoachingPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)

  const activeTopic = coachingTopics.find(t => t.id === selectedTopic)

  if (selectedTopic && activeTopic) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container max-w-screen-xl mx-auto px-4 py-8">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            className="mb-6 gap-2"
            onClick={() => setSelectedTopic(null)}
          >
            <ArrowLeftIcon className="size-4" />
            Back to Topics
          </Button>

          {/* Session Header */}
          <div className="text-center mb-8">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${activeTopic.color} text-sm font-medium mb-4`}>
              <activeTopic.icon className="size-4" />
              <span>{activeTopic.title}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              Coaching Session
            </h1>
            <p className="text-muted-foreground">
              {activeTopic.description}
            </p>
          </div>

          {/* Perspective Fullpage Embed */}
          <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-lg border overflow-hidden">
            <iframe 
              src={PERSPECTIVE_CONFIG.coaching.iframeSrc}
              className="w-full border-0"
              style={{ height: "65vh", minHeight: "450px" }}
              allow="microphone; camera"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <SparklesIcon className="size-4" />
            <span>AI Coaching</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            What Would You Like to Work On?
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose a topic for your coaching session. Our AI coach will guide you through 
            a personalized conversation.
          </p>
        </div>

        {/* Topic Cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {coachingTopics.map((topic) => (
            <Card 
              key={topic.id} 
              className="cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02]"
              onClick={() => setSelectedTopic(topic.id)}
            >
              <CardHeader>
                <div className={`size-12 rounded-xl ${topic.color} flex items-center justify-center mb-2`}>
                  <topic.icon className="size-6" />
                </div>
                <CardTitle className="text-lg">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{topic.description}</CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ClockIcon className="size-4" />
                    <span>{topic.duration}</span>
                  </div>
                  <Button size="sm" variant="outline">
                    Start Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">How Coaching Works</h3>
              <p className="text-sm text-muted-foreground">
                Our AI coach uses evidence-based techniques to help you explore challenges, 
                identify patterns, and develop actionable strategies. All conversations are 
                private and designed to support your growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

