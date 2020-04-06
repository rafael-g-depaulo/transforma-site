import React from 'react'
import styled from 'styled-components'
import { Navbar as NavBar } from 'react-bootstrap'

import SocialList from './SocialList'
import SectionList from './SectionList'

import logo from './logo.png'
import { bodySize } from 'Themes/default'

const MyNavBar = styled(NavBar)`
  background-color: #FFF;
  font-size: 20px;
  /* height: 45px; */
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
        <SectionList />
        <SocialList />
      </Contain>
      </Spacer>
    </MyNavBar>
  )
}

export default Navbar
