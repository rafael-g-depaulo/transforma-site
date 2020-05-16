import React from 'react'

import Banner from 'Components/Banner'
import Divider from 'Components/Divider'

import Institute from './Institute'
import Team from './Team'
import Experiences from './Experiences'
import { LargeBreakpoint } from 'Themes/default'
import useWidth from 'Hooks/useWidth'

export const Home = ({
  ...props
}) => {

  // check if is in mobile
  const width = useWidth()
  const isMobile = width < parseInt(LargeBreakpoint)
  const dividerMargin = isMobile ? "40px" : "100px"

  return (
    <>
     {/* <Page> */}
      <Banner />
      <Institute />
      <Divider margin={dividerMargin} />
      <Team />
      <Divider margin={dividerMargin} />
      <Experiences />
     {/* </Page> */}
    </>
  )
}

export default Home
