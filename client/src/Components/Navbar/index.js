import React from 'react'
import styled from 'styled-components'
import { Navbar as NavBar } from 'react-bootstrap'

import SocialList from './SocialList'
import SectionList from './SectionList'

import logo from './logo.png'
import { bodySize, navHeight } from 'Themes/default'
import { Link } from 'react-scroll'

const MyNavBar = styled(NavBar)`
  background-color: #FFF;
  font-size: 20px;
  height: ${navHeight};

  z-index: 10;

  position: fixed;
  top: 0;
  width: 100%;
`

const Spacer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: ${bodySize};

  margin: auto;
`

const Contain = styled.div`
  display: flex;
  width: max-content;
`

const Img = styled.img`
  height: 40px;
`

const MyLink = styled(Link)`
  &:hover {
    cursor: pointer;
  }
`

export const Navbar = ({
  ...props
}) => {
  return (
    <MyNavBar>
      <Spacer>

      <MyLink
        to="Banner"
        duration="900"
        delay="0"
        offset={-parseInt(navHeight)}
        activeClass="active"
        spy
        smooth="easeInOutQuint"  
      >
        <MyNavBar.Brand className="justify-self-start">
          <Img
            alt=""
            src={logo}
            className="d-inline-block align-top"
            />
        </MyNavBar.Brand>
      </MyLink>

      <Contain>
        {/* pass refs to section list */}
        <SectionList />
        <SocialList />
      </Contain>
      </Spacer>
    </MyNavBar>
  )
}

export default Navbar
