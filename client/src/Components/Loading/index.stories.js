import React from 'react'
import { storiesOf } from '@storybook/react'

import Loading from 'Components/Loading'
import styled from 'styled-components'

const Box = styled.div`
`

storiesOf("Loading component", module)
  .add("default", () => <Box><Loading /></Box>)
