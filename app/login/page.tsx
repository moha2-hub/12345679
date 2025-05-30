'use client'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { logoutAction } from '../actions/logout'


function LogoutPageInner() {
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    // Call the server action
    logoutAction().then(() => {
      const role = searchParams.get('role')
      if (role === 'admin') {
        router.replace('/admin')
      } else if (role === 'seller') {
        router.replace('/seller')
      } else if (role === 'customer') {
        router.replace('/customer')
      } else {
        router.replace('/')
      }
    })
  }, [router, searchParams])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <span className="text-lg text-muted-foreground">Logging out...</span>
    </div>
  )
}

const LogoutPage = () => (
  <Suspense>
    <LogoutPageInner />
  </Suspense>
)

export default dynamic(() => Promise.resolve(LogoutPage), {
  ssr: false,
  suspense: true,
})
