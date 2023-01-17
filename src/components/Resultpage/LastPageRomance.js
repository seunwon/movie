import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import netflix from "./img/Netflix.png";
import tving from "./img/Tving.png";
import watcha from "./img/Watcha.png";
import wavve from "./img/Wavve.png";

function LastPageRomance({ userName }) {
  return (
    <Recommend>
      <Blank />
      <HeadBlock>
        <h3>
          {window.localStorage.getItem("userName")}
          &nbsp; 님은 로맨스 장르를 좋아하네요! <br />
          로맨스 장르를 좋아하는 당신에게 영화를 추천해 줄게요!
        </h3>
      </HeadBlock>

      <ExtraMovie>
        <Movie>
          <Poster
            alt="건축학개론 포스터"
            src="https://movie-phinf.pstatic.net/20120227_164/1330332687398PQ1U3_JPEG/movie_image.jpg?type=m203_290_2"
          />
          <h3>건축학개론(2012)</h3>
          <p>♥ 평점 8.68</p>
            <a
              href="https://movie.naver.com/movie/bi/mi/basic.naver?code=88426"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <More>♥ 건축학개론 더 알아보기!</More>
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
            alt="나의 소녀시대 포스터"
            src="https://movie-phinf.pstatic.net/20200810_138/1597023139385oXMsi_JPEG/movie_image.jpg"
          />
          <h3>나의 소녀시대(2016)</h3>
          <p>♥ 평점 9.13</p>
            <a
              href="https://movie.naver.com/movie/bi/mi/basic.naver?code=142691"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <More>♥ 나의 소녀시대 더 알아보기!</More>
            </a>
          <p>
            ♥ 어디서 볼 수 있나요?
            <br />
          </p>
          <Ott alt="넷플릭스" src={netflix} />
          <Ott alt="왓챠" src={watcha} />
          <Ott alt="웨이브" src={wavve} />
        </Movie>

        <Movie>
          <Poster
            alt="라라랜드 포스터"
            src="https://movie-phinf.pstatic.net/20201229_146/1609226288425JgdsP_JPEG/movie_image.jpg?type=m203_290_2"
          />
          <h3>라라랜드(2016)</h3>
          <p>♥ 평점 8.91</p>
            <a
              href="https://movie.naver.com/movie/bi/mi/basic.naver?code=134963"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <More>♥ 라라랜드 더 알아보기!</More>
            </a>
          <p>
            ♥ 어디서 볼 수 있나요?
            <br />
          </p>
          <Ott alt="넷플" src={netflix} />
          <Ott alt="왓챠" src={watcha} />
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

export default LastPageRomance;

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
