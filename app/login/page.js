'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import {
  AuthShell,
  FormField,
  PrimaryButton,
  ErrorAlert,
  AuthFooterLink,
} from '@/app/components/AuthShell'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showResend, setShowResend] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      if (error.message === 'Email not confirmed') {
        setError('Please verify your email first. Check your inbox for the verification link.')
        setShowResend(true)
      } else if (error.message === 'Invalid login credentials') {
        setError('Wrong email or password.')
      } else {
        setError(error.message)
      }

      setLoading(false)
      return
    }

    router.push('/')
  }

  const resendVerification = async () => {
    await supabase.auth.resend({
      type: 'signup',
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/login`,
      },
    })
    setError('Verification email resent! Check your inbox.')
    setShowResend(false)
  }

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Log in to browse shelves, send borrow requests, and meet fellow readers."
      footer={
        <p className="text-center text-sm text-[#4a5c61]">
          Don&apos;t have an account?{' '}
          <AuthFooterLink href="/signup">Sign up</AuthFooterLink>
        </p>
      }
    >
      <ErrorAlert message={error}>
        {showResend && (
          <button
            type="button"
            onClick={resendVerification}
            className="mt-2 text-sm font-semibold text-[#9f4127] hover:underline"
          >
            Resend verification email
          </button>
        )}
      </ErrorAlert>

      <form
        className="flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault()
          handleLogin()
        }}
      >
        <FormField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
        <FormField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          autoComplete="current-password"
          required
        />
        <PrimaryButton type="submit" disabled={loading}>
          {loading ? 'Logging in…' : 'Log in'}
        </PrimaryButton>
      </form>
    </AuthShell>
  )
}
