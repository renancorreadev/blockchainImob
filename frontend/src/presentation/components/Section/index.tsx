import React from 'react';
import {Container, Title} from './styles'

type Props = {
  title: string
}

 const Section: React.FC<Props> = ({title}) => {

  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}

export default Section
