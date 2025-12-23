// Perspective AI Configuration for MyHealthGPT
// These are the research IDs for each perspective agent

// Base URL for Perspective AI (production)
const PERSPECTIVE_BASE_URL = "https://getperspective.ai"

export const PERSPECTIVE_CONFIG = {
  // Script URL for Perspective embeds
  scriptUrl: `${PERSPECTIVE_BASE_URL}/v1/embed.js`,
  
  // Onboarding - Fullpage embed for new user intake
  onboarding: {
    id: "lo7khRfD",
    type: "fullpage" as const,
    iframeSrc: `${PERSPECTIVE_BASE_URL}/interview/lo7khRfD`,
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
    iframeSrc: `${PERSPECTIVE_BASE_URL}/interview/O78e-YB-`,
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
