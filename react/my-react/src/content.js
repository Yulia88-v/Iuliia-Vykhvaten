import React from 'react';
import s from './content.module.css';
import Photo from './photo.png';

const Content =() =>{
	
	
	return(
		<div className={s.content}>
		<div className={s.sizephoto}>
		<img src={Photo}/>
		</div>
		<div className={s.text}>
		<h1>Vykhvaten Yulia</h1>
		<h2>Tbilisi</h2>
		<h3>04.09.1988</h3>
		</div>
		<form>
        <input  type="text" placeholder="Search..."/>
        <button type="submit"><img src="https://cdn0.iconfinder.com/data/icons/30_Free_Black_ToolBar_Icons/40/Black_Search.png" /></button>
        </form>
		</div>
	);
}
export default Content;