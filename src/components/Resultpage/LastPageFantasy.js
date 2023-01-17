import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import netflix from "img/Netflix.png";
import tving from "img/Tving.png";
import watcha from "img/Watcha.png";
import wavve from "img/Wavve.png";
import disney from "img/Disney.png";

function LastPageFantasy({ userName }) {
  return (
    <Recommend>
      <Blank />
      <HeadBlock>
        <h3>
          {window.localStorage.getItem("userName")}
          &nbsp; 님은 판타지 장르를 좋아하네요! <br />
          판타지 장르를 좋아하는 당신에게 영화를 추천해 줄게요!
        </h3>
      </HeadBlock>

      <ExtraMovie>
        <Movie>
          <Poster
            alt="마션 포스터"
            src="https://movie-phinf.pstatic.net/20151014_112/1444802557577pCaPD_JPEG/movie_image.jpg?type=m203_290_2"
          />
          <h3>마션(2015)</h3>
          <p>♥ 평점 8.72</p>
            <a
              href="https://movie.naver.com/movie/bi/mi/basic.naver?code=129049"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <More>♥ 마션 더 알아보기!</More>
            </a>
          <p>
            ♥ 어디서 볼 수 있나요?
            <br />
          </p>
          <Ott alt="디즈니+" src={disney} />
        </Movie>

        <Movie>
          <Poster
            alt="해리 포터 포스터"
            src="https://movie-phinf.pstatic.net/20181019_236/1539926790655oHv5z_JPEG/movie_image.jpg?type=m203_290_2"
          />
          <h3>해리 포터와 마법사의 돌(2001)</h3>
          <p>♥ 평점 9.39</p>
            <a
              href="https://movie.naver.com/movie/bi/mi/basic.naver?code=30688"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <More>♥ 해리 포터 더 알아보기!</More>
            </a>
          <p>
            ♥ 어디서 볼 수 있나요?
            <br />
          </p>
          <Ott alt="웨이브" src={wavve} />
        </Movie>

        <Movie>
          <Poster
            alt="토이 스토리 포스터"
            src="https://movie-phinf.pstatic.net/20111222_26/1324486740607KI01H_JPEG/movie_image.jpg?type=m203_290_2"
          />
          <h3>토이 스토리(1995)</h3>
          <p>♥ 평점 9.33</p>
            <a
              href="https://movie.naver.com/movie/bi/mi/basic.naver?code=17153"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <More>♥ 토이 스토리 더 알아보기!</More>
            </a>
          <p>
            ♥ 어디서 볼 수 있나요?
            <br />
          </p>
          <Ott alt="디즈니+" src={disney} />
        </Movie>
      </ExtraMovie>

      <Footers>
        <button>
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            다시하기
          </Link>
        </button>
      </Footers>
      <Blank />
    </Recommend>
  );
}

export default LastPageFantasy;

const Recommend = styled.div`
  @font-face {
    font-family: "Ycomputer-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/Ycomputer-Regular.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  text-align: center;
  font-family: "Ycomputer-Regular";
  position: relative;
  flex: 10;
  padding: 3px 30px;
  padding-bottom: 4px;
  overflow-y: 10px;
  text-align: center;
  background-color: #06283d;
  color: white;

  a {
    &:hover {
      color: red;
    }
  }

  h3 {
    margin: 0;
    font-size: 20px;
    color: white;
  }
`;

const Blank = styled.div`
  padding-bottom: 50px;
`;

const HeadBlock = styled.div`
  display: flex;
  justify-content: center;
  height: 150px;
`;
const ExtraMovie = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Movie = styled.div``;

const Poster = styled.img`
  position: relative;
  width: 150px;
  height: 212px;
`;

const More = styled.a`
  &:hover {
    color: red;
  }
  color: white;
`;

const Ott = styled.img`
  position: relative;
  width: 45px;
  height: 45px;
`;

const Footers = styled.div`
  display: flex;
  background-color: #06283d;
  justify-content: center;
  button {
    margin: 20px;
    position: relative;
    border: none;
    display: inline-block;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: "Ycomputer-Regular";
    text-decoration: none;
    font-weight: 400;
    transition: 0.25s;
    background-color: #dff6ff;
    color: black;
  }
`;
