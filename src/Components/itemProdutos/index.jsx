import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
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
  box-shadow: 5px 10px #bebdbd;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
  border: 0;
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
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 5px;
  color: #FFC004;
`;

const Button = styled.div`
  display: inline-block;
  margin-bottom: -60px;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 14px;
  padding: 8px 15px;
  color: #fff;
  background-color: #1414d2;
  border-color: #6d6dec;
  border-radius: 4px;

`;

const ItemLink = styled.a`
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

export default function FourDesigner({pecas}) {
  return (
    <>
        <ItemContainer>
          <Conteiner>
            <Thumbnail src={pecas.image} />
            <Title>{pecas.title.substring(0,35)}</Title>
            <Price>{pecas.price}</Price>
            <ConteinerButton>
            <Button>Comprar</Button>
            </ConteinerButton>
          </Conteiner>
        </ItemContainer>
    </>
  )
}

