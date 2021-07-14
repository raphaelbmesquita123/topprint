import { ReactNode, useContext, useEffect, useState } from "react";
import { CartContext } from '../context/CartContext';
import nookies, { parseCookies, setCookie, destroyCookie } from 'nookies'

type CartProviderProps = {
    children: ReactNode;
  }

type ItemProps = {
  itemName: string;
  lenght: number;
  height: number;
  substrate: number;
  finishing: string;
  itemLink: string;        
}


export const CartProvider: React.FC = ({ children }: CartProviderProps) => {
    const [ cart, setCart ] = useState<ItemProps[]>(() => {

      return []
    })
    
    useEffect(() => {
      setCookie(null, 'TopPrintCart', String(cart), {
        maxAge: 30*24*60,
        path:'/cart'
      })
    }, [cart])

    // console.log(cart)
    function addItemToCart(item: ItemProps) {
        setCart([...cart, item])
    }

    return <CartContext.Provider 
    value={{
        addItemToCart,
        cart,
    }}
    >
      {children}
    </CartContext.Provider>;
  
  }
  
  export function useCart () {
    return useContext(CartContext)
  }