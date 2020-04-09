import React from 'react'
import styled from 'styled-components'

import { bodySize } from 'Themes/default'

import Title from 'Components/Title'

import Value from './Value'

const Container = styled.div`
  max-width: ${bodySize};
  padding: 0 2.5%;
  margin: auto;
`

const TextArea = styled.div`
  grid-area: text-area;
`

const ValueContainer = styled.div`  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`

const MyTitle = styled(Title)`
  text-align: center;
`

const values = [
  "Comunidade",
  "Arte",
  "Inclusão de gênero",
  "Diversidade",
  "Acessibilidade",
  "Inclusão Racial",
  "Cultura",
  "Sustentabilidade",
  "Empreendedorismo",
  "Memória",
  "Inclusão sócio-cultural",
]

const colors = [
  // "#452778",
  "#e51c20",
  "#204b9b",
  "#65b32e",
  "#f07e13",
]

export const Values = ({
  ...props
}) => {
  return (
    <Container>
      <TextArea>
        <MyTitle>Valores</MyTitle>
        <ValueContainer>
          {values.map((value, i) => (
            <Value key={value} color2={colors[i % colors.length]}>{value}</Value>
          ))}
        </ValueContainer>
      </TextArea>
    </Container>
  )
}

export default Values
