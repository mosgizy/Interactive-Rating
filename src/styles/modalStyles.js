import styled from 'styled-components'
import { Container } from './ratingStyles'

export const ThankYouContainer = styled(Container)`
    
`

export const ThankYouWrapper = styled.div`
    display:flex ;
    flex-direction:column ;
    align-items:center;
    justify-content:center ;
    gap:1.5rem;
    text-align:center;
`

export const Image = styled.img`

`

export const RateInfo = styled.h5`
    background-color:hsl(213, 19%, 18%) ;
    color:hsl(25, 97%, 53%) ;
    border-radius:1rem;
    text-align:center;
    width:fit-content ;
    padding:.25rem 1rem ;
    box-shadow: 0 0 10px hsla(216, 12%, 8%,65%) ;
`