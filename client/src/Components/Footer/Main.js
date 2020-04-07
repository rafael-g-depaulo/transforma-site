import React from 'react'
import styled from 'styled-components'

import Address from './Address'
import Contact from './Contact'
import LogoSection from './LogoSection'

const Container = styled.div`
  padding: 40px 70px;
  background-color: rgb(31,31,31);
  color: #FFFFFF;

  display: grid;
  grid-template-areas: "address contact logo";
  grid-template-columns: 350px 1fr 350px;
  grid-gap: 40px;

  width: 100%;
`

export const Main = ({
  ...props
}) => {
  return (
    <Container>
      <Address />
      <Contact />
      <LogoSection />
    </Container>
  )
}

export default Main
