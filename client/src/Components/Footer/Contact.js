import React from 'react'
import styled from 'styled-components'

import Title from './Title'
import Text from './Text'

const MyContact = styled.div`
  grid-area: "contact";
`

const MyTitle = styled(Title)`
`

const MyItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 50px;
  }

  ${MyTitle} {
    margin-bottom: 20px;
  }
`

const Item = ({
  title,
  text,
}) => (
  <MyItem>
    <MyTitle>{title}</MyTitle>
    <Text>{text}</Text>
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
