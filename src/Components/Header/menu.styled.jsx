import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Conteiner = styled.nav`
    display: flex;
    flex-direction: row;
`

const ItemMenu = styled.ul`
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    align-items: center;
    list-style-type: none;
    margin-right: 50px;
    gap:30px;
`
const PropsLi = styled.li`
   /* border-right: 1px solid #000 ; */
   border-left: 1px solid #000 ; 
   padding:0px 50px 0px 60px ;
   &:hover{
        display: block;
    }
`
const Oferta = styled.li`
   border-right: 1px solid #000;
   /* border-left: 1px solid #000; */
   padding:0px 60px 0px 30px;
   &:hover{
        display: block;
    }


`
const Bateria = styled.li`
    border-left: 1px solid;
   padding:0px 60px 0px 50px;
   border-right: 1px solid #000 ; 
   &:hover{
        display: block;
    }


`

// const Link = styled.a`
//     text-decoration: dashed;
//     color: black;
// `

export function Menustyled() {
  return (
    <Conteiner>
            <ItemMenu>          
            <PropsLi><Link to={'/produtos'}>Produtos</Link></PropsLi>
            <PropsLi><Link to={'/pneus'}>Pneus</Link></PropsLi>
            <PropsLi><Link to={'/freios'}>Frios</Link></PropsLi>
            <PropsLi><Link to ={'/oleo'}> Óleo</Link></PropsLi>
            <Bateria><Link to={'/baterias'}>Baterias</Link></Bateria>    
            <Oferta><Link to={'/ofertas'}>Oferta</Link></Oferta>
        </ItemMenu>
    </Conteiner>
  )
}
