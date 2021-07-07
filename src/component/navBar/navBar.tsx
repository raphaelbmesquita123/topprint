import { Nav } from './styles'
import { FaShoppingCart } from "react-icons/fa";
import Link  from 'next/link';

export function NavBar () {
    return (
    <Nav>
        <Link href='/'>
            <img src="./logo.png" alt="topprint-logo" />
        </Link>

        <div>
            <ul>
            <Link href="/"><li>Ajuda</li></Link>
            <Link href="/"><li>Minha Conta</li></Link>
            </ul>

        </div>
        <div className="icon">
            <FaShoppingCart />
            <div>
            <span>1</span>
            </div>
        </div>
    </Nav>
    )
}