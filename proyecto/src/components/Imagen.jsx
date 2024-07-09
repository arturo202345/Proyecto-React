import React, {useState} from 'react'
import "../css/ig.css"
export const Imagen = () => {
    const [urlValue,setTextValue] = useState('')
    const handleChange = (event) => {
        setTextValue(event.target.value);}
        const [visible, setVisible]= useState(true);
    const handleClick= () =>{
        setVisible(false);}
        const [vi, setV]= useState(true);
    const hand= () =>{
        setV(false);}
  return (
<div style={vi?{display:'block'}:{display:'none'}}>
    <div style={visible?{display:'block'}:{display:'none'}}>
    <input type='url' value={urlValue} onChange={handleChange}></input>
    <button onClick={handleClick}>Confirmar</button>
    </div>
    <img className='ig' src={urlValue} alt=''></img>
    <button onClick={hand}>Eliminar</button>
</div>
  )
}
