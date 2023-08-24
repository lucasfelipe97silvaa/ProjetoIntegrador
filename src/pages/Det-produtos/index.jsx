import React from 'react'
import styled from 'styled-components'
import ListDetalhes from '../../Components/Detalhes'

const ConteinerGlobal = styled.div`
    width: 100%;
    height: 300px;
    background-color: aquamarine;
    display: grid;
    grid-template-columns: 15px 15px 15px;
    grid-template-rows:60px 60px;

`

export default function Detalhes() {
  return (
    <>
        <ListDetalhes></ListDetalhes>
    </>
  )
}
