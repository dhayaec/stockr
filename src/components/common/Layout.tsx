import NavBar from '../navbar/NavBar'
import Footer from './Footer'

export default function Layout({ children }: any) {
  return (
    <div className='container mx-auto w-full lg:w-8/12'>
      <NavBar />
      <div className='flex min-h-screen flex-col justify-start py-2'>
        {children}
      </div>
      <Footer />
    </div>
  )
}
