import React from 'react'
import { storiesOf } from '@storybook/react'

import Navbar from 'Components/Navbar'
import styled from 'styled-components'

const Box = styled.div`
  height: 500px;
  border: 2px solid #EE6057;
`

storiesOf("Navbar", module)
  .add("default", () => <Box><Navbar /></Box>)
