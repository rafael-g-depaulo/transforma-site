import React from 'react'
import styled from 'styled-components'

const MyTitle = styled.h2`
  font-family: 'Open Sans';
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  color: #452778;
  margin-bottom: 15px;
`

export const Title = ({
  ...props
}) => {
  return (
    <MyTitle {...props}/>
  )
}

export default Title
