import React from 'react'
import Banner from '../../../public/image/Frame 1.svg'
import styled from 'styled-components'
import Imagem from '../../../public/image/Rectangle 160.svg'

const Thubnail = styled.img`
  width: 80vw;
  height: 300px ;
  /* margin-bottom:50px ; */
  margin-left: 100px; 
`


const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 400px;
  margin-top: 30px;

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
        <ContainerMenu/>
        <ContainerMenu/>
        <ContainerMenu/>
        <ContainerMenu/>
    </Container>
    </>
  )
}
