import React from 'react'
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-scroll'

const NavLink = styled(Nav.Link)`
  color: #000;

  &:hover {
    color: #000;
    cursor: pointer;
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
  navHeight,
  as,
  ...props
}) => {
  return (
    <Link 
      {...props}
      duration={900}
      delay={0}
      offset={-navHeight}
      activeClass="active"
      spy
      smooth="easeInOutQuint"
    >
      <NavLink as={as}>{children}</NavLink>
    </Link>
  )
}

export default SectionLink
