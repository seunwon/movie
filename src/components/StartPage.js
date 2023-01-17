//첫 시작 페이지

import React from "react";
import styled from "styled-components"
import Username from './Username'


  const GlobalStyle = styled.div`
  @font-face {
    font-family: 'Ycomputer-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/Ycomputer-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
  text-align: center;
  font-family: 'Ycomputer-Regular';
  `
  const HeadBlock = styled.div`
  
  padding: 3px 30px;
  padding-bottom: 20%;
  text-align: center;`

  const Imoji = styled.div`
 
  font-size: 70px;
  text-align: center;`

  const Bottom = styled.div`
 
  flex: 100;
  padding-top: 70px;
  text-align: center;`
  
  

function StartPage() {
  
    return (
    <>
    <GlobalStyle>
      <HeadBlock />
      <h1>당신의 영화 취향은?</h1>
      <Imoji>🎥</Imoji>
      <Bottom>
      <Username />
      </Bottom>
    </GlobalStyle>
      
    </>);
}

export default StartPage;