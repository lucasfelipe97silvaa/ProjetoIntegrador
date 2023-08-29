import React from 'react'
import styled from 'styled-components'
import ListDetalhes from '../../Components/Detalhes'
import ProdutoHome from '../../Components/Produto'

const ConteinerGlobal = styled.div`
    width: 100%;
    height: 300px;
    background-color: aquamarine;
    display: grid;
    grid-template-columns: 15px 15px 15px;
    grid-template-rows:60px 60px;

`
const ConteinerSugestao = styled.div`   
  display: flex;
  justify-content: space-around;
  width: 80%;
  height: 200px;
  gap:30px;
  margin: 40px;
  margin-left: 150px;   
`
const Title = styled.p`
    font-size: 30px;
    font-weight: 500;
    margin: 20px;
    margin-left: 230px;
`

export default function Detalhes() {
  return (
    <>
        <ListDetalhes></ListDetalhes>
        <Title>Sugestões de produção:</Title>
        <ConteinerSugestao>
          <ProdutoHome/>
          <ProdutoHome/>
          <ProdutoHome/>
          <ProdutoHome/>
        </ConteinerSugestao>
    </>
  )
}
