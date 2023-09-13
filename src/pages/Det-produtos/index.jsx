import React, { useState,useEffect,}from 'react'
import styled from 'styled-components'
import ListDetalhes from '../../Components/Detalhes'
import ProdutoHome from '../../Components/Produto'
import api from '../../Server/api'
import { useParams } from 'react-router-dom'
import Comsugestao from '../../Components/Produto/ComponentsSugestao/comsugestao'

const ConteinerGlobal = styled.div`
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
  border-radius: 0px 0px 10px 10px;
`


const ContSugestao = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  background-color: #fff;
`;

const Title = styled.p`
    font-size: 30px;
    font-weight: 500;
    margin: 20px;
`

const Containertitle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: start;
  border-top: 1px solid #000;
`

export default function Detalhes() {
  const [pecas, setPecas] = useState({});
  const [sugest, setSugest] = useState([])

const {id} = useParams()

  useEffect(() => {
    const url = `/peca/${id}`
      if(id){
        api.get(url)
          .then((response) => {
            console.log(response.data)
              setPecas(response.data)
              console.log(pecas)
          })
    }
  },[])

  useEffect(()=>{
    const url = '/sugestoes';

    api.get(url)
      .then((response) => {
        console.log(response)
        setSugest(response.data)
      })
  },[])

  return (
    <ConteinerGlobal>
      <ContainerSub>
       <ListDetalhes
          key={pecas.url}
          pecas={pecas}/>
          <Containertitle>
        <Title>Sugestões de produção:</Title>
        </Containertitle>
        <ContSugestao>
          {
            sugest.map((sugestao)=>{
              return(<Comsugestao
                key={sugestao.id}
                sugest={sugestao}
              />)
            })
          }
        </ContSugestao>
      </ContainerSub>
    </ConteinerGlobal>
  )
}
