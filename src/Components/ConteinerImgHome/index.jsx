import React from 'react'
import styled from 'styled-components'

const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
  border: 0;
  border-radius: 10px ;
  vertical-align: middle;
  float: left;
`
const ContainerGeral = styled.div`
  width: 100px;
  height: 100px;
`

export default function ConteinerImgHome({imgHomeHome}) {
  return (
    <>
      <ContainerGeral>
        <Thumbnail src={imgHomeHome.image} />
      </ContainerGeral>
    </>
  )
}
