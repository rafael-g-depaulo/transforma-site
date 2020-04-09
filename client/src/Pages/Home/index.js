import React from 'react'
import styled from 'styled-components'

import Navbar from 'Components/Navbar'
import Banner from 'Components/Banner'
import Footer from 'Components/Footer'
import Divider from 'Components/Divider'

import ContentSection from './ContentSection'
import Team from './Team'
import Experiences from './Experiences'
import { useRef } from 'react'

const Rest = styled.div`
  background-color: red;
  /* width: 100vw; */
  height: 60vh;
`

export const Home = ({
  ...props
}) => {

  const institutoRef = useRef()
  const gestoresRef = useRef()
  const experienciasRef = useRef()
  const contatoRef = useRef()

  return (<>
    <Navbar institutoRef={institutoRef} gestoresRef={gestoresRef} experienciasRef={experienciasRef} contatoRef={contatoRef}/>
    <Banner />
    <ContentSection ref={institutoRef} />
    <Divider margin="100px" />
    <Team ref={gestoresRef}/>
    <Divider margin="100px" />
    <Experiences experienciasRef={experienciasRef}/>
    <Footer contatoRef={contatoRef}/>
  </>)
}

export default Home
