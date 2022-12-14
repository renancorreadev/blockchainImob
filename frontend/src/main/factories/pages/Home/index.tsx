import React from 'react';
import {HomeWrapper, InfoWrapper, ImageWrapper, Title, TextContent, Button, Image} from './styles'
import Background from '@assets/homebg.svg'
import {Carousel} from '@presentation/components/Carousel'
import {getContractName} from '@Callbacks'

import {BlockImobReadContract} from '../../../../infra/callbacks/ReadContracts/blockimob-reads-calls'


type CarouselItem = {
  title:  React.ElementType,
  textContent: React.ElementType,
  button:  React.ElementType,
}

export const Home: React.FC = () => {

  const InfoItems: CarouselItem[]  =
  [
    {
      title: () => <Title>Sistema único de imóveis da união.</Title>,
      textContent: () => <TextContent>Imóveis registrados em blockchain e verificação de regularidade pelos orgãos via oráculo. Imóveis regulares com gestão aditável e possibilidade de venda e cessão de uso.</TextContent>,
      button: () => <Button>Vídeo explicativo</Button>
    },
    {
      title: () => <Title>Sistema único de imóveis da união.</Title>,
      textContent: () => <TextContent>Imóveis registrados em blockchain e verificação de regularidade pelos orgãos via oráculo. Imóveis regulares com gestão aditável e possibilidade de venda e cessão de uso.</TextContent>,
      button: () => <Button>Vídeo explicativo</Button>
    },
    {
      title: () => <Title>Sistema único de imóveis da união.</Title>,
      textContent: () => <TextContent>Imóveis registrados em blockchain e verificação de regularidade pelos orgãos via oráculo. Imóveis regulares com gestão aditável e possibilidade de venda e cessão de uso.</TextContent>,
      button: () => <Button>Vídeo explicativo</Button>
    },
    {
      title: () => <Title>Sistema único de imóveis da união.</Title>,
      textContent: () => <TextContent>Imóveis registrados em blockchain e verificação de regularidade pelos orgãos via oráculo. Imóveis regulares com gestão aditável e possibilidade de venda e cessão de uso.</TextContent>,
      button: () => <Button>Vídeo explicativo</Button>
    },
    {
      title: () => <Title>Sistema único de imóveis da união.</Title>,
      textContent: () => <TextContent>Imóveis registrados em blockchain e verificação de regularidade pelos orgãos via oráculo. Imóveis regulares com gestão aditável e possibilidade de venda e cessão de uso.</TextContent>,
      button: () => <Button>Vídeo explicativo</Button>
    },
  ]

  const test = new BlockImobReadContract()


  const tes = test.getContractNameRequest().then((response) => {
    return console.log(JSON.stringify(response))
  })



  tes

  return (
    <HomeWrapper>
        <InfoWrapper>
            <Carousel items={InfoItems} />
        </InfoWrapper>

        <ImageWrapper>
          <Image src={Background} />
        </ImageWrapper>
    </HomeWrapper>
  )
}
