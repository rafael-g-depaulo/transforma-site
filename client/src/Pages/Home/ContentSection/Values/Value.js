import React from 'react'
import styled from 'styled-components'

import Text from 'Components/Text'

import a from './ValueLetters/a.png'
import b from './ValueLetters/b.png'
import c from './ValueLetters/c.png'
import d from './ValueLetters/d.png'
import e from './ValueLetters/e.png'
import i from './ValueLetters/i.png'
import m from './ValueLetters/m.png'
import s from './ValueLetters/s.png'
import { LargeBreakpoint } from 'Themes/default'

const letterImages = {
  a, b, c, d, e, i, m, s
}

const Img = styled.img`
  object-fit: cover;
  position: relative;

  height: 2em;
  bottom: 0.4em;
  right: 5px;

  z-index: 3;
`

const Container = styled.div`  
  font-size: 15px;
  display: flex;
  justify-content: center;
  
  @media (min-width: ${LargeBreakpoint}) {
    font-size: 25px;
    justify-content: flex-start;
  }
`

const MyText = styled(Text)`
  display: inline;
`

const Icon = ({
  letter,
}) => (
  <Img
    src={letterImages[letter]}
    alt={letter}
  />
)

export const Value = ({
  label = "",
  ...props
}) => {

  const valueText = label.toLowerCase()
  return (
    <Container>
      <Icon letter={valueText[0]}/>
      <MyText>{valueText.slice(1)}</MyText>
    </Container>
  )
}

export default Value