import React from 'react'
import styled from 'styled-components'

const CapaProduto = styled.img`
  width: 100%;
  height: 200px;
  border: 0;
  vertical-align: middle;
  float: left;
`

const ItemConteiner = styled.div`
  border-radius: 4px;
  background-color: #e6ecde;
  height: 380px;
  width: 220px;
  color: #29303b;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 10px;
  vertical-align: middle;
  display:flex;
  flex-direction: column;
  box-shadow: 1px solid #000;
`
const Title = styled.p`
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 5px;
  color: black;
`  
const Price = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 5px;
  color: #FFC004;
`

const Button = styled.div`
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
  transition: border-color ;
  font-family: inherit;
  margin-top: 10px;
`



const Link = styled.a`
  text-decoration: none;
`

const Conteiner = styled.div`
    width: 100%;
    height: 30px;
    background-color:  #e6ecde;
    display: flex;
    flex-direction: column;
`
const ConteinerButton = styled.div`
    display: flex;
    flex-direction: column;
`

export default function ProdutoHome({imagemHome}) {
  return (
    <>   
      <ItemConteiner>
        
        {/* <Link href={imagemHome.url} target='_blank'> */}
          <CapaProduto src="https://wx.mlcdn.com.br/ponzi/production/portaldalu/90603_01.jpg"/>
          
          <Conteiner>
          <Title>Driver Selenium D220TI 80w Rms 8 Ohms Diafragma Titânio</Title>
          <Price>R$50,00</Price>
          <Title>a vísta</Title>
          <ConteinerButton>
          <Button onClick={''}>Comprar</Button>

          </ConteinerButton>
          </Conteiner>
        {/* </Link> */}
      </ItemConteiner>
    </>
  )
}
