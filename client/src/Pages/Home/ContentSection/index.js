import React from 'react'
import styled from 'styled-components'

import Institute from './Institute'
import Mission from './Mission'
import Vision from './Vision'
import Values from './Values'
import { bodySize } from 'Themes/default'
import { forwardRef } from 'react'

const Spacer = styled.div`
  & > * {
    margin-top: 80px;
  }
  max-width: ${bodySize};
  margin: auto;
`

export const ContentSection = forwardRef(({
  ...props
  },
  institutoRef,
) => {
  return (
    <Spacer>
      <div ref={institutoRef}>
      <Institute />
      </div>
      <Mission />
      <Vision />
      <Values />
    </Spacer>
  )
})

export default ContentSection
