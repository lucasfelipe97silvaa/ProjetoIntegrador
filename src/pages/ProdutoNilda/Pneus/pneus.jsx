import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../../Server/api'
import Compneus from '../../../Components/Produto/ComponentsPneus/compneus';


const ContainerGeral = styled.div`
display: flex;
flex-direction: column;
background-color: #e7e5e5c0;
justify-content: center;
align-items: center;
`

const ContainerSub = styled.div`
  display: flex;
  flex-direction: column;
  width: 1100px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-radius:10px 10px;
  margin-top: 5px;
`


const Container = styled.div`
  max-width: 960px;
  margin: 30px auto;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`;

export default function Pneus() {
    const [cpneus, setCpneus] = useState([]);

useEffect(() => {
    const url = '/pneus';

    api.get(url)
    .then((response) => {
    console.log(response)
    setCpneus(response.data)
    })
},[])

  return (
    <ContainerGeral>
      <ContainerSub>
        <Container>
            <ListContainer>
            {
          cpneus.map(pneus => {
            return (<Compneus
              key={pneus.id}
              cpneus={pneus}

            />)
          })
        }
            </ListContainer>
        </Container>
      </ContainerSub>
    </ContainerGeral>
  )
}
