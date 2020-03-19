import React from 'react'
import { storiesOf } from '@storybook/react'

import Loading from 'Components/Loading'

storiesOf("Loading component", module)
  .add("default", () => <Loading />)
