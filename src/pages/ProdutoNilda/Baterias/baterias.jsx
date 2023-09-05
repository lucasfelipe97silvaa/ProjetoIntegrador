import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../../Server/api'
import Combaterias from '../../../Components/Produto/ComponentsBaterias/combaterias';

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
    <ContainerGeral>
      <ContainerSub>
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
      </ContainerSub>
    </ContainerGeral>
  )
}
