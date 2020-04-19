import React from 'react'
import styled from 'styled-components'

import Text from 'Components/Text'
import Title from 'Components/Title'
import { bodySize, LargeBreakpoint, bodyPadding } from 'Themes/default'
import useWidth from 'Hooks/useWidth'

const Container = styled.div`
  /* padding-top: 50px; */
  max-width: ${bodySize};
  margin: auto;
  padding: 0 ${bodyPadding};
`

const MyText = styled(Text)`
  @media (min-width: ${LargeBreakpoint}) {
    padding-top: 30px;
  }
`

const InstituteText = ""
  + "O Instituto Transforma é uma entidade sem fins lucrativos, com sede em Brasília, que tem como objetivos a proposição, execução e gestão de projetos da Economia Criativa, nos mais variados formatos, linguagens e gêneros artísticos -  em espaços educativos, ambientais, turísticos, esportivos e culturais - e com expertise em gestão de projetos de ocupação."
  + " Uma Organização Social comprometida com a inclusão e a acessibilidade cultural de mulheres, LGBTQIA+, negros, comunidades desassistidas ou em situação de vulnerabilidade, idosos, pessoas com deficiência, entre outras."

export const Institute = ({
  ...props
}) => {

  const width = useWidth()
  const isMobile = width < parseInt(LargeBreakpoint)

  return (
    <Container>
      <Title>O Instituto</Title>
      <MyText columns={isMobile ? 1 : 2}>{InstituteText}</MyText>
    </Container>
  )
}

export default Institute
