// app/login/LoginHandler.tsx
'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function LoginHandler() {
  const searchParams = useSearchParams()
  useEffect(() => {
    console.log('Search params:', searchParams.toString())
  }, [searchParams])

  return <div>Login Form here</div>
}
