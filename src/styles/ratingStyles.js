import styled from 'styled-components'
import { css } from 'styled-components'

export const Container = styled.main`
    background-color:hsl(213,19%,18%);
    border-radius:1.5rem;
    padding:1.5rem;
    color:white;
    max-width:40ch;
    min-width:15ch;
    display:flex;
    flex-direction:column ;
    gap:1.5rem;

    ${props => props.display === "hide" && css`
        display:none ;
        `
        }
`

export const Star = styled.div`
    /* background-color:hsl(216,12%,8%) ;
     */
    border-radius:50%;
    padding:.8rem;
    display:grid ;
    place-items:center ;
    width:fit-content ;
    height:fit-content;
    box-shadow:0 0 15px rgba(0,0,0,.3)
`

export const Icon = styled.img`
    width:.8rem;
    height:.8rem;
`

export const HeaderOne = styled.h2`
    font-weight:600 ;
    font-size:1.35rem ;
`

export const Paragraph = styled.p`
    color:hsl(216,12%,54%) ;
    line-height:1.6;
    font-size:.85rem ;
`

export const RatingWrapper = styled.div`
    display:flex ;
    justify-content: space-between;
    gap:1rem;
`

export const RatingButton = styled.button`
    border:none ;
    outline:none;
    border-radius:50% ;
    width:3rem ;
    height:3rem ;
    font-weight:700;
    font-size:1rem;
    text-align:center;
    transition:all .35s ease-in-out ;

    ${
    props => props.active === "active" ? css`
        background-color:hsl(217,12%,63%) ;
        color:white ;
    ` : css`
    color:hsl(216, 12%, 54%) ;
        background-color:hsl(213, 19%, 18%) ;
        box-shadow: 0 0 2px 1px hsla(216, 12%, 8%,65%);
    `
    }

    &:hover{
        background-color:hsl(25,97%,53%) ;
        color:white ;
    }
`

export const Submit = styled.button`
    background-color:hsl(25,97%,53%) ;
    border-radius:2rem ;
    color:white ;
    border:none;
    outline:none;
    padding-block: .7rem;
    font-size:1rem ;
    width:100% ;
    text-transform:uppercase;
    transition:all .35s ease-in-out ;

    :hover{
        background-color:white ;
        color:hsl(25,97%,53%) ;
    }
`