import React from "react";
import styled from "styled-components";

const TemplateBlock = styled.div`
@font-face {
  font-family: 'Ycomputer-Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/Ycomputer-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
font-family: 'Ycomputer-Regular';
  width: 512px;
  height: 768px;
  background: white;
  margin: auto;
  margin-top: 32px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;

function Template({ children }) {
  return <TemplateBlock>{children}</TemplateBlock>;
}

export default Template;