import { createContext } from "react";

type ItemProps = {
itemName: string;
lenght: number;
height: number;
substrate: number;
finishing: string;
itemLink: string;        
}

type CartContextProvider = {
    addItemToCart: (item) => void, 
    cart: ItemProps[]
}

export const CartContext = createContext<CartContextProvider>({} as CartContextProvider)