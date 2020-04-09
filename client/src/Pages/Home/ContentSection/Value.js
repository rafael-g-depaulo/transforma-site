import React from 'react'
import styled from 'styled-components'

const MyValue = styled.div`
  background: repeating-linear-gradient(to bottom left, ${props => props.color1} 0%, ${props => props.color1} 50%, ${props => props.color2} 51%, ${props => props.color2} 100%);

  font-size: 2rem;
  padding: 20px;
`

export const Value = ({
  color1,
  color2,
  ...props
}) => {
  return (
    <MyValue color1={color1 ?? "rgba(0,0,0,0)"} color2={color2 ?? "#FFDD00"} {...props}></MyValue>
  )
}

export default Value
