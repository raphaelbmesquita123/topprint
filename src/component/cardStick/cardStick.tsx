import { FormEvent } from 'react'
import { ContainerStick } from './styles'

export function CardStick () {
    function formSubmit (event: FormEvent) {
        event.preventDefault()
        console.log(event)
    }

    return(
        <ContainerStick>
            <img src="./lona.png" alt="lona" />

            <form onSubmit={(event) => formSubmit(event)}>
                <h3>Adesivo de alguma coisa impressa por maquina tal com acabamento de alta qualidade</h3>
                <label htmlFor="largura">Largura: <input type="number" min='0' required/> cm</label>
                <label htmlFor="altura">Altura: <input type="number" required/> cm</label>
                <label htmlFor="substrato" >Substrato:
                    <select name="substrato" id="" required>
                        <option value="420">420</option>
                        <option value="320">320</option>
                    </select>
                </label>
                <label htmlFor="acabamento">Acabamento: 
                    <select name="acabamento" id="" required>
                        <option value="nao">NÃO</option>
                        <option value="320">ILHOES</option>
                        <option value="320">BASTÃO</option>
                    </select>
                </label>
                <label htmlFor="link">Link: <input type="text" required/></label>
                <button type="submit">ADICIONAR A CESTA</button>
            </form>
        </ContainerStick>
    )
}