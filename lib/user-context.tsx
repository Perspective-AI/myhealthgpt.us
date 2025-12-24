"use client"

import * as React from "react"

interface UserInfo {
  name: string
  email: string
}

interface UserContextValue {
  user: UserInfo | null
  setUser: (user: UserInfo) => void
  clearUser: () => void
  isSet: boolean
}

const UserContext = React.createContext<UserContextValue | undefined>(undefined)

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUserState] = React.useState<UserInfo | null>(null)

  const setUser = React.useCallback((user: UserInfo) => {
    setUserState(user)
  }, [])

  const clearUser = React.useCallback(() => {
    setUserState(null)
  }, [])

  const value = React.useMemo(
    () => ({
      user,
      setUser,
      clearUser,
      isSet: user !== null,
    }),
    [user, setUser, clearUser]
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

