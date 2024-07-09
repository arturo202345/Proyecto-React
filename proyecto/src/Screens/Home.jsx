import React from 'react'
import { Boton } from '../components/Boton'
import { Routes,Route } from 'react-router-dom'
import { New } from './New'
export const Home = () => {
  return (
    <div>
       <Boton></Boton>
       <Routes>
            <Route path='new' element={<New></New>}></Route>
        </Routes>
       
    </div>
  )
}
