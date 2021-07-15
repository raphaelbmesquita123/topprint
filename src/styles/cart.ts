import styled from 'styled-components'

export const Container = styled.div`
    background-color: orange;
    padding: 1rem;
    background-color: var(--gray-100);

    main{
        max-height: 500px;
        padding: 1rem;
        overflow-y: scroll;
    }
    `

export const ItemCartContainer = styled.div`
    display: flex;
    max-width: 1080px;
    margin: 0 auto;
    margin-top: 1rem;

    section {
        display: flex;
        flex-direction: column;
        font-size: 0.8rem;
        word-break: break-all;
        width: 100%;    
        background-color: var(--white);
        &:nth-child(2n+1){
        }

        main{
            display: flex;
            overflow: hidden;
            p{
                margin-left: 2rem;
                min-width: 5rem;

                &:first-child{
                    margin-left: 0rem;
                }
            }
        }

        div{
            margin:0;
            padding:0;
            /* margin-top: 0.5rem; */
            p{
                padding: 0rem 1rem 0.5rem 1rem;
            }
        }
    }

    @media (max-width: 600px){
        flex-direction: column;
        section {
            main{
                flex-direction: column;
                p{
                    margin-left:0rem;
                    margin-top: 0.3rem;
                }
            }
        }
    }
`

export const PriceOrRemove = styled.div`
    display: flex;
    flex-direction: column;
    width: 9rem;
    p{
        display: flex;
        justify-content:center;
        align-items:center;
        width: 100%;
        height: 50%;
        

        &:first-child{
            background: var(--gray-100);
        }

        &:last-child{
            background: red;
            color: white;
            cursor: pointer;
        }
        
        
    }
    @media (max-width: 600px){
            flex-direction: row;
            width: 100%;
            height: 3rem;
            p{
                display: flex;
                justify-content:center;
                align-items:center;
                width: 100%;
                height: 100%;
            }
        }
`