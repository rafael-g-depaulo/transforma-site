import React, { useRef, useState, useCallback } from 'react'
import styled from 'styled-components'
import { Navbar as NavBar } from 'react-bootstrap'
import { Link } from 'react-scroll'

import SocialList from './SocialList'
import SectionList from './SectionList'

import logo from './logo.png'
import { bodySize, navHeight, LargeBreakpoint } from 'Themes/default'

const MyNavBar = styled(NavBar)`
  font-size: 20px;
  background-color: #fff;

  /* z index so high because of leaflet library */
  z-index: 3000;

  position: fixed;
  top: 0;
  width: 100%;
`

const Spacer = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;

  width: 100%;
  max-width: ${bodySize};
`

const Img = styled.img`
  
  height: 30px;
  @media (min-width: ${LargeBreakpoint}) {
    height: 40px;
    margin: 0;
    position: static;
  }
`

const MyLink = styled(Link)`
  &:hover {
    cursor: pointer;
  }
`

const MyToggle = styled(MyNavBar.Toggle)`
  height: 50px;
  position: absolute;
  right: 8px;
  top: 13px;
`

const MyCollapse = styled(MyNavBar.Collapse)`
  
  margin-top: ${navHeight};
  position: relative;
  justify-content: center;
  right: 140px;

  min-width: 100%;

  & > :not(:last-child) {
    margin-right: 15px;
  }

  @media (min-width: ${LargeBreakpoint}) {
    margin: 0;
    position: static;
    min-width: auto;
  }
`

const MyBrand = styled(MyNavBar.Brand)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${navHeight};

  position: relative;
  @media (min-width: ${LargeBreakpoint}) {
    position: static;
  }
`

export const Navbar = ({
  ...props
}) => {

  const navRef = useRef(null)
  const [ navbarHeight, setNavHeight ] = useState(0)

  // set nav height dinamically (used on scroll click)
  const updateHeight = useCallback(() => {
    if (!navRef.current) return
    setTimeout(() => setNavHeight(navRef.current.offsetHeight), 300)    
  }, [ navRef, setNavHeight ])
  setTimeout(() => setNavHeight(navRef?.current?.offsetHeight), 30)


  return (
    <MyNavBar ref={navRef} collapseOnSelect expand="lg" onToggle={updateHeight} >
      <Spacer>

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


        <MyCollapse id="responsive-navbar-nav" >
          <SectionList navHeight={navbarHeight} />
        </MyCollapse>

        <SocialList />

        <MyToggle aria-controls="responsive-navbar-nav" />

      </Spacer>
    </MyNavBar>
  )
}

export default Navbar
