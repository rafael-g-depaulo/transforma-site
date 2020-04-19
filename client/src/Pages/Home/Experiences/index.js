import React from 'react'
import styled from 'styled-components'

import Title from 'Components/Title'
import Text from 'Components/Text'

import { bodySize, LargeBreakpoint, bodyPadding } from 'Themes/default'
import ExperiencesList from './ExperiencesList'

import rawExperiences from './experiences'
import { Element } from 'react-scroll'
import useWidth from 'Hooks/useWidth'

const Container = styled(Element)`
  max-width: ${bodySize};
  padding: ${bodyPadding};
  margin: auto;
  
  @media (min-width: ${LargeBreakpoint}) {
    margin-bottom: 200px;
  }
`

const MyText = styled(Text)`
  margin-bottom: 20px;
  margin-top: 15px;

  @media (min-width: ${LargeBreakpoint}) {
    margin-bottom: 60px;
    margin-top: 40px;
  }
`

const text = ""
  + "O maior capital do Instituto Transforma é a experiência acumulada dos seus gestores e gestoras no campo da Cultura. Todes são Agentes Culturais diretamente ligados à produção artística do DF, como proponentes e/ou executores."
  + " São produtores, artistas e dirigentes que se unem em prol do desenvolvimento da Economia Criativa, da Cultura, da Educação, do Meio Ambiente, do Esporte e do Turismo."

export const Experiences = ({
  experienciasRef,
  ...props
}) => {
  
  // check if is in mobile
  const width = useWidth()
  const isMobile = width < parseInt(LargeBreakpoint)

  const experiences = rawExperiences.map(({imgs, ...rest}) => ({
    imgs: imgs.map(img => ({
      ...img,
      src: `${process.env.PUBLIC_URL}/experiences/${img.src}`
    })),
    ...rest
  }))

  return (<Container name="Experiences">
    <Title>Experiências que se somam</Title>
    <MyText columns={isMobile ? 1 : 2}>{text}</MyText>
    <ExperiencesList experiences={experiences} {...props} />
  </Container>)
}

export default Experiences
