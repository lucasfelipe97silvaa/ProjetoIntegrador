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
    gap:120px;
`
const PropsLi = styled.li`
    &:hover{
        display: block;
    }
`

export function Menustyled() {
  return (
    <Conteiner>
            <ItemMenu>
            
                <PropsLi>Pneus</PropsLi>
                <PropsLi>Lubrificantes</PropsLi>
                <PropsLi>Acessorios <br /> Interno </PropsLi>
                <PropsLi> Acessorios <br /> Externos</PropsLi>
                <PropsLi>Mecanica</PropsLi>
                <PropsLi>Ofertas</PropsLi>
            
        </ItemMenu>
    </Conteiner>
  )
}
