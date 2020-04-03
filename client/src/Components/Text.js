import React from 'react'
import styled from 'styled-components'

const MyText = styled.h2`
  font-family: 'Open Sans';
  font-size: 20px;
  font-weight: normal;
  text-align: justify;
  color: #000000;
  column-count: ${props => props.columns ?? 1};
  column-gap: 30px;
`

export const Text = ({
  ...props
}) => {
  return (
    <MyText {...props}/>
  )
}

export default Text
