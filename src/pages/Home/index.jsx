import React, { useState,useEffect,} from 'react'
import Banner from '../../../public/image/Frame 1.svg'
import styled from 'styled-components'
import Imagem from '../../../public/image/Rectangle 161pneu.svg'
import api from '../../Server/api'
import ProdutoHome from '../../Components/Produto'
import Imagemhome1 from '../../../public/ImagemHome/Rectangle 10.svg'
import { Link } from 'react-router-dom'

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
  bottom:5px ;
  left: 5px;
  border-radius: 15px;  
`
const TitleMenu = styled.p`
  color: black;
  font-weight: 600;
  position: relative;
  right: 50px;
  bottom: 10px;
`

const ContainerMenu = styled.div`
  width: 150px;
  height: 150px;
  background-color: #FFC004;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
`

const Div = styled.div`
  /* background-color: #e90909; */
  width: 300px;
  height:150px;
  background-image: url('../../../public/ImagemHome/Rectangle 10.svg');
`
const ImagensHome = styled.img`
  width:100%;
  height:100%;
`

const ConteinerFotos = styled.div` //conteiner que se refere as fotos da home
  width: 80%;
  height: 400px;
  display: flex;
  justify-content: center;
  gap:20px;
  border-bottom: 1px solid #000;
  margin-left: 150px;
`
const ConteinerFotosMenores = styled.div` // div que está dentro de ConteinerFotos**
  width: 700px;
  height: 70%;
  background-color: black;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;

`


export default function Home() {

  

  return (
    <>
    <Thubnail src={Banner}/>
    <Container>
        <ContainerMenu>
          <ImagemContainer src={Imagem}/>
          <TitleMenu>Pneus</TitleMenu>
        </ContainerMenu>
        <ContainerMenu>
          <ImagemContainer src={Imagem}/>
          <TitleMenu>Pneus</TitleMenu>
        </ContainerMenu>
        <ContainerMenu>
          <ImagemContainer src={Imagem}/>
          <TitleMenu>Pneus</TitleMenu>
        </ContainerMenu>
        <ContainerMenu>
          <ImagemContainer src={Imagem}/>
          <TitleMenu>Pneus</TitleMenu>
        </ContainerMenu>
        <ContainerMenu>
          <ImagemContainer src={Imagem}/>
          <TitleMenu>Pneus</TitleMenu>
        </ContainerMenu>
        <ContainerMenu>
          <ImagemContainer src={Imagem}/>
          <TitleMenu>Pneus</TitleMenu>
        </ContainerMenu>
    </Container>
    <ConteinerFotos>
        <ConteinerFotosMenores>
          <Div>
          </Div>
          <Div/>
          <Div/>
          <Div/>
        </ConteinerFotosMenores>
        <Div/>
    </ConteinerFotos>
    <Container>
      <Link to={'/produto/detalhes_produtos'}>
      <ProdutoHome></ProdutoHome>
      </Link>
      <ProdutoHome></ProdutoHome>
      <ProdutoHome></ProdutoHome>
    </Container>
    </>
  )
}
