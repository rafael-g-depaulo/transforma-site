import React from 'react'
import styled from 'styled-components'

import Institute from './Institute'
import Mission from './Mission'

const Spacer = styled.div`
  & > * {
    margin-top: 50px;
    &:last-child {
      margin-bottom: 50px;
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
      <Divider />
    </Spacer>
  )
}

export default ContentSection
