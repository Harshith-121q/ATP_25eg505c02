import Header from './Header'
import Footer from './Footer'

import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <div >
        <Header/>
        <div className="min-h-screen mx-15 mt-10 bg-yellow-500">
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
