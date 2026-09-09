// app/providers.tsx
'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode, useState, useEffect } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Trả về children trần khi chưa mounted để tránh lỗi
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      themes={['dark', 'light']}
      enableColorScheme={true}
      disableTransitionOnChange={true}
    >
      {children}
    </ThemeProvider>
  )
}
