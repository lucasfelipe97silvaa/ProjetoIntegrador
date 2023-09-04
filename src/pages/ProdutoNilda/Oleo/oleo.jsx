import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../../Server/api'
import Comoleo from '../../../Components/Produto/ComponentsOleo/comoleo';


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

export default function Oleo() {
    const [coleo, setColeo] = useState([]);

useEffect(() => {
    const url = '/oleo';

    api.get(url)
    .then((response) => {
    console.log(response)
    setColeo(response.data)
    })
},[])

  return (
    <>
        <Container>
            <ListContainer>
            {
          coleo.map(oleo => {
            return (<Comoleo
              key={oleo.id}
              coleo={oleo}

            />)
          })
        }
            </ListContainer>
        </Container>
    </>
  )
}
