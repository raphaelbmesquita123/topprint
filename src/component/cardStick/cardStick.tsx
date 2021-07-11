import { FormEvent, useState } from 'react'
import { useCart } from '../../provider/CartProvider'
import { ContainerStick } from './styles'

export function CardStick () {
    const [ itemName, setItemName ] = useState('')
    const [ length, setlength ] = useState(1)
    const [ height, setHeight ] = useState(2)
    const [ substrate, setSubstrate ] = useState('')
    const [ finishing, setFinishing] = useState('')
    const [ itemLink, setItemLink ] = useState('')

    const { addItemToCart } = useCart()

    function formSubmit (event: FormEvent) {
        event.preventDefault()

        const itemToCart = {
            itemName: itemName,
            lenght: length,
            height: height,
            substrate: substrate,
            finishing: finishing,
            itemLink:  itemLink  
        }
        addItemToCart(itemToCart)
        setlength(0)
        setHeight(0)
        setSubstrate('')
        setFinishing('')
        setItemLink('')
    }

    return(
        <ContainerStick>
            <img src="./lona.png" alt="lona" />
            <form onSubmit={(event) => formSubmit(event)}>
                <h3>Adesivo de alguma coisa impressa por maquina tal com acabamento de alta qualidade</h3>

                <label htmlFor="itemName">
                    Nome do Arquivo: 
                    <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} required/>
                </label>

                <label htmlFor="largura">
                    Largura: 
                    <input type="number" min='0' value={length} required onChange={(e) => setlength(Number(e.target.value))}/>
                     cm
                </label>

                <label htmlFor="altura">
                    Altura: 
                    <input type="number" min='0' value={height} required onChange={(e) => setHeight(Number(e.target.value))}/>
                    cm
                </label>

                <label htmlFor="substrato" >Substrato:
                    <select name="substrato" value={substrate} onChange={(e) => setSubstrate(e.target.value)} required>
                        <option value="420">420</option>
                        <option value="320">320</option> 
                    </select>
                </label>

                <label htmlFor="acabamento">Acabamento: 
                    <select name="acabamento" value={finishing}  onChange={(e) => setFinishing(e.target.value)} required>
                        <option value="nao">NÃO</option>
                        <option value="ilhoes">ILHOES</option>
                        <option value="bastao">BASTÃO</option>
                    </select>
                </label>

                <label htmlFor="link">
                    Link: 
                    <input type="text" value={itemLink} onChange={(e) => setItemLink(e.target.value)} required/>
                </label>

                
                <button type="submit">ADICIONAR A CESTA</button>
            </form>
        </ContainerStick>
    )
}