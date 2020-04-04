import React from 'react'
import styled from 'styled-components'

import Navbar from 'Components/Navbar'
import Banner from 'Components/Banner'

import ContentSection from './ContentSection'
import Team from './Team'

const Rest = styled.div`
  background-color: red;
  width: 100vw;
  height: 60vh;
`

export const Home = ({
  ...props
}) => {
  return (<>
    <Navbar />
    <Banner />
    <ContentSection />
    <Team />
    <Rest></Rest>
  </>)
}

export default Home
