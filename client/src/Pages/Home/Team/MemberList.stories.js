import React from 'react'
import { storiesOf } from '@storybook/react'

import MemberList from './MemberList'
import styled from 'styled-components'

const Box = styled.div`
`

storiesOf("Member List", module)
  .add("default", () => <Box><MemberList /></Box>)
