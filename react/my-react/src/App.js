import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Content from './content.js';
import Footer from './Footer.js';
import Nav from './nav.js';

const App =() => {
  return (
    <div className="ForPage">
      <div className="wrapper_header"> <Header/> </div>
      <div className="wrapper_header"><Nav/></div>
      <div> <Content/> </div>
      <footer><Footer/></footer>
    </div>
  );
}



export default App;
