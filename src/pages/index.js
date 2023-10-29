import { Inter } from 'next/font/google'
import TopBar from '@/components/TopBar/topBar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
     <div >
      <TopBar/>
     </div>
  )
}
