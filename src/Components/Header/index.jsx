import React from 'react';
import styled from 'styled-components';
import {Menustyled} from '../../Components/Header/menu.styled'

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
    flex-direction: row;
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


export default function Header() {
  return (
    <Conteiner>
        <Conteiner>
          <Thubnail scr=''/>
          <Cabecalho>
              <Input type="search" placeholder='Digite o nome do produto que procura...'></Input>
              <Button></Button>
              <Button></Button>
          </Cabecalho>
        </Conteiner>    
        <Menu>
          <Menustyled/> 
        </Menu>
    </Conteiner>
  )
}
