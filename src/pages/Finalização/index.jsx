import React from 'react';
import styled from 'styled-components'
import ProdutoFinalizar from '../../Components/ProdutoFinalar';

const ConteinerExterno = styled.div`
    width: 100%;
    height:60px auto;
    background: grey;
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
    height: 500px;
    background-color: grey;
    border-left: 1px solid #000;
    padding: 10px;
`

const FormFinalizar = styled.form`
    display: flex;
    flex-direction: column;
`




function Finalizacao(){
    return(
       <ConteinerExterno>
            <ConteinerProduto>
                <h1>Minha Cesta</h1>
                <ProdutoFinalizar/>
                <ProdutoFinalizar/>
            </ConteinerProduto>
            <ConteinerFinalizar>
                <FormFinalizar>
                    <input type="text"></input>
                    <input/>
                </FormFinalizar>
            </ConteinerFinalizar>
       </ConteinerExterno>
    )
}

export default Finalizacao;