import React from 'react'
import styled from 'styled-components'

import Navbar from 'Components/Navbar'
import Banner from 'Components/Banner'

import ContentSection from './ContentSection'

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
    <Rest></Rest>
  </>)
}

export default Home
