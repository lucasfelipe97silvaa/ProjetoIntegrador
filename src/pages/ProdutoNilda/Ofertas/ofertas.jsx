import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../../Server/api'
import Comofertas from '../../../Components/Produto/ComponentsOfertas/comoferta';


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

export default function Ofertas() {
    const [cofertas, setCofertas] = useState([]);

useEffect(() => {
    const url = '/ofertas';

    api.get(url)
    .then((response) => {
    console.log(response)
    setCofertas(response.data)
    })
},[])

  return (
    <>
        <Container>
            <ListContainer>
            {
          cofertas.map(ofertas => {
            return (<Comofertas
              key={ofertas.id}
              cofertas={ofertas}

            />)
          })
        }
            </ListContainer>
        </Container>
    </>
  )
}
