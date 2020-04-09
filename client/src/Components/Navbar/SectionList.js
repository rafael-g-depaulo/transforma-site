import React from 'react'
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav'

const MySectionList = styled.div`
  display: flex;
  font-family: 'Open Sans', sans-serif;
`

const Link = styled(Nav.Link)`
  color: #000;

  &:hover {
    color: #000;
  }
  &:active {
    color: #000;
  }
`

export const SectionList = ({
  ...props
}) => {
  return (
    <MySectionList {...props}>
      <Link>O Instituto</Link>
      <Link>Gestores</Link>
      <Link>Experiências que se somam</Link>
      <Link>Contato</Link>
    </MySectionList>
  )
}

export default SectionList
