import React from 'react'
import styled from 'styled-components'

import Title from './Title'
import Text from './Text'

const MyAddress = styled.div`
  grid-area: "address";
`

const Retangulo = styled.div`
  height: 240px;
  background-color: #000;
  margin: 16px 0;
`

export const Address = ({
  ...props
}) => {
  return (
    <MyAddress>
      <Title>Endereço</Title>
      <Retangulo />
      <Text>Setor Comercial Norte Quadra 01 Bloco F<br/>Brasília – DF, 70711-905</Text>
    </MyAddress>
  )
}

export default Address
