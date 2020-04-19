import React from 'react'
import styled from 'styled-components'

import Title from './Title'
import Text from './Text'
import Map from 'Components/Map'

import Head from '../Map/Head'
import useWidth from 'Hooks/useWidth'
import { LargeBreakpoint, bodyPadding } from 'Themes/default'

const MyAddress = styled.div`
  grid-area: address;
`

const Retangulo = styled.div`
  height: 240px;
  /* background-color: #000; */
  margin: 16px 0;
`

const MyText = styled(Text)`
  padding: 0 ${bodyPadding};
  font-size: 12px;
  
  @media (min-width: ${LargeBreakpoint}) {
    font-size: 16px;
  }
`

export const Address = ({
  ...props
}) => {

  const width = useWidth()
  const isMobile = width < parseInt(LargeBreakpoint)

  return (
    <MyAddress>
      <Title textAlign={isMobile ? "center" : "left"}>Endereço</Title>
      <Retangulo><Map /><Head /></Retangulo>
      <MyText>SCN Quadra 01, número 79, bloco F, sala 512 –<br/>Ed. América Office Tower, Asa Norte, Brasília – DF, CEP: 70.711-905</MyText>
    </MyAddress>
  )
}

export default Address
