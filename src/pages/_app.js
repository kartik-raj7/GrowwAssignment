import '@/styles/globals.scss'
import { wrapper, store } from "../redux/store";
function App({ Component, pageProps }) {
  return( 
   <Component {...pageProps} />
  )
}
export default wrapper.withRedux(App);