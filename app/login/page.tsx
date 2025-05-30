'use client'

import { useSearchParams } from 'next/navigation'
import LoginForm from '@/components/LoginForm' // Replace this with your real form component

export default function LoginHandler() {
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect') ?? '/'

  return (
    <div className="flex min-h-screen items-center justify-center">
      {/* Replace with your real login UI */}
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <LoginForm redirectTo={redirect} />
      </div>
    </div>
  )
}
