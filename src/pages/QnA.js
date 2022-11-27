//한페이지당 문제하나 할 때 그 페이지
import React from "react";
import { useParams, Link } from "react-router-dom";
import Rating from '../components/Rating';
import styled from 'styled-components';
import Header from '../components/Header';
import Template from "../components/Template";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    background: #DFF6FF;
  }
  @font-face {
    font-family: 'Ycomputer-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/Ycomputer-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
  font-family: 'Ycomputer-Regular';
`;

const Blank= styled.div`
padding-bottom: 50px;
`;

const Middle = styled.div`
  flex: 10;
  padding: 3px 30px;
  padding-bottom: 4px;
  overflow-y: 10px;
  text-align: center;
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
    background-color: #06283D;
    color: white;}
`;

const movies = {
    1:{
        id: 1,
        title: '헤어질 결심',
        genre: 'romance'
    },
    2:{
        linkid: 2,
        title: '극한직업',
        genre: 'comedy'
    },
    3:{
        linkid: 3,
        title: '인터스텔라',
        genre: 'sf'
    },
    4:{
        linkid: 4,
        title: '전우치',
        genre: 'action'
    },
    5:{
        linkid: 5,
        title: '명량',
        genre: 'action'
    },
    6:{
        linkid: 6,
        title: '겨울왕국',
        genre: 'fantasy'
    },
    7:{
        linkid: 7,
        title: '어벤져스',
        genre: 'action'
    },
    8:{
        linkid: 8,
        title: '기생충',
        genre: 'thriller'
    },
    9:{
        linkid: 9,
        title: '어바웃 타임',
        genre: 'romance'
    },
};


const Movie = () => {
    
    const id = useParams().linkid;
    const movieId = movies[id];

    React.useEffect(()=>{
        console.log(movieId);
    },[movieId])


    return (
        <div>
            <GlobalStyle />
            <Template>
            <Header />
            <Blank />
            {movieId ? (
                <Middle>
                <div>
                <img width="150px" height="212px" alt="헤어질 결심 포스터"
                     src="https://movie-phinf.pstatic.net/20220607_129/16545872892918GA4h_JPEG/movie_image.jpg" />
                    <h2>{movieId.title}</h2>
                    <Rating />

                    <button onClick={() => {
                        const a = "http://localhost:3000/testing/"+(parseInt((window.location.href).toString().replace("http://localhost:3000/testing/",""))-1).toString();
                        window.location.href = a
                    }}>이전 영화</button>
                    
                    <button onClick={() => {
                        const a = "http://localhost:3000/testing/"+(parseInt((window.location.href).toString().replace("http://localhost:3000/testing/",""))+1).toString();
                        console.log(a);
                        window.location.href = a
                    }}>다음 영화</button>
                </div>
                </Middle>
                ) : (
                <Middle>
                    <div>
                    수고하셨습니다!
                    </div>
                    <Blank />
                    <button>
                        <Link to="/result" style={{color:'inherit',textDecoration:'inherit'}} >결과 보기</Link>
                    </button>
                </Middle>
            )}
            </Template>
        </div>
    );
};
    

export default Movie;