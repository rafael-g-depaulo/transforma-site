import React from 'react'
import styled from 'styled-components'

import Title from './Title'
import Text from './Text'
import Map from 'Components/Map'

import Head from '../Map/Head'

const MyAddress = styled.div`
  grid-area: "address";
`

const Retangulo = styled.div`
  height: 240px;
  /* background-color: #000; */
  margin: 16px 0;
`

const MyText = styled(Text)`
  font-size: 16px;
`

export const Address = ({
  ...props
}) => {
  return (
    <MyAddress>
      <Title>Endereço</Title>
      <Retangulo><Map /><Head /></Retangulo>
      <MyText>SCN Quadra 01, número 79, bloco F, sala 512 –<br/>Ed. América Office Tower, Asa Norte, Brasília – DF, CEP: 70.711-905</MyText>
    </MyAddress>
  )
}

export default Address
