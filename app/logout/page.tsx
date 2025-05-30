'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { logoutAction } from '../actions/logout'

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    const logoutAndRedirect = async () => {
      await logoutAction()
      router.replace('/login') // ✅ Redirect to login after logout
    }

    logoutAndRedirect()
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <span className="text-lg text-muted-foreground">Logging out...</span>
    </div>
  )
}
