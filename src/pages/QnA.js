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
        linkid: 1,
        title: '헤어질 결심',
        img: "https://www.themoviedb.org/t/p/w1280/yGXMia1VNEovB7014ldTHwT1r50.jpg" ,
        genre1: 'romance',
        genre2: 'thriller'
    },
    2:{
        linkid: 2,
        title: '살인의 추억',
        img: "https://www.themoviedb.org/t/p/w1280/sujAihJHmNMfeMNQ004KYIPvrGA.jpg" ,
        genre1: 'thriller',
        genre2: 'action'
    },
    3:{
        linkid: 3,
        title: '전우치',
        img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/48QvXMsVeNlEEL55jUixVnX09KS.jpg" ,
        genre1: 'action',
        genre2: 'fantasy'
    },
    4:{
        linkid: 4,
        title: '겨울왕국',
        img: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/nelAGS4rcZm2Qyuy3TSNWgU2mEL.jpg",
        genre1: 'romance',
        genre2: 'fantasy'
    },
    5:{
        linkid: 5,
        title: '범죄도시',
        img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A5MIbqxuQfQRtzGxg5UUTAxHfsM.jpg" ,
        genre1: 'action',
        genre2: 'comedy'
    },
    6:{
        linkid: 6,
        title: '곡성',
        genre1: 'fantasy',
        img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/k9AKtgRErXjz14lFHL2IJVCgwOT.jpg" ,
        genre2: 'thriller'
    },
    7:{
        linkid: 7,
        title: '이터널 션샤인',
        img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6HNRo7VYpvM5x5O921bEF2BG7f4.jpg" ,
        genre1: 'romance',
        genre2: 'fantasy'
    },
    8:{
        linkid: 8,
        title: '엑시트',
        img: "https://www.themoviedb.org/t/p/w1280/a3QQOKBvE1zkTm1pmiaUvKJHmak.jpg" ,
        genre1: 'action',
        genre2: 'comedy'
    },
    9:{
        linkid: 9,
        title: '뷰티 인사이드',
        img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uozXCzZ0QhoWLmpV5M3tCyidSEr.jpg" ,
        genre1: 'romance',
        genre2: 'fantasy'
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
                <img width="150px" height="212px" alt="포스터"
                     src={movieId.img}/>
                    <h2>{movieId.title}</h2>
                    <Rating />

                    <button onClick={() => {
                        const a = "https://cosmos-movie22.netlify.app/testing/"+(parseInt((window.location.href).toString().replace("https://cosmos-movie22.netlify.app/testing/",""))-1).toString();
                        window.location.href = a
                    }}>이전 영화</button>
                    
                    <button onClick={() => {
                        const a = "https://cosmos-movie22.netlify.app/testing/"+(parseInt((window.location.href).toString().replace("https://cosmos-movie22.netlify.app/testing/",""))+1).toString();
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
