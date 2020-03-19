import React from 'react'
import { storiesOf } from '@storybook/react'

import Loading from 'Components/Loading'
import styled from 'styled-components'

const Box = styled.div`
  height: 500px;
  border: 2px solid #EE6057;
`

storiesOf("Loading component", module)
  .add("default", () => <Box><Loading /></Box>)
