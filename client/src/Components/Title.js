import React from 'react'
import styled from 'styled-components'
import { LargeBreakpoint } from 'Themes/default'

const MyTitle = styled.h2`
  font-family: 'Open Sans';
  font-weight: bold;
  text-align: center;
  color: #452778;
  margin-bottom: 15px;

  font-size: 24px;

  @media (min-width: ${LargeBreakpoint}) {
    font-size: 30px;
  }
`

export const Title = ({
  ...props
}) => {
  return (
    <MyTitle {...props}/>
  )
}

export default Title
