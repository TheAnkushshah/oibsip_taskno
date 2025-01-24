import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import './globals.css'
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Go-Verify',
  description: 'Be real, Be safe with go-verify',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
      </html>
    </SessionProvider>
  )
}
