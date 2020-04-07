import React from 'react'
import styled from 'styled-components'

import Institute from './Institute'
import Mission from './Mission'
import Vision from './Vision'
import Values from './Values'
import { bodySize } from 'Themes/default'

const Spacer = styled.div`
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
    <Spacer>
      <Institute />
      <Mission />
      <Vision />
      <Values />
    </Spacer>
  )
}

export default ContentSection
