import React from 'react'
import styled from 'styled-components'
import { LargeBreakpoint } from 'Themes/default'

const MyText = styled.h2`
  font-family: 'Open Sans';
  font-weight: normal;
  text-align: justify;
  color: #000000;
  column-count: ${props => props.columns ?? 1};
  column-gap: 30px;

  font-size: 16px;

  @media (min-width: ${LargeBreakpoint}) {
    font-size: 20px;
  }
`

export const Text = ({
  ...props
}) => {
  return (
    <MyText {...props}/>
  )
}

export default Text
