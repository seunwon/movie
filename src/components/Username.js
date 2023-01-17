//사용자 이름 받고 변경 시 저장값 새로고침+버튼

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components"

const Middle = styled.div`
@font-face {
  font-family: 'Ycomputer-Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/Ycomputer-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
text-align: center;
font-family: 'Ycomputer-Regular';
padding-bottom:20px;
`
const Button = styled.div`
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
}
`
  
const StorageName = () => {
    const [userName, setUserName] = useState("");

    const saveData = () => {
      const userObj = {name:userName};
      window.localStorage.setItem("userName", userObj.name);

    };

    const onChange = (e) => {
      setUserName(e.target.value);
      localStorage.clear();
    };

    return (
        <div>
          <Middle>
          <input
            name="userName"
            value={userName}
            onChange={onChange}
            placeholder="이름을 입력하세요"
          />
          </Middle>
          <div>
       <Button>
          <button>
          <Link to="/testing" style={{color:'inherit',textDecoration:'inherit'}} onClick={saveData} > 테스트 시작 </Link>
          </button>
        </Button>
        
          </div>
          
        </div>
      );
  }

  export default StorageName;