import { NavContainer, ModalContainer } from './styles'
import { FaShoppingCart, FaWindowClose } from "react-icons/fa";
import Link  from 'next/link';
import Modal from 'react-modal';
import { useContext, useState } from 'react';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField } from './textField'

import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { auth } from "../../services/firebase";
import { AuthContext } from '../../context/AuthContext';
import firebase from 'firebase';
import { useCart } from '../../provider/CartProvider';


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
    const { cart } = useCart()


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
            await auth.signInWithEmailAndPassword(
                values.email, 
                values.password
            )
            toast.success('Seja bem Vindo!')
            closeModal()

        } catch (error){
            toast.error('Email ou Senha Errada!')
        }
    };

    const googleSignIn = () => {
        console.log('clicked')
        try {
            const provider = new firebase.auth.GoogleAuthProvider()
            auth.signInWithPopup(
                provider
            )
            toast.success('Seja bem Vindo!')
            closeModal()

        } catch (error){
            toast.error('Email não autorizado!')
        }
    }

    const handleSignOut = async () => {
        await auth.signOut();
        console.log('oi')
    };

    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }




    return (
    <NavContainer>
        <section>

        <Link href='/'>
            <img src="./logo.png" alt="topprint-logo" />
        </Link>

        <div className="navigation">
            <ul>
            <Link href="/">
                <li>Ajuda</li>
            </Link>
            { user === null ? 
                <li onClick={openModal} >Minha Conta</li>
            :
             ''
            }
            </ul>
        </div>

        {user ? 
            <div className="userLoged">
                <small>
                    {user.email}
                </small>
                <FaWindowClose onClick={handleSignOut}/>
            </div>
            :
            ''
        }

        <Link href='/cart' >
            <div className="shopCart">
                    <FaShoppingCart />
                <div>
                    <span>{cart.length}</span>
                </div>
            </div>
        </Link>

        </section>
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
                                <div className='googleLogin' onClick={googleSignIn}> 
                                    <img 
                                        src="/google.png" 
                                        alt="Login com Google" 
                                        />
                                    <p>Login com google</p>
                                </div>
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