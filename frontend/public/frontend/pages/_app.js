import '../styles/globals.css'
import { XProvider } from '../context/XContext'

function MyApp({ Component, pageProps }) {
  return <XProvider>
    <Component {...pageProps} />
  </XProvider>
}

export default MyApp
