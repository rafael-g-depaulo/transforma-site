import React from 'react'
import styled from 'styled-components'

import Title from './Title'
import Text from './Text'
import { LargeBreakpoint } from 'Themes/default'

const MyContact = styled.div`
  grid-area: contact;

  margin: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: ${LargeBreakpoint}) {
    display: inherit;
  }
`

const MyTitle = styled(Title)`
`

const MyText = styled(Text)`

  margin: 0;

  @media (min-width: ${LargeBreakpoint}) {
    margin: inherit
  }
`

const MyItem = styled.div`
  width: max-content;

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  ${MyTitle} {
    margin-bottom: 5px;
  }

  @media (min-width: ${LargeBreakpoint}) {
    &:not(:last-child) {
      margin-bottom: 50px;
    }

    ${MyTitle} {
      margin-bottom: 20px;
    }
  }
`

const Item = ({
  title,
  text,
}) => (
  <MyItem>
    <MyTitle>{title}</MyTitle>
    <MyText>{text}</MyText>
  </MyItem>
)

export const Contact = ({
  ...props
}) => {
  return (
    <MyContact>
      <Item title="telefone" text="(61) 9 99611-1303"/>
      <Item title="email" text="transforma.diretoria@gmail.com"/>
    </MyContact>
  )
}

export default Contact
