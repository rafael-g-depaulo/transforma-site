import React from 'react'
import { Nav } from 'react-bootstrap'
import styled from 'styled-components'

import SectionLink from './SectionLink'

const Link = styled(Nav)`
`

export const SectionList = ({
  navHeight,
  activePage,
  ...props
}) => {

  return (
    <>
      <SectionLink className={activePage === "Institute"    ? "active" : ""} navHeight={navHeight} as={Link} to="Institute">O Instituto</SectionLink>
      <SectionLink className={activePage === "Gestores"     ? "active" : ""} navHeight={navHeight} as={Link} to="Gestores">Gestores</SectionLink>
      <SectionLink className={activePage === "Experiences"  ? "active" : ""} navHeight={navHeight} as={Link} to="Experiences">Experiências que se somam</SectionLink>
      <SectionLink className={activePage === "Contact"      ? "active" : ""} navHeight={navHeight} as={Link} to="Contact">Contato</SectionLink>
    </>
  )
}

export default SectionList
