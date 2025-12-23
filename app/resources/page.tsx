"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BookOpenIcon, 
  BrainIcon, 
  HeartIcon, 
  ClockIcon,
  SparklesIcon,
  FilterIcon
} from "lucide-react"
import { PERSPECTIVE_CONFIG } from "@/lib/perspective"

const categories = [
  { id: "all", label: "All" },
  { id: "stress", label: "Stress Relief" },
  { id: "mindfulness", label: "Mindfulness" },
  { id: "boundaries", label: "Boundaries" },
  { id: "productivity", label: "Productivity" },
  { id: "sleep", label: "Sleep" },
]

const resources = [
  {
    id: 1,
    title: "5-Minute Breathing Exercise for Stress",
    description: "A quick guided breathing technique you can do at your desk to reduce immediate stress.",
    category: "stress",
    type: "Exercise",
    duration: "5 min",
    icon: BrainIcon,
  },
  {
    id: 2,
    title: "Setting Boundaries with Your Manager",
    description: "Practical scripts and strategies for communicating your limits professionally.",
    category: "boundaries",
    type: "Article",
    duration: "8 min read",
    icon: BookOpenIcon,
  },
  {
    id: 3,
    title: "The Pomodoro Technique Explained",
    description: "Learn how to use time-boxing to boost focus and prevent mental fatigue.",
    category: "productivity",
    type: "Article",
    duration: "6 min read",
    icon: ClockIcon,
  },
  {
    id: 4,
    title: "Body Scan Meditation",
    description: "A guided meditation to release physical tension and calm your mind.",
    category: "mindfulness",
    type: "Exercise",
    duration: "10 min",
    icon: HeartIcon,
  },
  {
    id: 5,
    title: "Evening Wind-Down Routine",
    description: "Create a relaxing pre-sleep routine to improve your sleep quality.",
    category: "sleep",
    type: "Guide",
    duration: "5 min read",
    icon: BookOpenIcon,
  },
  {
    id: 6,
    title: "Quick Desk Stretches",
    description: "Simple stretches to release tension from sitting at your desk all day.",
    category: "stress",
    type: "Exercise",
    duration: "3 min",
    icon: HeartIcon,
  },
  {
    id: 7,
    title: "Mindful Lunch Break",
    description: "How to use your lunch break as a reset for afternoon productivity.",
    category: "mindfulness",
    type: "Guide",
    duration: "4 min read",
    icon: BookOpenIcon,
  },
  {
    id: 8,
    title: "Saying No Without Guilt",
    description: "Techniques for declining requests while maintaining positive relationships.",
    category: "boundaries",
    type: "Article",
    duration: "7 min read",
    icon: BrainIcon,
  },
]

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredResources = activeCategory === "all" 
    ? resources 
    : resources.filter(r => r.category === activeCategory)

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Wellness Resources</h1>
            <p className="text-muted-foreground">
              Articles, exercises, and guides to support your wellbeing.
            </p>
          </div>
          <button 
            data-perspective-slider={PERSPECTIVE_CONFIG.resources.id}
            className="inline-flex items-center gap-2 self-start bg-primary text-primary-foreground hover:bg-primary/80 rounded-4xl px-4 py-2 text-sm font-medium transition-all"
          >
            <SparklesIcon className="size-4" />
            Ask for Recommendations
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          <FilterIcon className="size-4 text-muted-foreground shrink-0" />
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat.id)}
              className="shrink-0"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <resource.icon className="size-5 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {resource.type}
                  </Badge>
                </div>
                <CardTitle className="text-base mt-3">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm mb-3">
                  {resource.description}
                </CardDescription>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ClockIcon className="size-3" />
                  <span>{resource.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No resources found for this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

