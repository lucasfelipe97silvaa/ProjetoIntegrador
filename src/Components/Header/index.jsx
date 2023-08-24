import React from 'react';
import styled from 'styled-components';
import {Menustyled} from '../../Components/Header/menu.styled'

const Conteiner = styled.div`
  width: 98.9vw;
  height: 100px;
  display: flex;
  flex-direction: column;
  

`
const ConteinerGeral = styled.main`
  width: 100%;
  height: 100px;
  margin-bottom: 60px;
`
const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: #DDDDDD;
  justify-content: center;

`
const Menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #FFC004;
    

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
    <ConteinerGeral>
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
    </ConteinerGeral>
  )
}
