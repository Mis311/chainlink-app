
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F3F4F6] p-5">
      {children}
    </div>
  )
}
