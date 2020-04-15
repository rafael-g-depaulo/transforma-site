import React from 'react'
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-scroll'
import { navHeight } from 'Themes/default'

const NavLink = styled(Nav.Link)`
  color: #000;

  &:hover {
    color: #000;
  }
  &:active {
    color: #000;
  }

  .active > & {
    /* color: red; */
  }
`

export const SectionLink = ({
  children,
  ...props
}) => {
  return (
    <Link 
      {...props}
      duration="300"
      delay="100"
      offset={-parseInt(navHeight)}
      activeClass="active"
      spy
      smooth
    >
      <NavLink>{children}</NavLink>
    </Link>
  )
}

export default SectionLink
