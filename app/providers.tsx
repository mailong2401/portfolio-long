import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {


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
