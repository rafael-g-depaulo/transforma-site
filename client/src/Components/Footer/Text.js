import React from 'react'
import styled from 'styled-components'

const MyText = styled.h5`
  font-size: 18px;
  line-height: 1;
  text-align: left;
`

export const Text = ({
  ...props
}) => {
  return (
    <MyText {...props} />
  )
}

export default Text
