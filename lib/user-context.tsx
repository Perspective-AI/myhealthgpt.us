"use client"

import * as React from "react"

const STORAGE_KEY = "myhealthgpt-user"

interface UserInfo {
  name: string
  email: string
}

interface UserContextValue {
  user: UserInfo | null
  setUser: (user: UserInfo) => void
  clearUser: () => void
  isSet: boolean
  isLoading: boolean
}

const UserContext = React.createContext<UserContextValue | undefined>(undefined)

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUserState] = React.useState<UserInfo | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)

  // Load user from localStorage on mount
  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (parsed.name && parsed.email) {
          setUserState(parsed)
        }
      }
    } catch {
      // Ignore parsing errors
    }
    setIsLoading(false)
  }, [])

  const setUser = React.useCallback((user: UserInfo) => {
    setUserState(user)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    } catch {
      // Ignore storage errors
    }
  }, [])

  const clearUser = React.useCallback(() => {
    setUserState(null)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // Ignore storage errors
    }
  }, [])

  const value = React.useMemo(
    () => ({
      user,
      setUser,
      clearUser,
      isSet: user !== null,
      isLoading,
    }),
    [user, setUser, clearUser, isLoading]
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUser() {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}

// Helper to get initials from name
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

