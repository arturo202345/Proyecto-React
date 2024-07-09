import React from 'react'
import { Link } from 'react-router-dom'
import "../css/navbar.css"

export const NavBar = () => {
  const bt=document.getElementById("boton")
  const visible=()=>{
    if(bt.display.style==="none"){
      bt.display.style="block"
    }
  }
  return (
    <nav className="navbar">
    <div className="navbar-container">
      <Link to="/" className="navbar-logo">
        MyLogo
      </Link>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/home" className="nav-links" onClick={visible}>
            Crear Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto" className="nav-links">
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}
