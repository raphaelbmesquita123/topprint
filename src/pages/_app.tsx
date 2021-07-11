import React from 'react'
import { NavBar } from '../component/navBar/navBar'
import { GlobalStyle } from '../styles/global'
import { AuthProvider } from '../provider/AuthProvider'
import { CartProvider } from '../provider/CartProvider'


function MyApp({ Component, pageProps }) {

  return (
    <CartProvider>
      <AuthProvider>
        <NavBar />
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </CartProvider>
  )
}

export default MyApp
