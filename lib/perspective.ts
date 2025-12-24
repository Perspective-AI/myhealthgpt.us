// Perspective AI Configuration for MyHealthGPT
// These are the research IDs for each perspective agent

// Base URL for Perspective AI - uses env variable or defaults to production
const PERSPECTIVE_BASE_URL = process.env.NEXT_PUBLIC_PERSPECTIVE_URL || "https://getperspective.ai"

export const PERSPECTIVE_CONFIG = {
  // Script URL for Perspective embeds
  scriptUrl: `${PERSPECTIVE_BASE_URL}/v1/embed.js`,
  baseUrl: PERSPECTIVE_BASE_URL,
  
  // Onboarding - Fullpage embed for new user intake
  onboarding: {
    id: "lo7khRfD",
    type: "fullpage" as const,
  },
  
  // Check-in - Popup embed for daily wellness check
  checkin: {
    id: "pmG5h241",
    type: "popup" as const,
  },
  
  // Coaching - Fullpage embed for coaching sessions
  coaching: {
    id: "O78e-YB-",
    type: "fullpage" as const,
  },
  
  // Resources - Slider embed for resource assistant
  resources: {
    id: "b2xVdG5D",
    type: "slider" as const,
  },
  
  // Dashboard - Chat bubble for quick questions
  dashboard: {
    id: "qXCLKWgr",
    type: "chat" as const,
  },
}

// User info interface for passing to perspectives
export interface UserInfo {
  name: string
  email: string
}

// Helper to build iframe src with user params
export function getIframeSrc(perspectiveId: string, user?: UserInfo | null): string {
  const params = new URLSearchParams({ mode: "restart" })
  
  if (user) {
    params.set("name", user.name)
    params.set("email", user.email)
  }
  
  return `${PERSPECTIVE_BASE_URL}/interview/${perspectiveId}?${params.toString()}`
}

// Helper to get data attribute value with user params (for JS embeds)
export function getEmbedId(perspectiveId: string, user?: UserInfo | null): string {
  if (!user) {
    return `${perspectiveId}?mode=restart`
  }
  
  const params = new URLSearchParams({
    mode: "restart",
    name: user.name,
    email: user.email,
  })
  
  return `${perspectiveId}?${params.toString()}`
}
