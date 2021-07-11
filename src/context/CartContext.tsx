import { createContext } from "react";

type CartContextProvider = {
    addItemToCart: (item) => void, 
}
export const CartContext = createContext<CartContextProvider>({} as CartContextProvider)