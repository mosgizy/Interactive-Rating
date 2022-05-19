import React from 'react'
import { Paragraph, HeaderOne } from '../styles/ratingStyles'
import { ThankYouContainer, ThankYouWrapper, Image, RateInfo } from '../styles/modalStyles'
import illustration from '../assets/illustration-thank-you.svg'
import { useGlobal } from '../App'

const Modal = () => {
  const {rate,display} = useGlobal()
  return (
    <ThankYouContainer display={display === false ? "hide" : ""}>
      <ThankYouWrapper>
        <Image src={illustration} />
        <RateInfo>You selected {rate} out of 5</RateInfo>
        <HeaderOne>Thank you!</HeaderOne>
        <Paragraph>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</Paragraph>
      </ThankYouWrapper>
    </ThankYouContainer>
  )
}

export default Modal
