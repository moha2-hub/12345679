import { Suspense } from 'react'
import LoginHandler from './LoginHandler'

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading login...</div>}>
      <LoginHandler />
    </Suspense>
  )
}
