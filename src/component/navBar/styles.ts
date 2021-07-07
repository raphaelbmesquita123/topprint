import styled from 'styled-components'

export const Nav = styled.nav`
    display: flex;
    max-width: 1080px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 4rem;

    img{
        height: 2rem;
        cursor: pointer;
    }

    div{
        display: flex;

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
    .icon{
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
        width: 18rem;


        h1{
            color: var(--white);
            font-size: 2rem;
        }

        form{
            display: flex;
            flex-direction: column;

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

            button{
                align-self: flex-end;
                padding: 0.5rem;
                margin-top: 1rem;
                border: none;
                color: var(--white);
                background: var(--darkblue);
            }
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

