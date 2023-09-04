import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../../Server/api'
import Comfreios from '../../../Components/Produto/ComponentsFreios/comfreios';


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

export default function Freios() {
    const [cfreios, setCfreios] = useState([]);

useEffect(() => {
    const url = '/freios';

    api.get(url)
    .then((response) => {
    console.log(response)
    setCfreios(response.data)
    })
},[])

  return (
    <>
        <Container>
            <ListContainer>
            {
          cfreios.map(pneus => {
            return (<Comfreios
              key={pneus.id}
              cfreios={pneus}

            />)
          })
        }
            </ListContainer>
        </Container>
    </>
  )
}
