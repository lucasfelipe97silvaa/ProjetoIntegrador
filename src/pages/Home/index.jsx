import React, { useState,useEffect,} from 'react'
import Banner from '../../../public/image/Frame 1.svg'
import styled from 'styled-components'
import api from '../../Server/api'
import ProdutoHome from '../../Components/Produto'
import { Link } from 'react-router-dom'
import ComponentsHome from '../../Components/ComponentHome'
import ConteinerImgHome from '../../Components/ConteinerImgHome'

const Thubnail = styled.img`
  width: 80vw;
  height: auto ;
  margin-bottom:50px ;
  margin-left: 150px; 
  border: none;
`


const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80vw;
  height: 200px;
  gap:30px;
  margin: 40px;
  margin-left: 150px;
`

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
  position: relative;
  right: 50px;
  bottom: 10px;
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

const Div = styled.div`
  /* background-color: #e90909; */
  width: 300px;
  height:150px;
  background-image: url('../../../public/ImagemHome/Rectangle 10.svg');
`
const ImagensHome = styled.img`
  width:100%;
  height:100%;
`

const ConteinerFotos = styled.div` //conteiner que se refere as fotos da home
  width: 80%;
  height: 400px;
  display: flex;
  justify-content: center;
  gap:20px;
  border-bottom: 1px solid #000;
  margin-left: 150px;
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
  const [imgconteiner, setImgconteiner] = useState([])

  useEffect(() => {
    const url = '/imagemHome';

    api.get(url)
    .then((response) => {
     setImghome(response.data)
    })
  }, [])

  useEffect(() => {
    const url = '/imgconteinerhome';

    api.get(url)
    .then((response) => {
      console.log(response)
     setImgconteiner(response.data)
    })
  }, [])

  return (
    <>
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
        {/* {
          imgconteiner.map(imgHomeHome => {
            return (<ConteinerImgHome
            key={imgHomeHome.id} 
            imgconteiner={imgHomeHome}
            />)
          })
        } */}
        </ConteinerFotosMenores>
        <Div/>
    </ConteinerFotos>
    <Container>
      <Link to={'/produto/detalhes_produtos'}>
      <ProdutoHome>
        
      </ProdutoHome>
      </Link>
      <ProdutoHome></ProdutoHome>
      <ProdutoHome></ProdutoHome>
    </Container>
    </>
  )
}
