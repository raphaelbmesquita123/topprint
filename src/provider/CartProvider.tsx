import { ReactNode, useContext, useEffect, useState } from "react";
import { CartContext } from '../context/cartContext';

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
    const [ cart, setCart ] = useState([])

    console.log(cart)
    function addItemToCart(item: ItemProps) {
        setCart([...cart, item])
        console.log(cart)
    }

    return <CartContext.Provider 
    value={{
        addItemToCart,
    }}
    >
      {children}
    </CartContext.Provider>;
  
  }
  
  export function useCart () {
    return useContext(CartContext)
  }