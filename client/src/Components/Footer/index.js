import React from 'react'
import styled from 'styled-components'

import Main from './Main'
import Copyright from './Copyright'

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`

export const Footer = ({
  ...props
}) => {
  return (
    <Grid>
      <Main />
      <Copyright />
    </Grid>
  )
}

export default Footer
