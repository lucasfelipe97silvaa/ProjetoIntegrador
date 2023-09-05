import React, { useState,useEffect,}from 'react'
import styled from 'styled-components'
import ProdutoFinalizar from '../../Components/ProdutoFinalar';
import ConteinerPreco from '../../Components/ConteinerFinalizar';
import api from '../../Server/api'
import cepApi from '../../Server/cepApi'
import { useParams } from 'react-router-dom'

const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e7e5e5c0;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
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

const ConteinerExterno = styled.div`
    width: 100%;
    height:100%;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    `

const ConteinerProduto = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    `

const ConteinerFinalizar = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 600px;
    background-color: #fff;
    border-left: 1px solid #0a0a0a67;
    padding: 10px;
    align-items: center;    
    justify-content: space-around;
`
const ContainerDfinalizar = styled.div`
    display: flex;
    height: 250px;
    width: 350px;
    background-color: #FFC004;
    justify-content: center;
    align-items: center;
`
const DivFinalizar = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 200px;
    background-color: #7a7171;
    padding: 10px;
    align-items: center;
`

const FormFinalizar = styled.form`
    display: flex;
    flex-direction: column;
`

function Finalizacao(){
    const [pecas, setPecas] = useState({});
    const [cep, setCep] = useState([]);


    const {id} = useParams()
    
      useEffect(() => {
        const url = `/peca/${id}`
          if(id){
            api.get(url)
              .then((response) => {
                console.log(response.data)
                  setPecas(response.data)
              })
        }
      },[])

      const urlcep = `/13084190/json/`;

      useEffect(() => {
        cepApi.get(urlcep)
        .then((response)=>{
          console.log(response)
          setCep(response.data)
        })
      },[])
      
    return(
        <ContainerGeral>
          <ContainerSub>
            <ConteinerExterno>
                  <ConteinerProduto>
                      <h1>Minha Cesta</h1>
                      <ProdutoFinalizar key={pecas.url}
                    pecas={pecas}/>
                  </ConteinerProduto>
                  <ConteinerFinalizar>
                  <ContainerDfinalizar>
                      <DivFinalizar>
                          <FormFinalizar>
                              <input type="text" ></input>
                              <button>Cep</button>
                              <input type='submit'value={cep.logradouro}></input>
                              <input type='submit'value={cep.bairro}></input>
                              <input type='submit'value={cep.localidade}></input>
                              <input type='submit'value={cep.uf}></input>
                          </FormFinalizar>
                      </DivFinalizar> 
                  </ContainerDfinalizar>
                    <ConteinerPreco key={pecas.url} pecas={pecas}/>
                  </ConteinerFinalizar> 
            </ConteinerExterno>
          </ContainerSub>
       </ContainerGeral>
    )
}

export default Finalizacao;

