import './globals.css'

export const metadata = {
  title: 'Stagility.ai - Workforce Stability Meets Organizational Agility',
  description: 'Transform your workforce data into business impact. Predictive analytics for manufacturing HR leaders.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}