import React from 'react'
import styled from 'styled-components'
import { LargeBreakpoint } from 'Themes/default'

const Container = styled.div`
  font-family: 'Open Sans';

  display: flex;
  flex-direction: column;

  background-color: ${props => props.color ?? "#452778"};
  border-radius: 10px;
  box-shadow: 0 0 35px 0 rgba(3, 4, 2, 0.1);
  border: solid 1px #ffffff;

  padding: 20px;

  @media (min-width: ${LargeBreakpoint}) {
    padding: 40px;
  }

`

const Text = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
  margin: 0 auto;
  
  font-size: 16px;

  @media (min-width: ${LargeBreakpoint}) {
    font-size: 25px;
  }
  `
const Name = styled(Text)`
  margin-top: 15px;
  @media (min-width: ${LargeBreakpoint}) {
    margin-top: 25px;
  }
`
const Cargo = styled(Text)`
  font-weight: normal;
  
  margin-top: 0px;
  font-size: 16px;

  @media (min-width: ${LargeBreakpoint}) {
    font-size: 20px;
    margin-top: 16px;
  }
`

const Image = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin: auto;
`

const Description = styled.p`
  line-height: 1;
  text-align: justify;
  color: #ffffff;

  font-size: 16px;
  margin-top: 8px;
  
  @media (min-width: ${LargeBreakpoint}) {
    font-size: 20px;
    margin-top: 25px;
  }
`

export const Member = ({
  imgSrc,
  color,
  name,
  cargo,
  description,
  ...props
}) => {
  return (
    <Container color={color} {...props}>
      <Image alt={name} src={imgSrc ?? process.env.PUBLIC_URL+"/teamImages/Andre.png"}/>
      <Name as="h4">{name ?? "nome"}</Name>
      <Cargo>{cargo ?? "cargo"}</Cargo>
      <Description>{description}</Description>
    </Container>
  )
}

export default Member
