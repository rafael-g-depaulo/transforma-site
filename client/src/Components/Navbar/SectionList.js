import React from 'react'
import { Nav } from 'react-bootstrap'
import styled from 'styled-components'

import SectionLink from './SectionLink'

const Link = styled(Nav)`

`

export const SectionList = ({
  navHeight,
  ...props
}) => {

  return (
    <>
      <SectionLink navHeight={navHeight} as={Link} to="Institute">O Instituto</SectionLink>
      <SectionLink navHeight={navHeight} as={Link} to="Gestores">Gestores</SectionLink>
      <SectionLink navHeight={navHeight} as={Link} to="Experiences">Experiências que se somam</SectionLink>
      <SectionLink navHeight={navHeight} as={Link} to="Contact">Contato</SectionLink>
    </>
  )
}

export default SectionList
