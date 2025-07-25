import React, { createContext, useEffect, useState } from 'react'
import { supabase } from '../services/supabase'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if we're in demo mode (placeholder URLs)
    const isDemoMode = import.meta.env.VITE_SUPABASE_URL?.includes('placeholder') || 
                      !import.meta.env.VITE_SUPABASE_URL ||
                      import.meta.env.VITE_SUPABASE_URL === 'https://placeholder.supabase.co'

    if (isDemoMode) {
      // Set a demo user for testing
      setUser({ 
        id: 'demo-user',
        email: 'demo@example.com',
        user_metadata: { name: 'Demo User' }
      })
      setLoading(false)
      return
    }

    // Real Supabase initialization
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null)
      setLoading(false)
    }).catch((error) => {
      console.error('Auth error:', error)
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null)
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signIn = async (email, password) => {
    const isDemoMode = import.meta.env.VITE_SUPABASE_URL?.includes('placeholder') || 
                      !import.meta.env.VITE_SUPABASE_URL

    if (isDemoMode) {
      // Demo login
      setUser({ 
        id: 'demo-user',
        email: email,
        user_metadata: { name: 'Demo User' }
      })
      return { data: { user: { email } }, error: null }
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  }

  const signUp = async (email, password) => {
    const isDemoMode = import.meta.env.VITE_SUPABASE_URL?.includes('placeholder') || 
                      !import.meta.env.VITE_SUPABASE_URL

    if (isDemoMode) {
      // Demo signup
      setUser({ 
        id: 'demo-user',
        email: email,
        user_metadata: { name: 'Demo User' }
      })
      return { data: { user: { email } }, error: null }
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    return { data, error }
  }

  const signOut = async () => {
    const isDemoMode = import.meta.env.VITE_SUPABASE_URL?.includes('placeholder') || 
                      !import.meta.env.VITE_SUPABASE_URL

    if (isDemoMode) {
      setUser(null)
      return { error: null }
    }

    const { error } = await supabase.auth.signOut()
    return { error }
  }

  const signInWithGitHub = async () => {
    const isDemoMode = import.meta.env.VITE_SUPABASE_URL?.includes('placeholder') || 
                      !import.meta.env.VITE_SUPABASE_URL

    if (isDemoMode) {
      // Demo GitHub login
      setUser({ 
        id: 'demo-user',
        email: 'demo@github.com',
        user_metadata: { name: 'GitHub Demo User' }
      })
      return { data: { user: { email: 'demo@github.com' } }, error: null }
    }

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        scopes: 'repo',
      }
    })
    return { data, error }
  }

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    signInWithGitHub,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}