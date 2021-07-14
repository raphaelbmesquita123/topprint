import styled from 'styled-components'

export const NavContainer = styled.nav`
    display: flex;
    max-width: 1000px;
    margin: 0 auto;
    height: 4rem;
    padding: 0rem 2rem;

    section{
        display: flex;
        width:100%;
        justify-content: space-around;
        align-items: center;
    
        img{
            height: 2rem;
            cursor: pointer;
        }

        .navigation{

            ul{
                display: flex;

                li{
                    text-decoration: none;
                    list-style: none;
                    color: var(--gray-300);
                    cursor: pointer;

                    &:first-child {
                        margin-right: 1rem;
                    }

                    &:hover {
                        color: var(--blue)
                    }
                }
            }

        }

        .userLoged{
            display: flex;
            align-items: center;
            font-size: 0.9rem;
            background-color: var(--blue);
            padding: 0.5rem;
            color: white;
            cursor: pointer;
            small {
                margin-right: 1rem;
            }
        }

        @media (max-width:650px ){
            .userLoged{
                position: absolute;
                top: 4rem;
                right: 2rem;
            }
        }

        .shopCart{
            display: flex;
            position: relative;
            cursor: pointer;
            font-size: 1.5rem;
            color: var(--gray-300);

            div{
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                background: var(--blue);
                width: 1.3rem;
                height: 1.3rem;
                border-radius: 100%;
                top: -10px;
                right: -10px;
                
                span{
                    font-size: 0.7rem;
                    color: white;
                }
            }
        }
    }

`

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 100%;
    position: relative;
    background-color: var(--blue);

    section{
        position: relative;
        width: 18rem;


        h1{
            color: var(--white);
            font-size: 2rem;
        }

        form{
            display: flex;
            flex-direction: column;

            span{
                position: absolute;
                font-size: 0.8rem;
                bottom: 1.4rem;
                color: var(--white);
                cursor: pointer;
            }
            button{
                align-self: flex-end;
                padding: 0.5rem;
                margin-top: 0.6rem;
                border: none;
                color: var(--white);
                background: var(--darkblue);
            }
        }
    }

    .loginContainer{
        position: relative;
        width: 18rem;

        h1{
            color: var(--white);
            font-size: 2rem;
        }
        form{
            display: flex;
            flex-direction: column;
            label{

                input{
                    width: 100%;
                    padding: 1rem;
                    border: none;
                    margin-top: 0.6rem;
                }
            }
            span{
                position: absolute;
                font-size: 0.8rem;
                color: var(--white);
                cursor: pointer;
                margin-top: 3rem;
                z-index: 2;
                bottom: -2rem;
            }
            button{
                align-self: flex-end;
                padding: 0.5rem;
                margin-top: -2rem;
                border: none;
                color: var(--white);
                background: var(--darkblue);
            }
        }
    }
    .googleLogin{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 11rem;
        margin-top:1rem;
        cursor: pointer;
        background-color: var(--gray-100);
        padding: 0.4rem;
        img{
            width: 1.5rem;
        }

        p{
            font-size: 0.8rem;
            color: var(--gray-500);
        }
    }
    .closeModal{
        position: absolute;
        top:1rem;
        right: 1rem;
        color: var(--white);
        cursor: pointer;
    }
`

