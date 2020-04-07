import React from 'react'
import styled from 'styled-components'

import Navbar from 'Components/Navbar'
import Banner from 'Components/Banner'
import Footer from 'Components/Footer'
import Divider from 'Components/Divider'

import ContentSection from './ContentSection'
import Team from './Team'
import Experiences from './Experiences'

const Rest = styled.div`
  background-color: red;
  /* width: 100vw; */
  height: 60vh;
`

export const Home = ({
  ...props
}) => {
  return (<>
    <Navbar />
    <Banner />
    <ContentSection />
    <Divider margin="100px" />
    <Team />
    <Divider margin="100px" />
    <Experiences />
    <Footer />
  </>)
}

export default Home
