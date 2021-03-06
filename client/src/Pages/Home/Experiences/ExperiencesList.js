import React from 'react'
import styled from 'styled-components'

import Experience from './Experience'

import { bodySize, LargeBreakpoint } from 'Themes/default'

const Grid = styled.div`
  display: grid;
  max-width: ${bodySize};
  margin: auto;
  grid-gap: 20px;
  
  @media (min-width: ${LargeBreakpoint}) {
    grid-gap: 40px;
    grid-template-columns: repeat(${props => props.cols ?? 2}, 1fr);
  }
`

const List = styled.div`
  display: flex;
  flex-direction: column;
`

const MyExperience = styled(Experience)`
  flex-grow: 1;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

export const ExperiencesList = ({
  experiences = [],
  ...props
}) => {

  // group data by 3
  const data = [
    experiences.slice(0, 3),
    experiences.slice(3, 6),
  ]
  return (
    <Grid {...props}>
      {data.map(list => (
        <List key={list[0].name}>
          {list.map(({ ...exProps }) => (
            <MyExperience key={exProps.name} {...exProps}/>
          ))}
        </List>
      ))}
    </Grid>
  )
}

export default ExperiencesList
