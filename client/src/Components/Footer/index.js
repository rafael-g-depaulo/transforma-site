import React from 'react'
import styled from 'styled-components'

import Main from './Main'
import Copyright from './Copyright'
import { Element } from 'react-scroll'

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto;
`

export const Footer = ({
  ...props
}) => {
  return (
    <Grid>
      <Element name="Contact">
        <Main />
        <Copyright />
      </Element>
    </Grid>
  )
}

export default Footer
