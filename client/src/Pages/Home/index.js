import React from 'react'

import Navbar from 'Components/Navbar'
import Banner from 'Components/Banner'
import Footer from 'Components/Footer'
import Divider from 'Components/Divider'

import Institute from './Institute'
import Team from './Team'
import Experiences from './Experiences'
import styled from 'styled-components'
import { navHeight } from 'Themes/default'

const Body = styled.div`
  padding-top: ${navHeight};
`

export const Home = ({
  ...props
}) => {

  return (<Body>
    <Navbar />
    <Banner />
    <Institute />
    <Divider margin="100px" />
    <Team />
    <Divider margin="100px" />
    {/* <Experiences /> */}
    {/* <Footer /> */}
  </Body>)
}

export default Home
