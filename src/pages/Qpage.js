//설문조사 전 페이지

import { createGlobalStyle } from 'styled-components';
import Header from "../components/Header";
import Template from "../components/Template";
//import QnA from "./QnA";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    background: #DFF6FF;
  }
  @font-face {
    font-family: 'Ycomputer-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/Ycomputer-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}font-family: 'Ycomputer-Regular';
`;

const Blank= styled.div`
padding-bottom: 20px;
`;

const Explain= styled.div`
padding-right: 1%;
padding-left: 1%;
flex: 5;
padding: 3px 30px;
padding-bottom: 4px;
`;

const Button= styled.div`

flex: 10;
padding: 3px 30px;
padding-bottom: 4px;
overflow-y: 10px;
text-align: center;

@font-face {
  font-family: 'Ycomputer-Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/Ycomputer-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
text-align: center;
font-family: 'Ycomputer-Regular';
button{
  margin: 20px;
  position: relative;
  border: none;
  display: inline-block;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Ycomputer-Regular';
  text-decoration: none;
  font-weight: 400;
  transition: 0.25s;
  background-color: #DFF6FF;
  color: black;
`;

const Qpage = () => {
  return (
      <>
      <GlobalStyle />
      <Template>
        <Header />
        <Blank />
        <Explain>
          <div>
          이 사이트는 영화에 별점을 매기는 것을 통해 사용자가 가장 선호하는 장르를 분석하고, 이를 토대로
          사용자에게 영화를 추천해주는 웹사이트입니다. 앞으로 나오는 9가지 영화에 1점부터 5점까지 별점을 매겨주세요!
          </div>
        </Explain>
        <Button>
          <button>
            <Link to="/testing/1"style={{color:'inherit',textDecoration:'inherit'}}>테스트 시작하기</Link>
          </button>
        </Button>
      </Template>
      </>
  );
};

export default Qpage;