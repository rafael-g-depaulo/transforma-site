import React, { useState } from 'react'

import MemberList from './MemberList'

import memberInfo from './memberInfo'
import Title from 'Components/Title'
import styled from 'styled-components'
import { Element } from 'react-scroll'

const MyTitle = styled(Title)`
  margin-bottom: 20px;
`

export const Team = ({
    ...props
  }) => {

  // eslint-disable-next-line
  const [ members, setMembers ] = useState(memberInfo)

  return (<Element name="Gestores">
    <MyTitle>Gestores</MyTitle>
    <MemberList members={members}/>
  </Element>)
}

export default Team
