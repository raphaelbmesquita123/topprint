import Head from 'next/head'
import React from 'react';

import { CardLona } from '../component/cardLona/cardLona';
import { CardStick } from '../component/cardStick/cardStick';
import { Banner, Container, ContainerAttention } from '../styles/home'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Top Print</title>
      </Head>
      <Banner>
      </Banner>
      <Container >
        <div className="cardLona">
          <h1>LONA</h1>
          <CardLona />
        </div>
        <div className="cardStick">
          <h1>ADESIVO</h1>
          <CardStick />
        </div>
      </Container>
      <ContainerAttention>
        <h1>ATENÇÃO</h1>
        <small>AO SELECIONAR AS INFORMAÇÕES DO PRODUTO E ADICIONAR O LINK, VERIFICAR SE O LINK ESTÁ CORRETO DE ACORDO COM A DESCRIÇÃO DO PRODUTO, A TOPPRINT <span>NÃOSE RESPONSABILIZARÁ POR ENVIO DE ARQUIVOS ERRADO </span> </small>
      </ContainerAttention>
    </div>
  )
}
