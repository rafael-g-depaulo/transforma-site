import React from 'react'
import styled from 'styled-components'

import InstituteIntro from './Institute'
import Mission from './Mission'
import Vision from './Vision'
import Values from '../ContentSection/Values'
import { bodySize, LargeBreakpoint } from 'Themes/default'
import { Element } from 'react-scroll'

const Container = styled(Element)`
  max-width: ${bodySize};
  margin: auto;
  /* padding: 0 5%; */

  /* mobile */
  & > * {
    margin-top: 20px;
  }

  /* desktop */
  @media (min-width: ${LargeBreakpoint}) {
    & > * {
      margin-top: 80px;
    }
  }

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
