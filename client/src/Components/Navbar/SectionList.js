import React from 'react'
import styled from 'styled-components'

import SectionLink from './SectionLink'

const MySectionList = styled.div`
  display: flex;
  font-family: 'Open Sans', sans-serif;
`

export const SectionList = ({
  ...props
}) => {

  return (
    <MySectionList {...props}>
      <SectionLink></SectionLink>
      <SectionLink to="Institute">O Instituto</SectionLink>
      <SectionLink to="Gestores">Gestores</SectionLink>
      <SectionLink to="Experiences">Experiências que se somam</SectionLink>
      <SectionLink to="Contact">Contato</SectionLink>
    </MySectionList>
  )
}

export default SectionList
