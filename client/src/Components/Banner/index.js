import React from 'react'
import styled from 'styled-components'

import banner from './Banner.png'

const Img = styled.img`
  width: 100%;
  box-shadow: 46px 19.5px 35px 0 rgba(3, 4, 2, 0.1);
`

export const Banner = ({
  ...props
}) => {
  return (
    <Img src={banner} alt="banner do instituto transforma"/>
  )
}

export default Banner
