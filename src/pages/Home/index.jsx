import React from 'react'
import Banner from '../../../public/image/Frame 1.svg'
import styled from 'styled-components'
import Imagem from '../../../public/image/Rectangle 160.svg'

const Thubnail = styled.img`
  width: 80vw;
  height: auto ;
  /* margin-bottom:50px ; */
  margin-left: 150px; 
  border: none;
`


const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80vw;
  height: 400px;
  margin-top: 30px;
  margin-left: 150px;
`

const ImagemContainer = styled.img`
    width: 160px;
    height:150px;
    position: relative ;
    bottom:25px ;
    right: 5px;
    border-radius: 15px;  
`

const ContainerMenu = styled.div`
    width: 150px;
    height: 150px;
    background-color: #FFC004;
    border-radius: 15px;
`
const ConteinerImagem = styled.div`
  display: grid ;
  grid-template-columns:  10% 100px 40%;
  grid-template-rows: 50px 50px 100px;
  grid-column-gap:96px;
  grid-row-gap:47px;
  width: 100%;
  height: 50px;
  justify-content: center;
  `
const Div = styled.div`
  background-color: black;
`

export default function Home() {
  return (
    <>
    <Thubnail src={Banner}/>
    <Container>
        <ContainerMenu>
          <ImagemContainer src={Imagem}/>
        </ContainerMenu>
        <ContainerMenu>
          <ImagemContainer src={Imagem}/>
        </ContainerMenu>
        <ContainerMenu>
          <ImagemContainer src={Imagem}/>
        </ContainerMenu>
        <ContainerMenu>
          <ImagemContainer src={Imagem}/>
        </ContainerMenu>
        <ContainerMenu>
          <ImagemContainer src={Imagem}/>
        </ContainerMenu>
        <ContainerMenu>
          <ImagemContainer src={Imagem}/>
        </ContainerMenu>
    </Container>
    <ConteinerImagem>
      <Div></Div>
      <Div></Div>
      <Div></Div>
      <Div></Div>
      <Div></Div>
    </ConteinerImagem>
    </>
  )
}
