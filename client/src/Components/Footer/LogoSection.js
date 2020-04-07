import React from 'react'
import styled from 'styled-components'

import logo from './logo.png'

const MyLogoSection = styled.div`
  grid-area: "logo";
`

const Logo = styled.img`
  width: 100%;
  object-fit: contain;

  filter: contrast(0) brightness(10);
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
