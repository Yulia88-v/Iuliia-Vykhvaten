import React from 'react';
import s from './footer.module.css'

const Footer = () => {
	return(
        <div className = {s.footer}>
        <div className ={s.sizefot}>
        <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Lineage_OS_Logo.png/800px-Lineage_OS_Logo.png"/>
        </div>
         <p>Copyright © 2020</p>
         </div>
         
        
        
		);
}
export default Footer;