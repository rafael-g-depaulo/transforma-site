import React from 'react'

import MemberList from './MemberList'

import memberInfo from './memberInfo'
import { useState } from 'react'
import { forwardRef } from 'react'

export const Team = forwardRef(({
    ...props
  },
  gestoresRef
) => {

  const [ members, setMembers ] = useState(memberInfo)

  return (<div ref={gestoresRef}>
    <MemberList members={members}/>
  </div>)
})

export default Team
