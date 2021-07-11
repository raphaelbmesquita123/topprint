import { NavContainer, ModalContainer } from './styles'
import { FaShoppingCart, FaWindowClose } from "react-icons/fa";
import Link  from 'next/link';
import Modal from 'react-modal';
import { useContext, useRef, useState } from 'react';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField } from './textField'

import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { auth } from "../../services/firebase";
import { AuthContext } from '../../context/AuthContext';

// import { useAuth } from '../../provider/AuthProvider';

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
    }

type SignIn = {
    email: string
    password: string
    }

const createUserAccountSchema = yup.object().shape({
    email: yup.string().required('E-mail required').email('Invalid E-mail'),
    password: yup.string().required('Password required').min(6, 'minimum 6 characters'),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'Passwords must match')
    
});

export function NavBar () {
    const [ createAccount, setCreateAccount ] = useState(false)
    const [ modalIsOpen, setIsOpen ] = useState(false);

    const { user } = useContext(AuthContext);

    console.log(user)

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserAccountSchema)
    })


    const handleCreateUser: SubmitHandler<CreateUserAccount> = async (values) => {
        try {
            await auth.createUserWithEmailAndPassword(
                values.email, 
                values.password
            );
            toast.success('Conta criada com sucesso!')
            setCreateAccount(false)
        } catch (error) {
            if( error.code === 'auth/email-already-in-use'){
                toast.error('E-mail já ultilizado')
            }
        }
    }

    const handleSignIn: SubmitHandler<SignIn>  = async (values) => {
        try {
            console.log(values.email, values.password)
            await auth.signInWithEmailAndPassword(
                values.email, 
                values.password
            )
            
            toast.success('Seja bem Vindo!')

            closeModal()

        } catch (error){
            console.log(error)
            toast.error('Email ou Senha Errada!')
        }
    };

    const handleSignOut = async () => {
        await auth.signOut();
    };

    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }

    return (
    <NavContainer>
        <Link href='/'>
            <img src="./logo.png" alt="topprint-logo" />
        </Link>

        <div>
            <ul>
            <Link href="/">
                <li>Ajuda</li>
            </Link>
                <li onClick={openModal} >Minha Conta</li>
            </ul>
        </div>
        <Link href='/basket' >
            <div className="icon">
                    <FaShoppingCart />
                <div>
                <span>1</span>
                </div>
            </div>
        </Link>

        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                <ModalContainer>
                    {
                        createAccount? 
                        <section>
                            <h1>Criar Conta</h1>
                            <form 
                                onSubmit={handleSubmit(handleCreateUser)}
                                >
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
                                <span onClick={() => setCreateAccount(false)}>LOGIN</span>
                                <button type="submit">Criar Conta</button>
                            </form>
                        </section> 
                        :
                        <section className="loginContainer">
                            <h1>Login</h1>
                            <form 
                                onSubmit={handleSubmit(handleSignIn)}
                            >
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
                                <span onClick={() => setCreateAccount(true)}>CRIAR CONTA</span>

                                <button type="submit">Entrar</button>
                            </form>
                        </section>
                    }
                    <FaWindowClose 
                        className='closeModal'
                        onClick={closeModal} />
                </ModalContainer>

            </Modal>
        </div>
    </NavContainer>
    )
}