import React from 'react'
import styled from 'styled-components'

import logo from './logo.png'
import { LargeBreakpoint } from 'Themes/default'

const MyLogoSection = styled.div`
  grid-area: logo;
  margin: 30px auto 0 auto;
  width: 60%;
  
  @media (min-width: ${LargeBreakpoint}) {
    margin: auto;
    width: auto;
  }
`

const Logo = styled.img`
  width: 100%;
  object-fit: contain;

  /* not necessary if using a white picture */
  /* filter: contrast(0) brightness(10); */
`

export const LogoSection = ({
  ...props
}) => {
  return (
    <MyLogoSection>
      <Logo src={logo}/>
    </MyLogoSection>
  )
}

export default LogoSection
