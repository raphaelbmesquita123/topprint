import { FormEvent, useState } from 'react'
import { ContainerStick } from './styles'

export function CardStick () {
    const [ length, setlength ] = useState(0)
    const [ height, setHeight ] = useState(0)
    const [ substrate, setSubstrate ] = useState('')
    const [ finishing, setFinishing] = useState('')
    const [ itemLink, setItemLink ] = useState('')

    // console.log(
    //     `
    //     length: ${length},
    //     height: ${height},
    //     substrate: ${substrate},
    //     finishing: ${finishing},
    //     itemLink: ${itemLink},`
    // )

    function formSubmit (event: FormEvent) {
        event.preventDefault()
        console.log(event)
    }

    return(
        <ContainerStick>
            <img src="./lona.png" alt="lona" />
            <form onSubmit={(event) => formSubmit(event)}>
                <h3>Adesivo de alguma coisa impressa por maquina tal com acabamento de alta qualidade</h3>
                <label htmlFor="largura">Largura: <input type="number" min='0' required onChange={(e) => setlength(Number(e.target.value))}/> cm</label>
                <label htmlFor="altura">Altura: <input type="number" min='0' required onChange={(e) => setHeight(Number(e.target.value))}/> cm</label>

                <label htmlFor="substrato" >Substrato:
                    <select name="substrato" id="" onChange={(e) => setSubstrate(e.target.value)} required>
                        <option value="420">420</option>
                        <option value="320">320</option> 
                    </select>
                </label>
                <label htmlFor="acabamento">Acabamento: 
                    <select name="acabamento" id=""  onChange={(e) => setFinishing(e.target.value)} required>
                        <option value="nao">NÃO</option>
                        <option value="ilhoes">ILHOES</option>
                        <option value="bastao">BASTÃO</option>
                    </select>
                </label>
                <label htmlFor="link">Link: <input type="text" onChange={(e) => setItemLink(e.target.value)} required/></label>

                <button type="submit">ADICIONAR A CESTA</button>
            </form>
        </ContainerStick>
    )
}