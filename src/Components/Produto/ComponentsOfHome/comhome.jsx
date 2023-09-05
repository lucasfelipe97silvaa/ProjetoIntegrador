import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const ItemContainer = styled.div`
  border-radius: 4px;
  background-color: #FFFFFF;
  height: 380px;
  width: 220px;
  color: #29303b;
  margin-bottom: 10px;
  margin: 20px;
  padding: 10px;
  vertical-align: middle;
  display:flex;
  flex-direction: column;
  box-shadow: 5px 10px #bebdbd;
  gap: 30px;
  border: 1px solid #0a0a0add;

`;


const Thumbnail = styled.img`
   width: 100%;
  height: 200px;
  vertical-align: middle;
  float: left;
`

const Title = styled.div`
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 5px;
  color: black;
`;

const Price = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 5px;
  color: #FFC004;
`;

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
  border-color: #36831761;
  border-radius: 10px;
  &:hover{
      background-color: #2d7510  ;
    }
  transition: border;
  font-family: inherit;
  margin-top: 10px;
  width: 100px;
  box-shadow: 1px  3px  #9b9b9b86;
`;

const ItemLink = styled.a`
  text-decoration: none;
`
const Conteiner = styled.div`
    width: 100%;
    height: 30px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    `

const ConteinerButton = styled.div`
  display: flex;
  flex-direction: column;
`

const Subtitle = styled.h4`
  font-weight: 200;
  color: #FFC004;
`

export default function Comhome({chome}) {
  return (
    <>
        <ItemContainer>
            <Conteiner>
                <Thumbnail src={chome.image} />
                <Title>{chome.title.substring(0,35)}</Title>
                <Subtitle>em até 3x</Subtitle>
                <Price>{chome.price}</Price>
                    <ConteinerButton>
                        <Link to={`/produto/detalhes_produtos/${chome.id}`}>
                            <Button>Comprar</Button>
                        </Link> 
                    </ConteinerButton>
            </Conteiner>
        </ItemContainer>
    </>
  )
}
