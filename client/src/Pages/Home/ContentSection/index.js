import React from 'react'
import styled from 'styled-components'

import Institute from './Institute'
import Mission from './Mission'
import Vision from './Vision'

const Spacer = styled.div`
  & > * {
    margin-top: 80px;
    &:last-child {
      margin-bottom: 80px;
    }
  }
`

const Divider = styled.hr`
  width: 156px;
  height: 2px;
  opacity: 0.5;
  background-color: #000000;
`

export const ContentSection = ({
  ...props
}) => {
  return (
    <Spacer>
      <Institute />
      <Mission />
      <Vision />
      <Divider />
    </Spacer>
  )
}

export default ContentSection
