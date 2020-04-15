import React from 'react'
import styled from 'styled-components'

import InstituteIntro from './Institute'
import Mission from './Mission'
import Vision from './Vision'
import Values from '../ContentSection/Values'
import { bodySize } from 'Themes/default'
import { Element } from 'react-scroll'

const Container = styled(Element)`
  & > * {
    margin-top: 80px;
  }
  max-width: ${bodySize};
  margin: auto;
`

export const ContentSection = ({
  ...props
}) => {
  return (
    <Container name="Institute">
      <InstituteIntro />
      <Mission />
      <Vision />
      <Values />
    </Container>
  )
}

export default ContentSection
