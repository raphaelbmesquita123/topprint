import { useCart } from '../provider/CartProvider'
import { Container, ItemCartContainer,PriceOrRemove } from '../styles/cart'
import { useEffect } from 'react'
import nookies from 'nookies'

export default function Cart () {
    const { cart } = useCart()
    console.log(cart)

    return (
        <Container>
            <main>
                {cart.map((item) => {
                    return(
                        <ItemCartContainer>
                            <section>
                                <main>
                                    <p>Nome: {item.itemName}</p>

                                    <p>Largura: {item.lenght}</p>
                                    <p>Altura: {item.height}</p>
                                    <p>Substrato: {item.substrate}</p>
                                    <p>Acabamento: {item.finishing}</p>
                                </main>

                                <div>
                                    <p>Link: {item.itemLink}</p>
                                </div>
                            </section>
                            <PriceOrRemove>
                                <p>R$: 15.280.30</p>
                                <p>REMOVE</p>
                            </PriceOrRemove>
                        </ItemCartContainer>
                        )
                    })}

            </main>
        </Container>
    )
}

