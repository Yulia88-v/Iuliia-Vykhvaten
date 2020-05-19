import React from 'react';
import logo from './logo.svg';
import './App.css';

const App =() => {
  return (
    <div>
      <div> <Header/> </div>
      <div> <Technologies/> </div>
    <div className="App">
      <ul>
      <li>Рыбка</li>
      <li>Котик</li>
      <li>Самолетик</li>
      </ul>
    </div>
    </div>
  );
}
const Header = ()=>{
  return(
  <div> 
  <ul>
<li><a href="#">Home</a></li>
<li><a href="#">About us</a></li>
<li><a href="#">Project</a></li>
<li><a href="#">Team</a></li>
<li><a href="#">Contact</a></li>
  </ul>
  </div>
  );
}

const Technologies = ()=>{
  return(
  <div>
  <ul>
  <li><a href="#">Java script</a></li>
  <li><a href="#">React</a></li>
  <li><a href="#">Node</a></li>
  <li><a href="#">CSS</a></li>
  <li><a href="#">HTML</a></li>
  </ul>
  </div>
  );
}

export default App;
