import React from 'react'
import { storiesOf } from '@storybook/react'

import logo from './teste.png'

import Experience from './Experience'
import styled from 'styled-components'

const Box = styled.div`
`

storiesOf("Experiências", module)
  .add("default", () => <Box><Experience /></Box>)
  .add("with params", () =>
    <Experience
      name="hi"
      cols="2"
      color="#dF3f5a"
      imgs={[
        { src: logo, al: "teste" },
        { src: logo, al: "teste" },
        { src: logo, al: "teste" },
        { src: logo, al: "teste" },
      ]}
    />
  )
