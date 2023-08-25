import React from 'react'
import Banner from '../../../public/image/Frame 1.svg'
import styled from 'styled-components'
import Imagem from '../../../public/image/Rectangle 160.svg'
import api from '../../Server/api'
import ProdutoHome from '../../Components/Produto'

const Thubnail = styled.img`
  width: 80vw;
  height: auto ;
  margin-bottom:50px ;
  margin-left: 150px; 
  border: none;
`


const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80vw;
  height: 200px;
  gap:30px;
  margin: 40px;
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
  grid-template-columns:  20% 20% 30%;
  grid-template-rows: 70px 50px;
  grid-column-gap:70px;
  grid-row-gap:47px;
  width: 100%;
  height: 50px;
  justify-content: center;
  margin-top: 40px;
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
    <Container>
        <ConteinerImagem>
            <Div></Div>
            <Div></Div>
            <Div></Div>
            <Div></Div>
            <Div></Div>
        </ConteinerImagem>
    </Container>
    <Container>
      <ProdutoHome></ProdutoHome>
      <ProdutoHome></ProdutoHome>
      <ProdutoHome></ProdutoHome>
    </Container>
    </>
  )
}
