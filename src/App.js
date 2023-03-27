import React, { Fragment } from "react";
// ㄴ리액트 컴포넌트는 요소 여러 개를 하나로 감싸주어야 한다. 이를 div가 아닌 <></>로 감쌀 수 있게 해주는 기능!

import "./App.css";

function App() {
  const name = "리액트"; // {}를 사용하면 자바스크립트 문법이 가능하다

  // JSX 내부에서는 if 문을 사용할 수 없다. 그러므로 3항 연산자 사용

  /* p66 삼항연산자 
    return (
      <>
        {name === '리액트' ? (
          <h1>{name}입니다.</h1>
        ) : (
          <h1>리액트가 아닙니다.</h1>
        )}
      </>
    );
  */
  /* p68 AND (&&) 연산자
    return (
      <>
        {name === '리액트' && <h1>{name}입니다.</h1>}
      </>
    );
  */
  /* p70 undefined를 렌더링하지 않기   
    const test = undefined;
    return (
      // 만약 바로 return test; 했다면 오류가 뜸. JSX 내부에서 undefined 렌더링은 괜찮다.
      <>
        {test || '값이 undefined입니다.'}
      </>
    );
  */
  /* p71 인라인 스타일링
    const test ={
      backgroundColor: 'black',
      color: 'aqua',
      fontSize: '48px',
      fontWeight: 'bold',
      padding: '16px'
    }

    return (
      <div style={test}>
        {name}
      </div>
    );
  */
  /* p75 className + self-closing 태그
    return (
      <div className='react'>
        {name}
        <input/>
      </div>
    );
  */

  return (
    <>
    </>
  );
}

export default App;
