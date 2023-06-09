
import { Inter } from 'next/font/google'
import
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (

    <div className="min-h-screen bg-[#F3F4F6] p-5">
    <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )
}
