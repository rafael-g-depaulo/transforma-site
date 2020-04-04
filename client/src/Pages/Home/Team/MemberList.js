import React from 'react'
import styled from 'styled-components'
import Member from './Member'
import { bodySize } from 'Themes/default'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  max-width: ${bodySize};
  margin: auto;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
`

const MyMember = styled(Member)`
  flex-grow: 1;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

export const MemberList = ({
  members = [],
  ...props
}) => {

  // group data by 2
  const groupedData = []
  members.forEach((x, i) =>
    i % 2 === 0
      ? groupedData[i/2] = [x]
      : groupedData[(i-1)/2][1] = x
  )

  return (
    <Grid {...props}>
      {groupedData.map(column => (
        <List>
          {column.map(({ imgSrc, ...props }) => (
            <MyMember {...props} imgSrc={`${process.env.PUBLIC_URL}/teamImages/${imgSrc}.png`}/>
          ))}
        </List>
      ))}
    </Grid>
  )
}

export default MemberList
