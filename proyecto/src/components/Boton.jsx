import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import "../css/img.css"
import "../css/boton.css"
export const Boton = () => {
    const [visible, setVisible]= useState(true);
    const handleClick= () =>{
        setVisible(false);
    }
  return (
    <div className='BMas' id="boton" onClick={handleClick} style={visible ? {display:'block'} :{display: 'none'}}>
        <Link to="new">
        <img className='Bmas' src='/png-transparent-computer-icons-plus-sign-logo-cross-plusminus-sign-removebg-preview.png' alt=""></img>
        </Link>
</div>
  )
}
