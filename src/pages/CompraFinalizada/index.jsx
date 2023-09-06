import React from 'react';
import styled from 'styled-components'
import Img from '../../../image/image/verificar 1Finalizar.svg'

const ConteinerGlobal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e7e5e5c0;
  justify-content: center;
  align-items: center;
  height: 400px;


`
const ContainerSub = styled.div`
  display: flex;
  flex-direction: column;
  width: 1100px;
  height: 400px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 0px 0px 10px 10px;
`
const ContainerProduto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Thumbnail = styled.img`
    width: 60px;
    height: 60px;
    border: 1px solid #0a0a0add;
    border-radius: 60px;
    padding: 20px;
`
const ContainerTitle = styled.div`
    width: auto;
    height: 30px;
    margin: 30px;
`
const Title = styled.p`
    font-weight: 700;
    font-size: 24px;
    color: #4EB524;
`
export default function CompraFinalizar() {
  return (
    <ConteinerGlobal>
        <ContainerSub>
            <ContainerProduto>
                <Thumbnail src={Img}/>
                <ContainerTitle>
                    <Title>Compra finalizada com sucesso</Title>
                </ContainerTitle>
            </ContainerProduto>
        </ContainerSub>
    </ConteinerGlobal>
  )
}
