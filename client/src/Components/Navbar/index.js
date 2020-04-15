import React from 'react'
import styled from 'styled-components'
import { Navbar as NavBar } from 'react-bootstrap'

import SocialList from './SocialList'
import SectionList from './SectionList'

import logo from './logo.png'
import { bodySize, navHeight } from 'Themes/default'

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

export const Navbar = ({
  ...props
}) => {
  return (
    <MyNavBar>
      <Spacer>

      <MyNavBar.Brand className="justify-self-start">
        <Img
          alt=""
          src={logo}
          className="d-inline-block align-top"
          />
      </MyNavBar.Brand>

      <Contain>
        {/* pass refs to section list */}
        <SectionList {...props}/>
        <SocialList />
      </Contain>
      </Spacer>
    </MyNavBar>
  )
}

export default Navbar
