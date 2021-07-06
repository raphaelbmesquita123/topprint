import Head from 'next/head'
import { FaShoppingCart } from "react-icons/fa";
import { Nav, Banner, Container } from '../styles/home'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Top Print</title>
      </Head>
      <Nav>
        <img src="./logo.png" alt="topprint-logo" />

        <div>
          <ul>
            <a href="/"><li>Ajuda</li></a>
            <a href="/"><li>Minha Conta</li></a>
          </ul>

        </div>
        <div className="icon">
          <FaShoppingCart />
          <div>
            <span>2</span>
          </div>
        </div>
      </Nav>

      <Banner>

      </Banner>
      <Container >

      </Container>
    </div>
  )
}
