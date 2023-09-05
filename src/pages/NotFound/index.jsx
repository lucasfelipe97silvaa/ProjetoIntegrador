import React from 'react';
import styled from 'styled-components'

const ConteinerGlobal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e7e5e5c0;
  justify-content: center;
  align-items: center;
  height: 400px;


`
const ContainerSub = styled.div`
  display: flex;
  flex-direction: column;
  width: 1100px;
  height: 400px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 0px 0px 10px 10px;
`


function NotFound(){
    return(
        <ConteinerGlobal>
            <ContainerSub>
                <h1>Error 404 - Página não cadastrada... <br/> :/  </h1>
            </ContainerSub>
        </ConteinerGlobal>
    )
}

export default NotFound;