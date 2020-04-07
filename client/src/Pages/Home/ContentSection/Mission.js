import React from 'react'
import styled from 'styled-components'

import { bodySize } from 'Themes/default'

import Title from 'Components/Title'
import Text from 'Components/Text'

import picture from './mission.png'

const Container = styled.div`
  /* padding-top: 50px; */
  max-width: ${bodySize};
  padding: 0 2.5%;
  margin: auto;

  display: grid;
  
  grid-template-columns: minmax(auto, 40%) 1fr;
  grid-template-rows: 1fr;
  grid-gap: 30px;
  grid-template-areas: "picture text-area";

  min-height: 200px;

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

const missionText = ""
  + "Propor e executar projetos culturais, em espaços próprios ou em ocupações, visando a máxima satisfação do(s) público(s) e a eficiência e eficácia na aplicação dos recursos dos patrocinadores e apoiadores públicos e privados."

export const Mission = ({
  ...props
}) => {
  return (
    <Container>
      <Picture src={picture}/>
      <TextArea>
        <MyTitle>Missão</MyTitle>
        <Text>{missionText}</Text>
      </TextArea>
    </Container>
  )
}

export default Mission