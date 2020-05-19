import React, { useState } from 'react'
import styled from 'styled-components'
import { underlineColor } from 'Themes/default'

import { Link } from 'react-scroll'
import { CSSTransition } from 'react-transition-group'

import Nav from 'react-bootstrap/Nav'

const animationDelay = 200

const NavLink = styled(Nav.Link)`
  transition: ${animationDelay}ms ease-in-out;
  color: #000;
  /* font-size: 20px; */
  width: max-content;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid ${underlineColor};
  }
  &:active {
    border-bottom: 3px solid ${underlineColor};
  }

  &.active:not(.animation-exit-done) {
    border-bottom: 5px solid ${underlineColor};
  }


  /* animation stuff */

  &.animation-enter, &.animation-exit-done {
    /* about to start to enter */
    /* or done exiting */
  }
  &.animation-enter-done, &.animation-exit {
    /* done entering */
    /* or about to exit */
    border-bottom: 5px solid ${underlineColor};
    font-weight: bold;
  }
  
`

export const SectionLink = ({
  children,
  navHeight,
  className,
  as,
  ...props
}) => {

  const [ active, setActive ] = useState(false)

  return (
    <Link 
      {...props}
      duration={900}
      delay={0}
      offset={-navHeight}
      activeClass="active"
      spy
      smooth="easeInOutQuint"
      onSetActive={() => setActive(true)}
      onSetInactive={() => setActive(false)}
    >
      <CSSTransition
        in={active}
        timeout={animationDelay}
        classNames="animation"
      >
      <NavLink as={as} className={className}>{children}</NavLink>
      </CSSTransition>
    </Link>
  )
}

export default SectionLink
