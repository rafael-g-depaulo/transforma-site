import React from 'react'
import styled from 'styled-components'

import { bodySize, LargeBreakpoint } from 'Themes/default'

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

  padding: 0 5px;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 25px 0;

  @media (min-width: ${LargeBreakpoint}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px 0;
    margin-top: 40px;
  }
`

const MyTitle = styled(Title)`
  text-align: center;

  margin-bottom: 35px;
  @media (min-width: ${LargeBreakpoint}) {
    margin-bottom: inherit;
  }
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

export const Values = ({
  ...props
}) => {
  return (
    <Container>
      <TextArea>
        <MyTitle>Valores</MyTitle>
        <ValueContainer>
          {values.map(value => (
            <Value key={value} label={value} />
          ))}
        </ValueContainer>
      </TextArea>
    </Container>
  )
}

export default Values
