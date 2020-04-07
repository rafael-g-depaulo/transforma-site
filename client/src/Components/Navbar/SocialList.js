import React from 'react'
import styled from 'styled-components'
import { Nav } from 'react-bootstrap'

const MySocialList = styled.div`
  display: flex;
`

const SocialMediaLink = styled(Nav.Link)`
  background: ${props => props.color};
  color: #ffffff;
  &:hover {
    color: #dddddd;
  }
  &:active {
    color: #bbbbbb;
  }
  
  padding: 8px;
  font-size: 20px;
  width: 36px;
  border-radius: 50%;
  text-decoration: none;
  margin: 5px;

  /* center icon */
  display: flex;
  justify-content: center;

}

  &::before {
    margin-top: 2px;
    /* position: relative;
    right: 50%;
    margin: auto; */
  }
`

export const SocialList = ({
  ...props
}) => {
  return (
    <MySocialList {...props}>
      <SocialMediaLink className="fa fa-facebook" color="#3B5998" target="_blank" href="https://www.facebook.com/Instituto-Transforma-103938697887768/"/>
      <SocialMediaLink className="fa fa-youtube-play" color="#dd4b39" target="_blank" href="https://www.youtube.com/channel/UC-0y1VcLV9TtXK96AebVOPw?view_as=subscriber"/>
      <SocialMediaLink className="fa fa-instagram" color="#125688" target="_blank" href="https://www.instagram.com/transforma_instituto/"/>
    </MySocialList>
  )
}

export default SocialList