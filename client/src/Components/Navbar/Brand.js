import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-scroll'
import { Navbar } from 'react-bootstrap'

import logo from './logo.png'
import { LargeBreakpoint, navHeight } from 'Themes/default'

const MyBrand = styled(Navbar.Brand)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${navHeight};

  position: relative;
  @media (min-width: ${LargeBreakpoint}) {
    position: static;
  }
`
const MyLink = styled(Link)`
  &:hover {
    cursor: pointer;
  }
`
const Img = styled.img`
  height: 30px;
  @media (min-width: ${LargeBreakpoint}) {
    height: 40px;
    margin: 0;
    position: static;
  }
`

export const Brand = ({
  navbarHeight,
  ...props
}) => {
  return (
    <MyBrand className="justify-self-start">
      <MyLink
        to="Banner"
        duration={900}
        delay={0}
        offset={-navbarHeight}
        activeClass="active"
        spy
        smooth="easeInOutQuint"  
      >
      <Img
        alt=""
        src={logo}
        className="d-inline-block align-top"
      />
    </MyLink>
  </MyBrand>
  )
}

export default Brand
