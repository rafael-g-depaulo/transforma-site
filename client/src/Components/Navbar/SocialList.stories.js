import React from 'react'
import { storiesOf } from '@storybook/react'

import SocialList from './SocialList'
import styled from 'styled-components'

const Box = styled.div`
`

storiesOf("Social List", module)
  .add("default", () => <Box><SocialList /></Box>)
