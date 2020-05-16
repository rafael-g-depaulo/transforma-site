import React, { useState } from 'react'

import styled from 'styled-components'
import { navHeight } from 'Themes/default'

import Navbar from 'Components/Navbar'
import Footer from 'Components/Footer'

const Body = styled.div`
  /* remove the 'props.navHeight+"px" ?? ' part to stop main text from changing when navbar height changes*/
  padding-top: ${props => props.navHeight+"px" ?? navHeight};
`

export const Page = ({
  children,
  ...props
}) => {

  const [ navHeight, setNavHeigth ] = useState(0)

  return (
    <Body navHeight={navHeight}>
      <Navbar getHeight={setNavHeigth}/>
      { children }
      <Footer />
    </Body>
  )
}

export default Page
