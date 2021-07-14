import { useCart } from '../provider/CartProvider'
import { Container, itemCartContainer } from '../styles/cart'
import { useEffect } from 'react'
import nookies from 'nookies'

export default function Cart () {
    const { cart } = useCart()
    console.log(cart)

    return (
        <Container>

            <div>
                <p>

                {cart.map((item) => {
                    return(
                            <itemCartContainer>
                                <p>{item.itemName}</p>
                            </itemCartContainer>
                        )
                })}
                </p>
            </div>
        </Container>
    )
}

