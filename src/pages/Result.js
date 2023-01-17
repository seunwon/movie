//결과 페이지
import React from "react";
import LastPageAction from "../components/Resultpage/LastPageAction";
import LastPageFantasy from "../components/Resultpage/LastPageFantasy";
import LastPageRomance from "../components/Resultpage/LastPageRomance";
import LastPageThriller from "../components/Resultpage/LastPageThriller";


function Result() {

    const a = window.localStorage.getItem('1');
    const b = window.localStorage.getItem('2');
    const c = window.localStorage.getItem('3');
    const d = window.localStorage.getItem('4');
    const e = window.localStorage.getItem('5');
    const f = window.localStorage.getItem('6');
    const g = window.localStorage.getItem('7');
    const h = window.localStorage.getItem('8');
    const i = window.localStorage.getItem('9');

    const romance = (Number(a)+Number(d)+Number (g)+ Number(i))/4;
    const thriller = (Number(a)+Number(b)+Number (f))/3;
    const action = (Number(b)+Number(c)+Number (e)+ Number(h))/4;
    const fantasy = (Number(d)+Number(f)+Number (g)+ Number(i))/4;

    console.log(romance);
    console.log(thriller);
    console.log(fantasy);
    console.log(action);


    if(romance > thriller && romance > action && romance > fantasy ){ return <LastPageRomance /> }
    else if(thriller > romance && thriller > action && thriller > fantasy ){ return <LastPageThriller></LastPageThriller>}
    else if (action > thriller && action > romance && action > fantasy ){ return <LastPageAction /> }
    else if(fantasy > thriller && fantasy > action && fantasy > romance ){ return <LastPageFantasy /> }
    
  };
  
  export default Result;

  /*    */