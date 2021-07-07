import { Nav, ModalContainer } from './styles'
import { FaShoppingCart, FaWindowClose } from "react-icons/fa";
import Link  from 'next/link';
import Modal from 'react-modal';
import { useState } from 'react';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '90%'
  },
};

export function NavBar () {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }

    return (
    <Nav>
        <Link href='/'>
            <img src="./logo.png" alt="topprint-logo" />
        </Link>

        <div>
            <ul>
            <Link href="/"><li>Ajuda</li></Link>
            <li  onClick={openModal} >Minha Conta</li>
            </ul>

        </div>
        <div className="icon">
            <Link href='/basket'>
                <FaShoppingCart />
            </Link>
            <div>
            <span>1</span>
            </div>
        </div>

        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <ModalContainer>
                    <section>
                        <h1>Criar Conta</h1>
                        <form action="">
                            <label htmlFor="email"><input type="email" placeholder="E-mail" required/></label>
                            <label htmlFor="password"><input type="password" placeholder="Senha" required/></label>
                            <label htmlFor="password_confirmation"><input type="password" placeholder="Confirmação de Senha" required/></label>
                            <button type="submit">Criar Conta</button>
                        </form>
                    </section>
                    <div>
                        <h1>Login</h1>
                        <form action="">
                            <label htmlFor="email"><input type="email" placeholder="E-mail" required/></label>
                            <label htmlFor="password"><input type="password" placeholder="Senha" required/></label>
                            <button type="submit">Entrar</button>
                        </form>
                    </div>
                    <FaWindowClose 
                        className='closeModal'
                        onClick={closeModal} />
                </ModalContainer>
            </Modal>
        </div>
    </Nav>
    )
}