import React from 'react'
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav'
import { useCallback } from 'react'
import { navHeight } from 'Themes/default'

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
  institutoRef,
  gestoresRef,
  experienciasRef,
  contatoRef,
  ...props
}) => {

  const scrollTo = useCallback((ref) => {
    console.log("Asdsadasd")
    window.scrollTo(0, ref.current.offsetTop - parseInt(navHeight))   
  }, [])
  return (
    <MySectionList {...props}>
      <Link onClick={() => scrollTo(institutoRef)}>O Instituto</Link>
      <Link onClick={() => scrollTo(gestoresRef)}>Gestores</Link>
      <Link onClick={() => scrollTo(experienciasRef)}>Experiências que se somam</Link>
      <Link onClick={() => scrollTo(contatoRef)}>Contato</Link>
    </MySectionList>
  )
}

export default SectionList
