import React from 'react';
import styled from 'styled-components';

const Conteiner = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  flex-direction: column;
  

`
const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: grey;
  justify-content: center;

`
const Menu = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: yellow;
    

`

const Thubnail = styled.img`
    width: 50px;
    height: auto;
`
const Input = styled.input`
    width: 400px;
    height: 30px;
    border-radius: 20px;
    margin-top: 20px;
`

const Button = styled.button`
    width: 20px;
    height: 30px;
`

const ConteinerItens = styled.div`
    width: 10px;
    height: 10px;
    
    
`

export default function Header() {
  return (
  <Conteiner>
    <Conteiner>
        <Cabecalho>
          <Input type="search" placeholder='Digite o nome do produto que procura...'></Input>
          <Button></Button>
          <Button></Button>
        </Cabecalho>
      </Conteiner>   
      
      <Conteiner>
        <Menu>
            <ConteinerItens>Pneu</ConteinerItens>
            <ConteinerItens>Lumbrificante</ConteinerItens>
            <ConteinerItens>acessorio </ConteinerItens>
            <ConteinerItens>acessorio </ConteinerItens>
            <ConteinerItens>Mecanica</ConteinerItens>
            <ConteinerItens>Ofertas</ConteinerItens>
        </Menu>
    </Conteiner>
    </Conteiner>
  )
}
