/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {      //이것도 컴포넌트 입니다.

  let [title, titleUpdate] = useState(['남자 코트 추천', '강남 우동 맛집', '취업 되긴 할까']);
  let [thumb, thumbUp] = useState(0);

  // function titleReplace(){
  //   var newArray = [...title]; //deep copy를 해서 그것을 변경. 원본 state 수정은 권장하지않음
  //   newArray[0] = '여자 코트 추천';
  //   titleUpdate( newArray );
  // }
  


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h3> { title[0] } <span onClick={ ()=>{ thumbUp(thumb + 1) } }>👍</span>
        {thumb} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div><div className="list">
        <h3> { title[1] } </h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div><div className="list">
        <h3> { title[2] } </h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>
      <Modal />


    </div>
  );


}

function Modal(){     //컴포넌트는 대문자로 시작해야함
  return (            //태그는 단 하나로만 이루어져야함(여러 태그를 하나로 묶은건 가능)
    <div className="modal">
      <h2>{ 글제목 }</h2>
      <p>날짜</p>
      <p>내용</p>
    </div>
  )
}



export default App;
