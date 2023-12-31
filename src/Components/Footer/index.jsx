import React from 'react'
import styled from 'styled-components'

const FooterColor = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: #fff;
  justify-content: center;

`

const FooterMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color:#FFC004;
    

`
const FooterConteiner = styled.div`
  width: 100%;
  height: 100px;
  margin-top: auto;
  

`

export default function Footer() {
  return (
    <>  
        <FooterConteiner> 
          <FooterMenu></FooterMenu>
          <FooterColor></FooterColor>
        </FooterConteiner>
    </>
  )
}
