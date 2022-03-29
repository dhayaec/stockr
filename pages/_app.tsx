import type { AppProps } from 'next/app'
import Layout from '../src/components/common/Layout'
import NavBar from '../src/components/navbar/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NavBar />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
