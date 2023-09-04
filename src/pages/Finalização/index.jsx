import React, { useState,useEffect,}from 'react'
import styled from 'styled-components'
import ProdutoFinalizar from '../../Components/ProdutoFinalar';
import ConteinerPreco from '../../Components/ConteinerFinalizar';
import api from '../../Server/api'
import { useParams } from 'react-router-dom'

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
    /* padding: 10px ; */
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
    border-left: 1px solid #000;
    padding: 10px;
    align-items: center;    
    justify-content: space-around;
`
const DivFinalizar = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 200px;
    background-color: #7a7171;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    padding: 10px;
    align-items: center;
`

const FormFinalizar = styled.form`
    display: flex;
`




function Finalizacao(){
    const [pecas, setPecas] = useState({});

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

    return(
        <>
       <ConteinerExterno>
            <ConteinerProduto>
                <h1>Minha Cesta</h1>
                <ProdutoFinalizar key={pecas.url}
              pecas={pecas}/>
            </ConteinerProduto>
             <ConteinerFinalizar>
                <DivFinalizar>
                    <FormFinalizar>
                        <input type="text"></input>
                        <button>Cep</button>
                    </FormFinalizar>
                    </DivFinalizar> 
               <ConteinerPreco key={pecas.url} pecas={pecas}/>
            </ConteinerFinalizar> 
       </ConteinerExterno>
       </>
    )
}

export default Finalizacao;

