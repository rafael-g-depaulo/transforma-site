import React from 'react'

import Navbar from 'Components/Navbar'
import styled from 'styled-components'

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
    <Rest>home</Rest>
  </>)
}

export default Home
