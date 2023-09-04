import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../../Server/api'
import Compneus from '../../../Components/Produto/ComponentsPneus/compneus';


const Container = styled.div`
  max-width: 960px;
  margin: 30px auto;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ccc;
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
    <>
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
    </>
  )
}
