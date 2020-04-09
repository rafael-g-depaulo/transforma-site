import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-family: 'Open Sans';

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 40px;
  background-color: ${props => props.color ?? "#452778"};
  border-radius: 10px;
  box-shadow: 0 0 35px 0 rgba(3, 4, 2, 0.1);
  border: solid 1px #ffffff;
`

const Text = styled.span`
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
  margin: 0 auto;
`

const Image = styled.img`
  width: 100%;
  object-fit: contain;
  margin: auto;
`

const ImageContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
  grid-gap: 20px;
`

export const Experience = ({
  imgs = [],
  color,
  name,
  cols = 1,
  ...props
}) => {
  return (
    <Container color={color} {...props}>
      <Text as="h4">{name ?? "nome"}</Text>
      <ImageContainer cols={cols}>
        {imgs.map(({ alt, src }) => (
          <Image
            key={src}
            src={src}
            alt={alt}
          />
        ))}
      </ImageContainer>
    </Container>
  )
}

export default Experience
