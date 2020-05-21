import React from 'react';
import s from './nav.module.css'

const Nav = () =>{
	return(
       <nav className ={s.NavMenu}>
       <ul className={s.nav}>
<li className={s.item}><a href="#">Home</a></li>
<li className={s.item}><a href="#">About us</a></li>
<li className={s.item}><a href="#">Project</a></li>
<li className={s.item}><a href="#">Team</a></li>
<li className={s.item}><a href="#">Contact</a></li>
  </ul>
       </nav>
		);
};
export default Nav;