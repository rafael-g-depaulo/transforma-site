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
  grid-gap: 50px 0;

  margin-top: 40px;
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
