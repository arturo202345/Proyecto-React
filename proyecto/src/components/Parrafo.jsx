import React,{useState} from 'react'
import "../css/parrafo.css"
export const Parrafo = () => {
    const [textValue, setTextValue] = useState('');
    const handleChange = (event) => {
      setTextValue(event.target.value);}
      const [visible, setVisible]= useState(true);
    const handleClick= () =>{
        setVisible(false);
}
  return (
    <div className='txt' style={visible?{display:'block'}:{display:'none'}}>
        <textarea
    value={textValue}
    onChange={handleChange}
    placeholder="Escribe algo aquí..."
    rows="5"
    cols="40"
  />
  <button onClick={handleClick}>Eliminar</button>
    </div>
  )
}
