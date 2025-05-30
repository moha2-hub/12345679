// app/logout/page.tsx
import { Suspense } from 'react'
import LogoutHandler from './LogoutHandler'

export default function LogoutPage() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <LogoutHandler />
    </Suspense>
  )
}
