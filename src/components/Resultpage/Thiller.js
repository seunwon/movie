import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Blank= styled.div`
padding-bottom: 50px;
`;

const Recommend = styled.div`
@font-face {
     font-family: 'Ycomputer-Regular';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/Ycomputer-Regular.woff2') format('woff2');
     font-weight: normal;
     font-style: normal;
 }
   text-align: center;
   font-family: 'Ycomputer-Regular';
  flex: 10;
  padding: 3px 30px;
  padding-bottom: 4px;
  overflow-y: 10px;
  text-align: center;
  background-color: #06283D;
  color: white;

  h3 {
    margin: 0;
    font-size: 20px;
    color: white;
  }
`;
const HeadBlock = styled.div`
display: flex;
justify-content: center;
height: 150px;
`;
const ExtraMovie = styled.div`
display: flex;
justify-content: space-between;
height: 450px;
`;
const Movie1= styled.div`

`;
const Movie2= styled.div`
`;
const Movie3= styled.div`

`;
const Footers= styled.div`

display: flex;
background-color: #06283D;
justify-content: center;
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
     color: black;}
`;
function LastPage({userName}) {
  return (
    <Recommend>
     <Blank />
        <HeadBlock>
          
            <h3>
               {window.localStorage.getItem('userName')} 
                님은 스릴러 장르를 좋아하네요! <br />
               스릴러 장르를 좋아하는 당신에게 영화를 추천해 줄게요!
              
            </h3>
        </HeadBlock>

        <ExtraMovie>
            <Movie1>
            <img width="150px" height="212px" alt="기생충 포스터"
                     src="https://movie-phinf.pstatic.net/20190528_36/1559024198386YVTEw_JPEG/movie_image.jpg?type=m203_290_2" />
                <h3>기생충(2019)</h3>
                <p>♥ 평점 9.07 ★★★★★</p>
                <p><a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=161967">♥ 기생충 더 알아보기!</a></p>
                <p>♥ 어디서 볼 수 있나요?<br /></p>
                <img width="45px" height="45px"
                     alt="왓챠"
                     src="https://play-lh.googleusercontent.com/vAkKvTtE8kdb0MWWxOVaqYVf0_suB-WMnfCR1MslBsGjhI49dAfF1IxcnhtpL3PnjVY" />
                <img width="45px" height="45px"
                     alt="티빙"
                     src="https://play-lh.googleusercontent.com/eG3T5rqaV3ifl3MKV0fMi4V161wdhghpmqOMq-KYXOCN7Qy98yZhSsIj1gUBQ6YQqRg" />
            </Movie1>
                
            <Movie2>
            
                <img width="150px" height="212px" alt="추격자 포스터"
                     src="https://movie-phinf.pstatic.net/20111223_156/1324566721937R1fPE_JPEG/movie_image.jpg?type=m203_290_2" />
                <h3>추격자(2008)</h3>
                <p>♥ 평점 9.09 ★★★★★</p>
                <p><a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=68695">♥ 추격자 더 알아보기!</a></p>
                <p>♥ 어디서 볼 수 있나요?<br /></p>
                <img width="45px" height="45px"
                     alt="넷플릭스"
                     src="https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI" />
                <img width="45px" height="45px"
                     alt="왓챠"
                     src="https://play-lh.googleusercontent.com/vAkKvTtE8kdb0MWWxOVaqYVf0_suB-WMnfCR1MslBsGjhI49dAfF1IxcnhtpL3PnjVY" />
                <img width="45px" height="45px"
                     alt="티빙"
                     src="https://play-lh.googleusercontent.com/eG3T5rqaV3ifl3MKV0fMi4V161wdhghpmqOMq-KYXOCN7Qy98yZhSsIj1gUBQ6YQqRg" />
            
            </Movie2>

            <Movie3>
            <img width="150px" height="212px" alt="끝까지 간다 포스터"
                     src="https://movie-phinf.pstatic.net/20140424_211/1398315678038omnHU_JPEG/movie_image.jpg?type=m203_290_2" />
                <h3>끝까지 간다(2014)</h3>
                <p>♥ 평점 8.83 ★★★★☆</p>
                <p><a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=109778">♥ 끝까지 간다 더 알아보기!</a></p>
                <p>♥ 어디서 볼 수 있나요?<br /></p>
                <img width="45px" height="45px"
                     alt="넷플릭스"
                     src="https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI" />
                <img width="45px" height="45px"
                     alt="왓챠"
                     src="https://play-lh.googleusercontent.com/vAkKvTtE8kdb0MWWxOVaqYVf0_suB-WMnfCR1MslBsGjhI49dAfF1IxcnhtpL3PnjVY" />
                <img width="45px" height="45px"
                     alt="티빙"
                     src="https://play-lh.googleusercontent.com/eG3T5rqaV3ifl3MKV0fMi4V161wdhghpmqOMq-KYXOCN7Qy98yZhSsIj1gUBQ6YQqRg" />
                <img width=" 45px" height="45px"
                     alt="웨이브"
                     src="https://play-lh.googleusercontent.com/nPc-sm_G026svFhkh8A1YQvoyt1gaPc-cmRMfmNjgZy0XGLsB2PUpaRHfKc6nVYkzA" />
            </Movie3>
        </ExtraMovie>

        <Footers>
        <button><Link to="/" style={{color:'inherit',textDecoration:'inherit'}} >다시하기</Link></button>
        </Footers>
          <Blank />
    </Recommend>
  );
}

export default LastPage;