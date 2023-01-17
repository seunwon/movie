import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import netflix from "./img/Netflix.png";
import tving from "./img/Tving.png";
import watcha from "./img/Watcha.png";
import wavve from "./img/Wavve.png";

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

  h3 {
    margin: 0;
    font-size: 20px;
    color: white;
  }
  p {
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

const Movie = styled.div`
  
`;

const ExtraMovie = styled.div`
  display: flex;
  justify-content: space-between;
`;

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

function LastPageAction({ userName }) {
  return (
    <Recommend>
      <Blank />
      <HeadBlock>
        <h3>
          {window.localStorage.getItem("userName")}
          님은 액션 장르를 좋아하네요! <br />
          액션 장르를 좋아하는 당신에게 영화를 추천해 줄게요!
        </h3>
      </HeadBlock>

      <ExtraMovie>
        <Movie>
          <Poster
            alt="미션 임파서블 포스터"
            src="https://movie-phinf.pstatic.net/20111221_168/1324465725166FUkIA_JPEG/movie_image.jpg?type=m203_290_2"
          />
          <h3>미션 임파서블(1996)</h3>
          <p>♥ 평점 9.01</p>
            <a
              href="https://movie-phinf.pstatic.net/20111221_168/1324465725166FUkIA_JPEG/movie_image.jpg?type=m203_290_2"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <More>♥ 미션 임파서블 더 알아보기!</More>
            </a>
          <p>
            ♥ 어디서 볼 수 있나요?
            <br />
          </p>
          <Ott alt="왓챠" src={watcha} />
          <Ott alt="티빙" src={tving} />
          <Ott alt="웨이브" src={wavve} />
        </Movie>

        <Movie>
          <Poster
            alt="매트릭스 포스터"
            src="https://movie-phinf.pstatic.net/20211210_72/1639104921350Pk5gh_JPEG/movie_image.jpg?type=m203_290_2"
          />
          <h3>매트릭스(1999)</h3>
          <p>♥ 평점 9.29</p>
            <a
              href="https://movie.naver.com/movie/bi/mi/basic.naver?code=24452"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <More>♥ 매트릭스 더 알아보기!</More>
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

        <Movie>
          <Poster
            alt="글래디에이터 포스터"
            src="https://movie-phinf.pstatic.net/20130419_151/1366338731242XqgJS_JPEG/movie_image.jpg?type=m203_290_2"
          />
          <h3>글래디에이터(2000)</h3>
          <p>♥ 평점 9.41</p>
            <a
              href="https://movie.naver.com/movie/bi/mi/basic.naver?code=29217"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <More>♥ 글래디에이터 더 알아보기!</More>
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

export default LastPageAction;


