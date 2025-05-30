'use client'

import { useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { logoutAction } from '../actions/logout'

export default function LogoutPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const handleLogout = async () => {
      await logoutAction()

      const role = searchParams.get('role')
      switch (role) {
        case 'admin':
          router.replace('/admin')
          break
        case 'seller':
          router.replace('/seller')
          break
        case 'customer':
          router.replace('/customer')
          break
        default:
          router.replace('/')
      }
    }

    handleLogout()
  }, [router, searchParams])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <span className="text-lg text-muted-foreground">Logging out...</span>
    </div>
  )
}
