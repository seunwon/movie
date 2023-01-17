import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import netflix from "img/Netflix.png";
import tving from "img/Tving.png";
import watcha from "img/Watcha.png";
import wavve from "img/Wavve.png";

function LastPageThriller({ userName }) {
  return (
    <Recommend>
      <Blank />
      <HeadBlock>
        <h3>
          {window.localStorage.getItem("userName")}
          &nbsp; 님은 스릴러 장르를 좋아하네요! <br />
          스릴러 장르를 좋아하는 당신에게 영화를 추천해 줄게요!
        </h3>
      </HeadBlock>

      <ExtraMovie>
        <Movie>
          <Poster
            alt="타짜 포스터"
            src="https://movie-phinf.pstatic.net/20211122_91/1637564743461raGXe_JPEG/movie_image.jpg?type=m203_290_2"
          />
          <h3>타짜(2006)</h3>
          <p>♥ 평점 9.26</p>
            <a
              href="https://movie.naver.com/movie/bi/mi/basic.naver?code=57723"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <More>♥ 타짜 더 알아보기!</More>
            </a>
          <p>
            ♥ 어디서 볼 수 있나요?
            <br />
          </p>
          <Ott alt="넷플릭스" src={netflix} />
          <Ott alt="왓챠" src={watcha} />
          <Ott alt="티빙" src={tving} />
        </Movie>

        <Movie>
          <Poster
            alt="추격자 포스터"
            src="https://movie-phinf.pstatic.net/20111223_156/1324566721937R1fPE_JPEG/movie_image.jpg?type=m203_290_2"
          />
          <h3>추격자(2008)</h3>
          <p>♥ 평점 9.09</p>
            <a
              href="https://movie.naver.com/movie/bi/mi/basic.naver?code=68695"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <More>♥ 추격자 더 알아보기!</More>
            </a>
          <p>
            ♥ 어디서 볼 수 있나요?
            <br />
          </p>
          <Ott alt="넷플릭스" src={netflix} />
          <Ott alt="왓챠" src={watcha} />
          <Ott alt="티빙" src={tving} />
        </Movie>

        <Movie>
          <Poster
            alt="끝까지 간다 포스터"
            src="https://movie-phinf.pstatic.net/20140424_211/1398315678038omnHU_JPEG/movie_image.jpg?type=m203_290_2"
          />
          <h3>끝까지 간다(2014)</h3>
          <p>♥ 평점 8.83</p>
            <a
              href="https://movie.naver.com/movie/bi/mi/basic.naver?code=109778"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <More>♥ 끝까지 간다 더 알아보기!</More>
            </a>
          <p>
            ♥ 어디서 볼 수 있나요?
            <br />
          </p>
          <Ott alt="넷플릭스" src={netflix} />
          <Ott alt="왓챠" src={watcha} />
          <Ott alt="티빙" src={tving} />
          <Ott alt="웨이브" src={wavve} />
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

export default LastPageThriller;

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
