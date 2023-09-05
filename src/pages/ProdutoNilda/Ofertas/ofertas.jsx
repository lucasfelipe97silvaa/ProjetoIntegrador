import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../../Server/api'
import Comofertas from '../../../Components/Produto/ComponentsOfertas/comoferta';

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
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`


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
    <ContainerGeral>
      <ContainerSub>
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
      </ContainerSub>
    </ContainerGeral>
  )
}
