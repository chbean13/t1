import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import iptest from './iptest'

function App() {
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
  //아이피 주소 변수 선언
  const [ip,setIp] = useState('');
  
	//아이피 설정
	function callback(data) {
		setIp(data);
	}
	
	//렌더링 이후 실행
	useEffect(
		() => {
			//아이피를 알아내는 함수호출
			iptest('/ip',callback)
		},[]
	);
	
	return(
		<div className="App">
			<header className="App-header">
				이 기기의 ip주소는 {ip}입니다.??
			</header>
		</div>
	);
  
}

export default App;
