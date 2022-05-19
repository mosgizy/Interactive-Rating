import React, { useState } from 'react'
import { Container, Star, Icon, HeaderOne, Paragraph, RatingWrapper, RatingButton, Submit } from '../styles/ratingStyles'
import { GlobalStyle } from '../styles/globalStyles'
import star from '../assets/icon-star.svg'
import { useGlobal } from '../App'

const Rating = () => {
    const [active, setActive] = useState(0)

    const {setRate,display,setDisplay} = useGlobal()

    const changeActive = (e) => {
        setRate(() => e.target.innerText)
        setActive(() => e.target.innerText)
    }

    const handleSubmit = () => {
        setDisplay(true)
    }

    const rating = ["1", "2", "3", "4", "5"];

    return (
        <Container display={display === true ? "hide" : ""}>
            <GlobalStyle />
            <Star>
                <Icon src={star} />
            </Star>
            <HeaderOne>
                How did we do?
            </HeaderOne>
            <Paragraph>
                Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering
            </Paragraph>
            <RatingWrapper>
                {
                    rating.map((rates, index) => {
                        return <RatingButton key={index} onClick={(e) => changeActive(e)} active={active === rates ? "active" : ""}>{rates}</RatingButton>
                    })
                }
            </RatingWrapper>
            <Submit onClick={() => handleSubmit()}>submit</Submit>
        </Container>
    )
}

export default Rating
