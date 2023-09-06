import React from 'react';
import styled from 'styled-components';
import {Menustyled} from '../../Components/Header/menu.styled'
import { FaUser, FaCartPlus,} from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Conteiner = styled.div`
  width: 90vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  

`
const ConteinerGeral = styled.main`
  width: 99vw;
  height: 100px;
  margin-bottom: 50px;
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

const Thubnail = styled.div`
    width: 150px;
    height: 100px;
    background-image: url('../../../image/image/logo.svg');
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
            <Thubnail/>
          </Link>
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
