import React from 'react'
import styled from 'styled-components'


const MyDivider = styled.hr`
  width: 156px;
  height: 2px;
  opacity: 0.5;
  background-color: #000000;
  margin: ${props => props.margin ?? "200px"} auto;
`
export const Divider = ({
  ...props
}) => {
  return (
    <MyDivider {...props}/>
  )
}

export default Divider
