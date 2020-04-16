import React from 'react'
import styled from 'styled-components'
import useWidth from 'Hooks/useWidth'

import { LargeBreakpoint } from 'Themes/default'

import banner from './Banner.png'
import mobile from './Mobile.png'

const Img = styled.img`
  width: 100%;
  box-shadow: 16px 9.5px 15px 0 rgba(3, 4, 2, 0.1);
`

export const Banner = ({
  ...props
}) => {

  const width = useWidth()

  return (
    <Img
      src={width >= parseInt(LargeBreakpoint) ? banner : mobile}
      alt="banner do instituto transforma"
    />
  )
}

export default Banner
