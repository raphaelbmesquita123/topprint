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
    }

    div{
        display: flex;

        ul{
            display: flex;

            a{
                text-decoration: none;
                list-style: none;
                color: var(--gray-300);

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
export const Banner = styled.div`
    display: block;
    height: 300px;
    width: 100vw;
    background-color: orange;

`

export const Container = styled.div`

`