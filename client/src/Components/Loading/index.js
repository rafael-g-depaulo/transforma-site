import React from 'react'
import styled, { keyframes } from 'styled-components'

import logo from './logo.png'

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const pulse = keyframes`
  0% {
    opacity: 100%;
  }
  50% {
    opacity: 50%;
  }
  100% {
    opacity: 100%;
  }
`

const Img = styled.img`
  height: ${ props => props.height ?? "100px" };
  width:  ${ props => props.width ?? "100px" };
  object-fit: contain;

  animation: 2.5s ${pulse} ease-in-out infinite;
`

export const Loading = ({
  ...props
}) => {
  return (
    <Center>
      <Img src={logo} height="150px" width="150px"/>
    </Center>
  )
}

export default Loading
