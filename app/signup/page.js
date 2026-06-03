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

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSignup = async () => {
    setLoading(true)
    setError(null)

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    await supabase.from('profiles').insert({
      id: data.user.id,
      name,
      city: 'Your City',
    })

    router.push('/')
  }

  return (
    <AuthShell
      title="Join PassYourBook"
      subtitle="Start sharing books with your community — no shipping, just readers meeting in person."
      footer={
        <p className="text-center text-sm text-[#4a5c61]">
          Already have an account?{' '}
          <AuthFooterLink href="/login">Log in</AuthFooterLink>
        </p>
      }
    >
      <ErrorAlert message={error} />

      <form
        className="flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault()
          handleSignup()
        }}
      >
        <FormField
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          autoComplete="name"
          required
        />
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
          autoComplete="new-password"
          required
        />
        <PrimaryButton type="submit" disabled={loading}>
          {loading ? 'Creating account…' : 'Create account'}
        </PrimaryButton>
      </form>
    </AuthShell>
  )
}
