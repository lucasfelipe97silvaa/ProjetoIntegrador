import Imagem from '../../../public/image/Frame 1.svg'
import styled from 'styled-components'
import React from 'react'

const Thubnail = styled.img`
  width: 80vw;
  height: 200px ;
  /* margin-top:50px ;
  margin-left: 100px; */
`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 400px;

`

const ContainerMenu = styled.div`
    width: 208px;
    height: 235px;
    background-color: #FFC004;
    border-radius: 15px;
`

export default function Banner() {
  return (
   <>   
    <Thubnail src={Imagem}/>
    <Container>
        <ContainerMenu></ContainerMenu>
        <ContainerMenu/>
        <ContainerMenu/>
        <ContainerMenu/>
        <ContainerMenu/>
        <ContainerMenu/>
    </Container>
    </>
  )
}
