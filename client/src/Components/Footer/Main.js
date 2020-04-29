import React from 'react'
import styled from 'styled-components'

import Address from './Address'
import Contact from './Contact'
import LogoSection from './LogoSection'
import { LargeBreakpoint } from 'Themes/default'

const Container = styled.div`

  background-color: rgb(31,31,31);
  color: #FFFFFF;
  width: 100%;
  display: grid;

  padding: 0;
  grid-gap: 30px;
  grid-template-areas: "logo" "contact" "address";
  grid-template-rows: auto auto 350px;

  @media (min-width: ${LargeBreakpoint}) {
    grid-gap: 40px;
    padding: 40px 70px 10px 70px;
    grid-template-areas: "address contact logo";
    grid-template-columns: 350px 1fr 350px;
    grid-template-rows: 1fr;
  }

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
