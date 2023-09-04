import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../../Server/api'
import Combaterias from '../../../Components/Produto/ComponentsBaterias/combaterias';


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

export default function Baterias() {
    const [cbaterias, setCbaterias] = useState([]);

useEffect(() => {
    const url = '/baterias';

    api.get(url)
    .then((response) => {
    console.log(response)
    setCbaterias(response.data)
    })
},[])

  return (
    <>
        <Container>
            <ListContainer>
            {
          cbaterias.map(baterias => {
            return (<Combaterias
              key={baterias.id}
              cbaterias={baterias}

            />)
          })
        }
            </ListContainer>
        </Container>
    </>
  )
}
