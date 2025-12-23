import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  MessageCircleIcon, 
  SparklesIcon, 
  BookOpenIcon, 
  TrendingUpIcon,
  CalendarIcon,
  FlameIcon,
  HeartIcon,
  ZapIcon
} from "lucide-react"
import { PERSPECTIVE_CONFIG } from "@/lib/perspective"

const quickActions = [
  {
    href: "/checkin",
    icon: MessageCircleIcon,
    title: "Daily Check-in",
    description: "How are you feeling today?",
    color: "bg-info/10 text-info",
  },
  {
    href: "/coaching",
    icon: SparklesIcon,
    title: "Talk to Coach",
    description: "Get personalized guidance",
    color: "bg-primary/10 text-primary",
  },
  {
    href: "/resources",
    icon: BookOpenIcon,
    title: "Browse Resources",
    description: "Articles, exercises & tips",
    color: "bg-success/10 text-success",
  },
]

const recentInsights = [
  { label: "You've been consistent with check-ins this week", type: "positive" },
  { label: "Energy levels trending up compared to last week", type: "positive" },
  { label: "Consider a break - 3 days of high stress detected", type: "warning" },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-muted/20">
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Welcome back!</h1>
          <p className="text-muted-foreground">Here&apos;s how you&apos;re doing this week.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Wellness Score</p>
                  <p className="text-3xl font-bold text-primary">78</p>
                </div>
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <HeartIcon className="size-6 text-primary" />
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2 text-sm text-success">
                <TrendingUpIcon className="size-4" />
                <span>+5 from last week</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Check-in Streak</p>
                  <p className="text-3xl font-bold">7</p>
                </div>
                <div className="size-12 rounded-full bg-warning/10 flex items-center justify-center">
                  <FlameIcon className="size-6 text-warning" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Days in a row</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Energy Level</p>
                  <p className="text-3xl font-bold">High</p>
                </div>
                <div className="size-12 rounded-full bg-energy/10 flex items-center justify-center">
                  <ZapIcon className="size-6 text-energy" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Based on recent check-ins</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">This Month</p>
                  <p className="text-3xl font-bold">12</p>
                </div>
                <div className="size-12 rounded-full bg-info/10 flex items-center justify-center">
                  <CalendarIcon className="size-6 text-info" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Sessions completed</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {quickActions.map((action) => (
                <Card key={action.href} className="hover:shadow-md transition-shadow cursor-pointer">
                  <Link href={action.href}>
                    <CardHeader className="pb-2">
                      <div className={`size-10 rounded-lg ${action.color} flex items-center justify-center mb-2`}>
                        <action.icon className="size-5" />
                      </div>
                      <CardTitle className="text-base">{action.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{action.description}</CardDescription>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>

            {/* Recent Check-in Summary */}
            <h2 className="text-lg font-semibold mb-4 mt-8">Recent Insights</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {recentInsights.map((insight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Badge 
                        variant={insight.type === "positive" ? "default" : "secondary"}
                        className={insight.type === "warning" ? "bg-warning/20 text-warning-foreground" : ""}
                      >
                        {insight.type === "positive" ? "✓" : "!"}
                      </Badge>
                      <p className="text-sm">{insight.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Ask Your Coach</h2>
            <Card className="h-[400px] flex flex-col">
              <CardHeader className="pb-2">
                <CardDescription>
                  Have a quick question? Chat with your AI wellness coach.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1 rounded-lg mb-4 overflow-hidden">
                  <div data-perspective-widget={PERSPECTIVE_CONFIG.dashboard.id} className="h-full" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

