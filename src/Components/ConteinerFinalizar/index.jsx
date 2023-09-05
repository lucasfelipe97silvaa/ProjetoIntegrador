import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const DivFinalizar = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 200px;
    background-color: #F5F5F5;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    padding: 10px;
    align-items: center;
    justify-items: flex-start;
`
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`

const ContainerDfinalizar = styled.div`
    display: flex;
    height: 250px;
    width: 350px;
    background-color: #FFC004;
    justify-content: center;
    align-items: center;
`

const ButtonFinalizar = styled.div`
  display: inline-block;
  margin-bottom: 100px;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 0.5px solid transparent;
  font-size: 14px;
  padding: 6px;
  color: #fff;
  background-color: #4EB524;
  border-color: black;
  border-radius: 4px;
  font-family: inherit;
  margin-top: 10px;
`
const PriceFinalizar = styled.p`
  font-weight: 700;
  font-size: 20px;
  /* margin-bottom: 5px; */
  color: #FFC004;
  border-top: 1px solid #000;
`
const Title = styled.p`
  font-weight: 500;
  font-size: 12px;
  margin-top: 100px;
  color: black;
` 


export default function ConteinerPreco({pecas}) {
  return (
    <ContainerDfinalizar>
      <DivFinalizar>
        <Container>
          <Title>Valor Total:</Title>
          <PriceFinalizar>{pecas.price}</PriceFinalizar>
          <div>
            <Link to={'/finalizar'}>
              <ButtonFinalizar>Fizalizar compra</ButtonFinalizar> 
            </Link>
          </div>
        </Container>
       </DivFinalizar>
    </ContainerDfinalizar>
  )
}
