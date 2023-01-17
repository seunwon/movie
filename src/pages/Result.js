//결과 페이지
import React from "react";
import LastPage from "../components/LastPage";

function Result() {

  /*
*/

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
    const comedy = (Number(b)+Number(e)+Number (h))/4;
    const fantasy = (Number(d)+Number(f)+Number (g)+ Number(i))/4;

    console.log(romance);
    console.log(thriller);
    console.log(fantasy);
    console.log(action);
    console.log(comedy);

    if(romance >> thriller && romance >> action && romance >> comedy && romance >> fantasy ){return <LastPage />;}
    if(thriller >> romance && thriller >> action && thriller >> comedy && thriller >> fantasy ){return <LastPage />;}
    if(action >> thriller && action >> romance && action >> comedy && action >> fantasy ){return <LastPage />;}
    if(comedy >> thriller && comedy >> action && comedy >> romance && comedy >> fantasy ){return <LastPage />;}
    if(fantasy >> thriller && fantasy >> action && fantasy >> romance && fantasy >> comedy ){return <LastPage />;}
  };
  
  export default Result;