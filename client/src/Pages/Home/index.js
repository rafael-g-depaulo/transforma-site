import React, { useRef } from 'react'

import Navbar from 'Components/Navbar'
import Banner from 'Components/Banner'
import Footer from 'Components/Footer'
import Divider from 'Components/Divider'

import ContentSection from './ContentSection'
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

  const institutoRef = useRef()
  const gestoresRef = useRef()
  const experienciasRef = useRef()
  const contatoRef = useRef()

  return (<Body>
    <Navbar institutoRef={institutoRef} gestoresRef={gestoresRef} experienciasRef={experienciasRef} contatoRef={contatoRef}/>
    <Banner />
    <ContentSection ref={institutoRef} />
    <Divider margin="100px" />
    <Team ref={gestoresRef}/>
    <Divider margin="100px" />
    <Experiences experienciasRef={experienciasRef}/>
    <Footer contatoRef={contatoRef}/>
  </Body>)
}

export default Home
