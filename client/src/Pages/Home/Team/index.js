import React from 'react'

import MemberList from './MemberList'

import memberInfo from './memberInfo'
import { useState } from 'react'

export const Team = ({
  ...props
}) => {

  const [ members, setMembers ] = useState(memberInfo)

  return (<>
    <MemberList members={members}/>
  </>)
}

export default Team
