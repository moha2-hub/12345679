'use client'

import { useState } from 'react'

export default function LoginForm({ redirectTo }: { redirectTo: string }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: implement your login logic
    console.log('Logging in to:', redirectTo)
  }

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4 w-64">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="border px-3 py-2 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="border px-3 py-2 rounded"
      />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded">
        Login
      </button>
    </form>
  )
}

