import React from 'react'
import styled from 'styled-components'
import ProdutoHome from '../Produto'

const ConteinerExterno = styled.div`
width: 100%;
height: 400px;
background-color: #bbbbbb;
display: flex;
`
const ImagemVertical = styled.img`
    width:100%;
    height:100px;
    background-color: yellow;
    ` 
const ConteinerVertical = styled.div`
    width: 100px;
    height: 100%;
    /* background-color: blue; */
    margin-left: 242px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ConteudoImagem = styled.img`
    width: 413px;
    height: 100%;  
    background-color: aliceblue;
    margin-left: 30px;
    border-bottom: 1px solid  #000;
`

const ConteinerCompra = styled.div`
    display: flex;
    flex-direction: column;
    width: 363px;
    height: 100%;
    background-color: aliceblue;
    border-bottom: 1px solid  #5f6100;
    margin-left: 148px;

`
const CompraInConteiner = styled.div`
    width: 100%;
    height: 80%;
    background-color: red;
`

const ConteinerButton = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 30%;
    align-items: center;
    background-color: blue;
    justify-content: space-around;
`
const Button = styled.button`
    width:100px;
    height: 40px;
    margin-top: 20px;
    /* margin: 10px ; */
`
const ButtonCarrinho = styled.div`
    width:50px;
    height: 40px;
    margin-top: 20px;
    background-color: cadetblue;
    /* margin: 10px ; */
`

const ConteinerDescricao = styled.div`
    width: 100%;
    height:200px;
    display: flex;
    flex-direction: column;
    background-color: #ff0077;
    margin-top:20px ; 
    margin-bottom: 100px;
`
const Descricao = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin: 20px;
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
`

export default function ListDetalhes() {
  return (
    <>
    <ConteinerExterno>
        <ConteinerVertical>
            <ImagemVertical src ={'https://down-br.img.susercontent.com/file/6aaeb0f80f4f454af16c148aaefd7238'}/>
            <ImagemVertical src ={'https://down-br.img.susercontent.com/file/6aaeb0f80f4f454af16c148aaefd7238'}/>
            <ImagemVertical src ={'https://down-br.img.susercontent.com/file/6aaeb0f80f4f454af16c148aaefd7238'}/>
        </ConteinerVertical>
        <ConteudoImagem src={'https://down-br.img.susercontent.com/file/6aaeb0f80f4f454af16c148aaefd7238'}/>
        <ConteinerCompra>
            <CompraInConteiner></CompraInConteiner>
            <ConteinerButton>
                <ButtonCarrinho/>
                <Button/>
                <ButtonCarrinho/>
            </ConteinerButton>
        </ConteinerCompra>
    </ConteinerExterno>
    <ConteinerDescricao>
        <Title>Descrição: </Title>
        <Descricao>VOLANTE NOVO VOLKSWAGEN MODELO FUSCA CÁLICE COR MARFIM*
                   <br/> - RÉPLICA 100% FIEL AO MODELO ORIGINAL CLÁSSICO VOLKSWAGEN
                    <br/> - PRODUTO NOVO E DE ALTA QUALIDADE
                    VALORIZE O INTERIOR DO SEU VEÍCULO! 
                    <br/> ADQUIRA UM PRODUTO NOVO E DE EXCELENTÍSSIMA QUALIDADE!
        </Descricao>
    </ConteinerDescricao>
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
