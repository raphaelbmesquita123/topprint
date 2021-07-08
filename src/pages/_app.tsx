import React from 'react'
import { NavBar } from '../component/navBar/navBar'
import { GlobalStyle } from '../styles/global'
import { AuthProvider } from '../provider/AuthProvider'


function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
      <NavBar />
      <GlobalStyle />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
