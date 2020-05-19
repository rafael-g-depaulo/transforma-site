import React from 'react'
import styled from 'styled-components'
import { Navbar as NavBar } from 'react-bootstrap'

import SocialList from './SocialList'
import SectionList from './SectionList'
import Brand from './Brand'

import { bodySize, navHeight, LargeBreakpoint } from 'Themes/default'

const MyNavBar = styled(NavBar)`

  box-shadow: 16px 9.5px 15px 0 rgba(3, 4, 2, 0.1);

  font-size: 20px;
  background-color: #fff;

  /* z index so high because of leaflet library */
  z-index: 3000;

  position: fixed;
  top: -1px;
  width: 100%;
`

const Spacer = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;

  width: 100%;
  max-width: ${bodySize};
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
    
    & > :not(:last-child) {
      margin-right: 2.4em;
    }
  
    position: static;
    min-width: auto;
  }
`

export const Display = ({
  navRef,
  updateHeight,
  navbarHeight,
  activePage,
  ...props
}) => {
  return (
    
    <MyNavBar ref={navRef} collapseOnSelect expand="lg" onToggle={updateHeight} >
      <Spacer>

        <Brand navbarHeight={navbarHeight} />

        <MyCollapse id="responsive-navbar-nav" >
          <SectionList activePage={activePage} navHeight={navbarHeight} />
        </MyCollapse>

        <SocialList />

        <MyToggle aria-controls="responsive-navbar-nav" />

      </Spacer>
    </MyNavBar>

  )
}

export default Display
