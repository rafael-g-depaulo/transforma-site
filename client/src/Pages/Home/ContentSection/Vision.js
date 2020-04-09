import React from 'react'
import styled from 'styled-components'

import { bodySize } from 'Themes/default'

import Title from 'Components/Title'
import Text from 'Components/Text'

import picture from './vision.png'

const Container = styled.div`
  /* padding-top: 50px; */
  max-width: ${bodySize};
  padding: 0 2.5%;
  margin: auto;

  display: grid;
  
  grid-template-columns: 1fr minmax(auto, 30%);
  grid-template-rows: 1fr;
  grid-gap: 30px;
  grid-template-areas: "text-area picture";
`

const TextArea = styled.div`
  grid-area: text-area;
`

const Picture = styled.div`
  grid-area: picture;

  /* max-width: 100%; */
  /* object-fit: contain; */

  background-image: url("${props => props.src}");
  background-size: cover;
  background-position: center;
`

const MyTitle = styled(Title)`
  text-align: left;
`

const visionText = ""
  + "Consolidar a compreensão de que a Cultura (nas suas diferentes manifestações, linguagens e gêneros artísticos), associada à educação e ao meio ambiente são determinantes no desenvolvimento humano e social e que a Economia Criativa constitui o campo da nossa ação transformadora para o desenvolvimento da economia, associada ao Turismo, a partir da preservação da Memória e da Produção Cultural e Artística das cidades, aberto aos arranjos com entes públicos e privados para a consecução desses propósitos."

export const Mission = ({
  ...props
}) => {
  return (
    <Container>
      <Picture src={picture}/>
      <TextArea>
        <MyTitle>Visão</MyTitle>
        <Text>{visionText}</Text>
      </TextArea>
    </Container>
  )
}

export default Mission
