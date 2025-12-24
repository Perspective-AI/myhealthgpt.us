# MyHealthGPT

**[Live Demo →](https://myhealthgpt.us)**

A demo workplace wellness app showcasing how [Perspective AI](https://getperspective.ai) conversational agents can be embedded throughout an application.

A Next.js app with Shadcn UI, built using the [Perspective AI MCP](https://github.com/ArtisanLabs/perspectiveapi-mcp).

## The Demo App

The app demonstrates a complete wellness journey with AI conversations at each touchpoint:

- **Homepage** — Captures user name and email to personalize conversations
- **Onboarding** — Fullpage AI conversation to understand the user's work situation and wellness goals
- **Dashboard** — Wellness stats overview with a chat widget for quick questions
- **Daily Check-in** — Mood, energy, and stress tracker followed by a popup AI conversation
- **Coaching** — Topic selection (stress, burnout, balance, wellbeing) leading to fullpage coaching sessions
- **Resources** — Wellness library with a slider AI assistant for personalized recommendations

## Perspective Embed Types Demonstrated

| Embed Type | Use Case | Page |
|------------|----------|------|
| Fullpage | Immersive conversations | Onboarding, Coaching |
| Popup | Triggered after user action | Check-in |
| Slider | Contextual assistance | Resources |
| Chat Widget | Persistent quick access | Dashboard |

## Getting Started

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Environment Variables

For local Perspective development, create a `.env.local` file:

```
NEXT_PUBLIC_PERSPECTIVE_URL=http://localhost:3020
```

If not set, defaults to production (`https://getperspective.ai`).

## Setup Your Own

This demo uses pre-configured Perspective agents. To use your own:

1. Create a [Perspective AI](https://getperspective.ai) account
2. Install the [Perspective AI MCP](https://getperspective.ai/docs/mcp)
3. Use Cursor or Claude Code with the Perspective MCP to generate perspectives for each use case and update the IDs in `lib/perspective.ts`

## Links

- [Perspective AI](https://getperspective.ai)
- [Perspective AI MCP](https://getperspective.ai/docs/mcp)
- [Perspective AI Documentation](https://getperspective.ai/docs)
