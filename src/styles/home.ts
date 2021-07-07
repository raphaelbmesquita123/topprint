import styled from 'styled-components'


export const Banner = styled.div`
    display: block;
    height: 300px;
    width: 100%;
    background-image: url('./banner.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
`

export const ContainerAttention = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--darkblue);
    padding: 2rem;
    color: var(--gray-100);
    text-align: center;
    h1{
        margin-bottom: 1rem;
    }
    small{
        max-width: 60rem;
        span{
            color: orange;
        }
    }
`

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;
    background: green;


    .cardLona, .cardStick{
        h1{
            margin-bottom: 2rem;
            color: var(--blue);
        }
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--white);
        width: 50%;
        padding: 3rem 0rem;
        min-width: 18rem;
        transition: background-color 0.4s ease-in-out;

    }

    .cardStick{
        background-color: var(--blue);
        h1{
            color: var(--white);
        }
    }
    @media (max-width: 520px){
        .cardLona,
        .cardStick{
            width: 100%;
        }
    }
`