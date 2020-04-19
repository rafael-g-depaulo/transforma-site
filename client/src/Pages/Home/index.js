import React from 'react'

import Navbar from 'Components/Navbar'
import Banner from 'Components/Banner'
import Footer from 'Components/Footer'
import Divider from 'Components/Divider'

import Institute from './Institute'
import Team from './Team'
import Experiences from './Experiences'
import styled from 'styled-components'
import { navHeight, LargeBreakpoint } from 'Themes/default'
import useWidth from 'Hooks/useWidth'

const Body = styled.div`
  padding-top: ${navHeight};
`

export const Home = ({
  ...props
}) => {

  // check if is in mobile
  const width = useWidth()
  const isMobile = width < parseInt(LargeBreakpoint)
  const dividerMargin = isMobile ? "40px" : "100px"

  return (<Body>
    <Navbar />
    <Banner />
    <Institute />
    <Divider margin={dividerMargin} />
    <Team />
    <Divider margin={dividerMargin} />
    <Experiences />
    <Footer />
  </Body>)
}

export default Home
