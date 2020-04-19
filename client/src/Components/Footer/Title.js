import React from 'react'
import styled from 'styled-components'

const MyTitle = styled.h5`
  font-size: 25px;
  font-weight: bold;
  line-height: 1;
  text-align: ${props => props.textAlign ?? "left"};
  text-transform: uppercase;
`

export const Title = ({
  ...props
}) => {
  return (
    <MyTitle {...props} />
  )
}

export default Title
