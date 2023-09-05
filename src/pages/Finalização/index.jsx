import React, { useState,useEffect,}from 'react'
import styled from 'styled-components'
import ProdutoFinalizar from '../../Components/ProdutoFinalar';
import ConteinerPreco from '../../Components/ConteinerFinalizar';
import api from '../../Server/api'
import cepApi from '../../Server/cepApi'
import { useParams } from 'react-router-dom'


const Input = styled.input`
  background-color: #e7e5e5c0 ;
  border-radius: 5px;
  display: flex;
  justify-content: start;
  border:1px solid #22212171; 
`
const InputNum = styled.input`
  background-color: #e7e5e5c0 ;
  border-radius: 2px;
  display: flex;
  border: none;
  border:1px solid #22212171; 
`
/* div Form utilizada no Form*/
const Form = styled.div`
  display:flex;
  margin-bottom: 30px;
`
const Conteiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  `
  const Label = styled.label`
  display:flex;
  flex-direction:column;
  margin-top: 1px;
  font-size: 10px;
  
  `
const ContainerForm = styled.div`
  display: flex;
`
const ContainerNum = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 40px;
  width: 40px;
  margin-left: 6px;
`

  const Button = styled.button`
    padding: 8px;
    background-color: #0635AD;
    color: #fff;
    border: none;
    cursor: pointer;
  `
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
    background-color: #F5F5F5;
    padding: 10px;
    align-items: center;
    border-radius: 10px;
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
     

      const urlcep = `/13084190/json/`; {/*Pesquisa Cep */} 

      useEffect(() => {
        cepApi.get(urlcep)
        .then((response)=>{
          console.log(response)
          setCep(response.data)
        })
        
      },[])
      
      function onSubmit(ev){
        ev.preventDefault();

    
      }
    
      function onChange(ev){
        const {name, value} = ev.target

        console.log({name,value})

        setCep({...cep,[name]:value});
    }


    return(
        <ContainerGeral>
          <ContainerSub>
            <ConteinerExterno>
                  <ConteinerProduto>
                      <h1>Minha Cesta</h1>
                      {/* trazendo as informações do "ID" para finalazção da compra*/}
                      <ProdutoFinalizar 
                        key={pecas.url} 
                        pecas={pecas}/> 
                  </ConteinerProduto>
                  <ConteinerFinalizar>
                  <ContainerDfinalizar>
                      <DivFinalizar>
                          <FormFinalizar onSubmit={onSubmit}> {/*Formulario pesquisa de cep */}
                              <Form>
                                <Input type="text" id="cep" placeholder='Digite seu Cep:' />
                                <Button >Consultar</Button>
                              </Form>
                          <ContainerForm>
                            <Conteiner>
                              <Label htmlFor="logradouro">Logradouro</Label>
                              <Input type="submit" id="logradouro" name="logradouro" value={cep.logradouro} onChange={onChange} />
                              <Label htmlFor="bairro">Bairro</Label>
                              <Input type="submit" id="bairro" name="bairro" value={cep.bairro} onChange={onChange}/>
                              <Label htmlFor="localidade">Localidade</Label>
                              <Input type="submit" id="localidade" name="localidade" value={cep.localidade} onChange={onChange} />
                              <Label htmlFor="uf">Uf</Label>
                              <Input type="submit" id="uf" name="uf" value={cep.uf} onChange={onChange} />
                            </Conteiner>
                            <ContainerNum>
                            <Label type="text">Numero:</Label>
                            <InputNum type="text" onChange={onChange}></InputNum>
                            </ContainerNum>
                              </ContainerForm>
                          </FormFinalizar>
                      </DivFinalizar> 
                  </ContainerDfinalizar>
                    <ConteinerPreco key={pecas.url} pecas={pecas}/> {/*Informação do valor "ID" selecionado */}
                  </ConteinerFinalizar> 
            </ConteinerExterno>
          </ContainerSub>
       </ContainerGeral>
    )
}

export default Finalizacao;

