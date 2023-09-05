import React from 'react';
import styled from 'styled-components';
import imagem from '../../../public/image/logo.svg'
import {Menustyled} from '../../Components/Header/menu.styled'
import { FaUser, FaCartPlus,FaSistrix} from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Conteiner = styled.div`
  width: 98.9vw;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  

`
const ConteinerGeral = styled.main`
  width: 100%;
  height: 100px;
  margin-bottom: 50px;
`
const Cabecalho = styled.div`
  width: 400px;
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
`


const Menu = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: #FFC004;

`

const Thubnail = styled.img`
    width: 300px;
    height: 100px;
`
const Input = styled.input`
    width: 400px;
    height: 30px;
    border: none;
`

const Button = styled.button`
    width: 5px;
    height: 30px;
`
const IconUser = styled.i`
  width: 70px;
  height: 30px;
  border: 1px solid #000;

  border-radius: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 2px;
  margin-right: 10px;
  
`

const IconLog = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #000;

  border-radius: 100%;
  background-color: #fff;
  padding:1px ;
  
`
const Login = styled.div`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
`

export default function Header() {
  return (
    <ConteinerGeral>
        <Conteiner>
          <Link to={"/"}>
            <Thubnail src={imagem}></Thubnail>
          </Link>
          <Cabecalho>
              <Input type="search" placeholder='Digite o nome do produto que procura...'></Input>
              <Button><FaSistrix/></Button>
          </Cabecalho>
          <Login>
             <IconUser>
                <IconLog>
                  <FaUser style={{ fontSize: '20px'}}/>
                </IconLog>
             </IconUser>
             <Link to={'/produto/finalizar'}>
             <FaCartPlus style={{ fontSize: '20px'}}/>
             </Link>
          </Login>
        </Conteiner>    
        <Menu>
          <Menustyled/> 
        </Menu>
    </ConteinerGeral>
  )
}
