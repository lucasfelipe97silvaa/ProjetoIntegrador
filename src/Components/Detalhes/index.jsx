import React, {useState, useEffect}from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const ConteinerExterno = styled.div`
width: 100%;
height: 400px;
background-color: #fff;
display: flex;
justify-content: center;
/* border-top: 1px solid #000; */

`
const ConteinerGlobal = styled.div`
width: 100%;
height: 100%;
background-color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const ImagemVertical = styled.img`
    width:100%;
    height:100px;
    background-color: yellow;
    ` 
const ConteinerVertical = styled.div`
    width: 100px;
    height: 100%;
    /* background-color: blue; */
    /* margin-left: 242px; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ConteudoImagem = styled.img`
    width: 413px;
    height: 100%;  
    background-color: aliceblue;
    /* margin-left: 30px; */
    margin: 10px;
    /* border-bottom: 1px solid  #000; */
`

const ConteinerCompra = styled.div`
    display: flex;
    flex-direction: column;
    width: 363px;
    height: 100%;
    background-color: aliceblue;
    margin-left: 148px;
    border: 1px solid #00000076;
    margin-top: 10px;

`
const CompraInConteiner = styled.div`
    width: 100%;
    height: 80%;
    background-color: #fff;
    display: flex;
    flex-direction: column; 
`

const ConteinerButton = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
    align-items: center;
    background-color: #fff;
    justify-content: space-around;
`
const Button = styled.span`
    width:300px;
    cursor: pointer;
    height: 40px;
    background-color: #347919;
    margin-top: 20px;
    /* margin: 10px ; */
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
      background-color: #1f5c07  ;
    }
    color: #fff;
    font-weight: 600;
    border: #000;
    margin-bottom: 30px;
`
const ButtonCarrinho = styled.div`
    width:300px;
    cursor: pointer;
    height: 40px;
    background-color: #59c72e;
    margin-top: 20px;
    /* margin: 10px ; */
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
      background-color: #2d7510  ;
    }
    color: #fff;
    font-weight: 600;
    border: #000;
    margin-bottom: 30px;
`

const ConteinerDescricao = styled.div`
    width: 50%;
    height:200px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    background-color: #fff;
    /* margin-left: 200px; */
`
const ConteinerGeralDescri = styled.div`
    display: flex;
    width: 98.7%;
    height:200px;
    /* background-color: #861d1d; */
    padding: 10px ;
    margin-top:20px ; 
    margin-bottom: 100px;
    border-top:1px solid #00000076;
    padding-bottom: 20px;
    justify-content: start;
`

const Descricao = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin: 20px;
`

const Title = styled.p`
    font-size: 30px;
    font-weight: 500;
    margin: 20px;
`

const Price = styled.p`
    color: #FFC004;
    font-size: 36px;
    font-weight: 500;
    margin-left: 15px;
`
const infiniteValue = {
    title:'',
    image: '',
    price:0 ,
    url:'' 
};

export default function ListDetalhes({pecas}) {
    // const {id} = useParams();

    // const url = `/peca/${id}`;

    // useEffect(() => {
    //     if(id){
    //         api.get(url)
    //             .then((response) =>  {
    //                 console.log(response.data);
    //                 setValues(response.data);
    //                 console.log(values)
    //             })
    //     }
    // },[])


  return (
    <>
<ConteinerGlobal>
    <ConteinerExterno>
        <ConteinerVertical>
            <ImagemVertical src ={pecas.image}/>
            <ImagemVertical src ={pecas.image}/>
            <ImagemVertical src ={pecas.image}/>
        </ConteinerVertical>
        {/* <ConteudoImagem src={'https://down-br.img.susercontent.com/file/6aaeb0f80f4f454af16c148aaefd7238'}/> */}
        <ConteudoImagem src={pecas.image}/>
        <ConteinerCompra>
            <CompraInConteiner>
                <Title >{pecas.title}</Title>
                {/* <Title>{peca.title}</Title> */}
                <Price> {pecas.price}</Price>
                {/* <Price>{peca.price}</Price> */}
            </CompraInConteiner>
            <ConteinerButton>   
            <Link to={`/produto/finalizar/${pecas.id}`}>    
            <Button>Comprar agora</Button>
            </Link>
            <ButtonCarrinho>Adicionar ao carinho</ButtonCarrinho>   
            </ConteinerButton>
        </ConteinerCompra>
    </ConteinerExterno>
    <ConteinerGeralDescri>     
        <ConteinerDescricao>
            <Title>Descrição: </Title>
            <Descricao>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas et voluptate impedit! Libero modi, quaerat, suscipit architecto sapiente quas officiis consectetur qui dolorum dolor necessitatibus at excepturi veniam incidunt cum.       
            </Descricao>
        </ConteinerDescricao>
    </ConteinerGeralDescri>
</ConteinerGlobal>
    </>
  )
}
