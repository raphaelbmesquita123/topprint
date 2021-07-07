import styled from 'styled-components'

export const ContainerLona = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 22rem;
    padding: 1rem;

    img {
        width: 14rem;

    }

    form{ 
        display: flex;
        flex-direction: column;
        width:100%;
        margin-top: 1rem;

        h3{
            text-align: center;
            padding: 1rem 0.5rem;
            color: var(--blue);
        }

        label{
            background-color: var(--gray-50);
            padding: 1rem 1rem;
            font-size: 0.8rem;

            &:nth-child(2n+1){
                background-color: var(--white);
            }


            input{
                width: 5rem;
                height: 2rem;
                padding-left: 0.5rem;
                border: none;
                box-shadow: 1px 1px 5px var(--gray-300);
                margin: 0rem 0.5rem;
            }
            
            input[type='text']{
                margin: 0;
                margin-top: 1rem;
                width: 100%;
            }
            select {
                /* --webkit-appearance: none;
                --moz-appearance: none;
                -o-appearance: none;
                -ms-appearance: none; */
                width: 6rem;
                height: 2rem;
                padding-left: 0.5rem;
                border: none;
                box-shadow: 1px 1px 5px var(--gray-300);
                margin: 0rem 0.5rem;
            }

        }
     
        button{
            font-size:  0.8rem;
            width: 10rem;
            padding: 0.5rem;
            border: none;
            background-color: var(--blue);
            color: white;
            font-weight: bold;
            align-self: flex-end;
            margin-top: 1rem;
            transition: background-color 0.2s ease-in-out;

            &:hover{
                background-color: var(--darkblue);
            }
        }
    }

`
