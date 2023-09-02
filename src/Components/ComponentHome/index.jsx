import React  from 'react'
import styled from 'styled-components'



const ImagemContainer = styled.img`
  width: 160px;
  height:150px;
  position: relative ;
  bottom:5px ;
  left: 5px;
  border-radius: 15px;  
`

const TitleMenu = styled.p`
  color: black;
  font-weight: 600;
  right: 50px;
`
const ConteinerTitles = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
    
`


const ContainerMenu = styled.div`
  width: 150px;
  height: 150px;
  background-color: #FFC004;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  
`
export default function ComponentsHome({imghome}) {
  return (
    <>
        <ContainerMenu>
          <ImagemContainer src={imghome.image}></ImagemContainer>
            <ConteinerTitles>
            <TitleMenu>{imghome.title}</TitleMenu>
            </ConteinerTitles>
        </ContainerMenu>
    </>
  )
}
