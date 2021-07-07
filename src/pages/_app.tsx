import { NavBar } from '../component/navBar/navBar'
import { GlobalStyle } from '../styles/global'


function MyApp({ Component, pageProps }) {

  return (
    <>
      <NavBar />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
