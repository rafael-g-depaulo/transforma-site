import React, { useState, forwardRef } from 'react'

import MemberList from './MemberList'

import memberInfo from './memberInfo'
import Title from 'Components/Title'
import styled from 'styled-components'

const MyTitle = styled(Title)`
  margin-bottom: 20px;
`

export const Team = forwardRef(({
    ...props
  },
  gestoresRef
) => {

  // eslint-disable-next-line
  const [ members, setMembers ] = useState(memberInfo)

  return (<div ref={gestoresRef}>
    <MyTitle>Gestores</MyTitle>
    <MemberList members={members}/>
  </div>)
})

export default Team
