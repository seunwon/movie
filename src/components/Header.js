import React from "react";
import styled from "styled-components";

const HeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
`;

function Head() {
  return (
    <HeadBlock>
      <h2>당신의 영화 취향은?</h2>
      <div>written by. cosmos</div>
    </HeadBlock>
  );
}

export default Head;
