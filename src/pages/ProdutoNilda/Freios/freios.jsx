import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../../Server/api'
import Comfreios from '../../../Components/Produto/ComponentsFreios/comfreios';

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
    <ContainerGeral>
      <ContainerSub>
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
      </ContainerSub>
    </ContainerGeral>
  )
}
