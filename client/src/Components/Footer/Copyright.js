import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
  font-size: 20px;
  text-align: center;
  color: #ffffff;

  background-color: #434343;
`

export const Copyright = ({
  ...props
}) => {
  return (
    <Container>©2020 TODOS OS DIREITOS RESERVADOS - institutotransfoma.art.br</Container>
  )
}

export default Copyright
