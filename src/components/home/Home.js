import React, { useEffect, useState } from 'react'
import './home.css'
import { useContext } from 'react';
import img_home from '../../assets/img/img-home-min.jpg'
import Marcas from '../marcas/Marcas'
import Equipo from '../equipo/Equipo'
import Loading from '../Loading/Loading'
import Servicios from '../servicios/Servicios'
import { MenuContext } from '../../context/MenuContext';
import { motion } from "framer-motion"

const Home = () => {
  const {toggleMenu}=useContext(MenuContext)
  
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    window.scrollTo(0,0)
    setLoading(true)
  },[])
  const handleClick = () => {
   
  toggleMenu()  
};
  const cambiarLoad=()=>{
    setLoading(false)
  }
  return (
    <div className='home' onClick={handleClick}>
      <Loading loading={loading}/>
     


           <div className='landing__container'>
          <div className='landing__slogan__container'>
        <h1>Durlock GG</h1>
      <h2>El futuro <span>se construye ahora</span></h2>
      
</div>
<img className='img__home' src={img_home} onLoad={cambiarLoad} alt="" />
      </div>
       
        

      <div id='nosotros' className='nosotros'>
        <h3>Nosotros</h3>
        <p>En Durlock GG, nos enorgullece presentarnos como una empresa contratista líder, especializada en construcción en seco y proyectos generales, comprometida con la responsabilidad, la calidad y el uso de personal altamente calificado. Desde nuestro inicio, nos hemos destacado por ofrecer soluciones innovadoras que transforman espacios con eficiencia y precisión.</p>
      </div>
      <Equipo/>
      <div id='servicios'>
      <Servicios/>
      </div>
      
      <Marcas/>
      
     
    </div>
  )
}

export default Home
