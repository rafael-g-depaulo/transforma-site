import React from 'react'
import styled from 'styled-components'
import { LargeBreakpoint } from 'Themes/default'

const Container = styled.div`
  text-align: center;
  color: #ffffff;
  background-color: #434343;
  
  padding: 5px;
  font-size: 12px;

  @media (min-width: ${LargeBreakpoint}) {
    padding: 20px;
    font-size: 20px;
  }
`

export const Copyright = ({
  ...props
}) => {
  return (
    <Container>©2020 TODOS OS DIREITOS RESERVADOS - institutotransfoma.art.br</Container>
  )
}

export default Copyright
