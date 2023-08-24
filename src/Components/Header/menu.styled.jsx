import React from 'react'
import styled from 'styled-components'


const Conteiner = styled.nav`
    display: flex;
    flex-direction: row;
`

const ItemMenu = styled.ul`
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    align-items: center;
    gap:150px;
    list-style-type: none;
    margin-right: 50px;
`
const PropsLi = styled.li`
    &:hover{
        display: block;
    }
`
const Link = styled.a`
    display: flex;
    /* justify-content: space-around; */
    text-decoration: dashed;
    color: black;
`

export function Menustyled() {
  return (
    <Conteiner>
            <ItemMenu>
            
            <Link><PropsLi>Pneus</PropsLi></Link>
            <Link><PropsLi>Lubrificantes</PropsLi></Link>
            <Link><PropsLi>Acessorios <br /> Interno </PropsLi></Link>
            <Link><PropsLi> Acessorios <br /> Externos</PropsLi></Link>
            <Link><PropsLi>Mecanica</PropsLi></Link>
            <   Link><PropsLi>Ofertas</PropsLi></Link>
            
        </ItemMenu>
    </Conteiner>
  )
}
