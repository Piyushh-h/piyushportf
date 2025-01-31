import React from "react"
import BackgroundEffect from "./Components/BackgroundEffect"
import './globals.css'

export const metadata = {
  title: 'Piyush Kumar Sinha - Portfolio',
  description: 'Full Stack Developer and Tech Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <BackgroundEffect />
        {children}
      </body>
    </html>
  )
}