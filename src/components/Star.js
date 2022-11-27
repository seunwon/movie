import React from 'react';
import styled from 'styled-components';


const Rate = styled.input`
display: none;
direction: rtl;
color: transparent;

text-shadow: 0 0 0 #ff0000;
  &:hover {
    text-shadow: 0 0 0 #ff0000;
  }
  &:hover~label {
    text-shadow: 0 0 0 #ff0000;
  }
  cursor: pointer;
  
`;

const StarBlock = styled.div`
    display: inline-block;
    }
`;

function Star() {
    return (
    <StarBlock>
        <Rate input type="ratio" name="rating" value="1" id="rate1"></Rate><label for="rate1">☆</label>
        <Rate input type="ratio" name="rating" value="2" id="rate2"></Rate><label for="rate2">☆</label>
        <Rate input type="ratio" name="rating" value="3" id="rate3"></Rate><label for="rate3">☆</label>
        <Rate input type="ratio" name="rating" value="4" id="rate4"></Rate><label for="rate4">☆</label>
        <Rate input type="ratio" name="rating" value="5" id="rate5"></Rate><label for="rate5">☆</label>
    </StarBlock>
    );
}

export default Star;

//⭐