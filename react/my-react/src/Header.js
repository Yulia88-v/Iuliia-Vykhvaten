import React from 'react';
import s from "./header.module.css";


const Header = ()=>{
  return(
  	<header className={s.header}>
  	<div className={s.size}>
  <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Lineage_OS_Logo.png/800px-Lineage_OS_Logo.png"/>
  </div>
  </header>
  );
}
export default Header;