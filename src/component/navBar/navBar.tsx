import { Nav, ModalContainer } from './styles'
import { FaShoppingCart, FaWindowClose } from "react-icons/fa";
import Link  from 'next/link';
import Modal from 'react-modal';
import { useState } from 'react';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField } from './textField'

import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


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

type CreateUserAccount = {
    email: string
    password: string
    password_confirmation: string
  }

const createUserAccountSchema = yup.object().shape({
    email: yup.string().required('E-mail required').email('Invalid E-mail'),
    password: yup.string().required('Password required').min(6, 'minimum 6 characters'),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'Passwords must match')
    
  });

export function NavBar () {

    const [modalIsOpen, setIsOpen] = useState(false);

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserAccountSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserAccount> = async (values) => {
        console.log(values)
        toast.error("Conta criada");
    }

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
            <Link href='/basket' >
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
                        <form onSubmit={handleSubmit(handleCreateUser)}>

                            <label htmlFor="email">
                                <TextField 
                                    name="email"
                                    type="email" 
                                    placeholder="E-mail"
                                    error={formState.errors.email}
                                    {...register('email')}
                                />
                            </label>

                            <label htmlFor="password">
                                <TextField 
                                    name="password"
                                    type="password" 
                                    placeholder="Password"
                                    error={formState.errors.password}
                                    {...register('password')}
                                />
                            </label>
                            <label htmlFor="password_confimartion">
                                <TextField 
                                    name="password_confirmation"
                                    type="password" 
                                    placeholder="Password Confimartion"
                                    error={formState.errors.password_confirmation}
                                    {...register('password_confirmation')}
                                />
                            </label>
                            
                            <button type="submit">Criar Conta</button>
                        </form>
                    </section>

                    <section className="loginContainer">
                        <h1>Login</h1>
                        <form action="">
                            <label htmlFor="email"><input type="email" placeholder="E-mail" required/></label>
                            <label htmlFor="password"><input type="password" placeholder="Senha" required/></label>
                            <button type="submit">Entrar</button>
                        </form>
                    </section>
                    <FaWindowClose 
                        className='closeModal'
                        onClick={closeModal} />
                </ModalContainer>

            </Modal>
        </div>
    </Nav>
    )
}