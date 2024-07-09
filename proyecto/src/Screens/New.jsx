import React, { useState }  from 'react'
import "../css/ventana.css"
import { Parrafo } from '../components/Parrafo';
import { Imagen } from '../components/Imagen';

export const New = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }
  const [components, setComponents] = useState([]);
  const addComponent = () => {
    setComponents([...components,<Parrafo></Parrafo>]);
  };
  const [comp, st] = useState([]);
  const tr = () => {
    st([...comp,<Imagen></Imagen>]);
  };
  return (
    <header className='new'>
      <div className="App">
        <button onClick={toggleDropdown} className="dropdown-toggle">
          {isOpen ? 'Cerrar' : 'Abrir'} Dropdown
          </button>
    {isOpen && (<div className="dropdown-menu">
      <ul>
      <li><button className='pf' onClick={addComponent}>Parrafo</button></li>
      <li><button className='pf' onClick={tr}>Imagen</button></li>
      <li>Opción 3</li>
      </ul>
      </div>)}
  </div>
  <body>
    <div className='tx'>
      {components}
      {comp}
    </div>
  </body>
    </header>

  )
}
