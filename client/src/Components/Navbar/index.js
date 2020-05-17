import React, { useRef, useState, useCallback, useEffect } from 'react'

import Display from './Display'

export const Navbar = ({
  getHeight = () => {},    // callback used to update parent of new height
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

  // update parent of new height whenever it changes
  useEffect(() => {
    getHeight(navbarHeight)
  }, [navbarHeight, getHeight])

  return (
    <Display
      navRef={navRef}
      updateHeight={updateHeight}
      navbarHeight={navbarHeight}
    />
  )
}

export default Navbar
