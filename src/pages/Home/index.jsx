import React, { useState,useEffect,} from 'react'
import Banner from '../../../public/image/Frame 1.svg'
import styled from 'styled-components'
import api from '../../Server/api'
import { Link } from 'react-router-dom'
import ComponentsHome from '../../Components/ComponentHome'
import ConteinerImgHome from '../../Components/ConteinerImgHome'
import Comhome from '../../Components/Produto/ComponentsOfHome/comhome'
import ImgFooter from '../../../public/image/banner-matriz-04 1imgFooter.svg'


const Thubnail = styled.img`
  width: 80vw;
  height: auto ;
  margin-bottom:50px ;
  border: none;
`
const ThubnailFooter = styled.img`
  width: 80vw;
  height: auto ;
  margin-bottom:50px ;
  border: none;
`

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
  border-radius: 0px 0px 10px 10px;
`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80vw;
  height: 200px;
  gap:30px;
  margin: 40px;
`

const ContOferta = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80vw;
  height: 1000px;
  margin: 40px;
  background-color: #fff;
`;
const ContainerOfertas = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80vw;
  height: 200px;
  gap:30px;
  margin: 40px;
  margin-left: 150px;
  margin-top: 500px;
  background-color: grey;
`
const Div = styled.div`
  width: 300px;
  height:150px;
  background-image: url('../../../public/ImagemHome/Rectangle 10.svg');
`

const ConteinerFotos = styled.div` //conteiner que se refere as fotos da home
  width: 80%;
  height: 400px;
  display: flex;
  justify-content: center;
  gap:20px;
  border-bottom: 1px solid #000;
`
const ConteinerFotosMenores = styled.div` // div que está dentro de ConteinerFotos**
  width: 700px;
  height: 70%;
  background-color: black;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;

`


export default function Home() {
  const [imghome, setImghome] = useState([]);
  const [chome, setChome] = useState([]);

  useEffect(() => {
    const url = '/imagemHome';

    api.get(url)
    .then((response) => {
     setImghome(response.data)
    })
  }, [])


  useEffect(() => {
    const url = '/ofertashome';

    api.get(url)
    .then((response) => {
    console.log(response)
    setChome(response.data)
    })
},[])

  return (
    <ContainerGeral>
      <ContainerSub>
    <Thubnail src={Banner}/>
    <Container>
    {
          imghome.map(imagemHome => {
            return (<ComponentsHome
              key={imagemHome.id}
              imghome={imagemHome}

            />)
          })
        }
      </Container>
    <ConteinerFotos>
        <ConteinerFotosMenores>
        </ConteinerFotosMenores>
        <Div/>
    </ConteinerFotos>
      <ContOferta>
         {
           chome.map(ofertashome=> {
             return (<Comhome
               key={ofertashome.id}
               chome={ofertashome}
 
             />)
           })
         }
         </ContOferta>
         <Link to={'/produtos'}>
         <ThubnailFooter src={ImgFooter}/>
         </Link>
         </ContainerSub>
    </ContainerGeral>
  )
}