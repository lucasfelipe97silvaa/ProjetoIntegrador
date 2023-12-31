import React , {useState} from 'react'
import styled from 'styled-components'

const CapaProduto = styled.img`
  width: 175px;
  height: 100%;
  border: 0;
  vertical-align: middle;
  float: left;
`

const ConteinerGeral = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    background-color: #e6ecde;
    align-items: center;
    padding: 10px;
    border: 1px solid #0a0a0a67;
    border-radius: 5px;
`

const ItemConteiner = styled.div`
  border-radius: 4px;
  background-color: #ffffff;
  height: 150px;
  width: 100%;
  color: #29303b;
  /* margin-bottom: 10px;
  margin-right: 10px; */
  /* padding: 10px; */
  vertical-align: middle;
  display:flex;
  align-items: center ;
  gap: 10px;
`
const Title = styled.p`
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 5px;
  color: black;
`  
const Price = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 5px;
  color: #FFC004;
`

const Button = styled.div`
  display: inline-block;
  margin-bottom: 100px;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 0.5px solid transparent;
  font-size: 14px;
  padding: 6px;
  color: #fff;
  background-color: #4EB524;
  border-color: black;
  border-radius: 4px;
  font-family: inherit;
  margin-top: 10px;
`



const Link = styled.a`
  text-decoration: none;
`

const Conteiner = styled.div`
    width: 400px;
    height: 100%;
    /* background-color:  #e6ecde; */
    display: flex;
    flex-direction: column;
    /* border-left:1px solid #0a0a0a67; */
    padding-left: 5px ;
`
const ConteinerButton = styled.div`
    display: flex;
    flex-direction: column;
`



export default function ProdutoFinalizar({pecas}) {
  const [loading, setLoading] = useState(true);

  function onDelete(id){
    setLoading(false);

    const url = `/tenis/${id}`;

    api.delete(url)
    .then((response) => {});

  }
  return (
    <>   
      {!loading
      ?
      (
        <div>deletando..</div>
      )
      :
      (
        <ConteinerGeral>
            <ItemConteiner>
                {/* <Link href={imagemHome.url} target='_blank'> */}
                {/* <CapaProduto src="https://wx.mlcdn.com.br/ponzi/production/portaldalu/90603_01.jpg"/> */}
                <CapaProduto src={pecas.image}/>
                <Conteiner>
                    <Title>Driver Selenium D220TI 80w Rms 8 Ohms Diafragma Titânio</Title>
                    <Price>{pecas.price}</Price>
                    <Title>a vísta</Title>
                    <ConteinerButton>
                    <Button onClick={() => onDelete(pecas.id)}>Excluir</Button>
                    </ConteinerButton>
                </Conteiner>
                {/* </Link> */}
            </ItemConteiner>
        </ConteinerGeral>
        )
      }
       
    </>
  )
}
