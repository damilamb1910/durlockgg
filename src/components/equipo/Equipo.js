import React from 'react'
import perfil1 from '../../assets/foto-perfil1.png'
import perfil2 from '../../assets/foto-perfil2.png'
import './equipo.css'
import { motion } from "framer-motion"


const Equipo = () => {
  return (
    <div className='equipo'>
      <h3>Equipo</h3>
      <div className='equipo__card__container'>
        <motion.div
        variants={{
          hidden:{opacity:0, y:75},
          visible:{opacity:1, y:0}
        }}
        initial="hidden"
        animate="visible"
        transition={{duration:0.5, delay:0.25}}
        >
        <div className='equipo__card '>
<img src={perfil1} alt="" />
<h4>Guillermo Germolio</h4>
<h6>Ingeniero civil</h6>
<p>Guillermo cuenta con una vasta experiencia de 14 años en la industria de la construcción. Su dedicación y pasión por la ingeniería se reflejan en cada proyecto que emprende. Con un enfoque meticuloso y una habilidad excepcional para resolver problemas, Guillermo ha liderado numerosos proyectos con éxito, desde pequeñas construcciones hasta grandes obras de infraestructura. Su compromiso con la excelencia y su profundo conocimiento técnico lo convierten en un activo invaluable para el equipo de Durlock GG.</p>
      </div>
        </motion.div>
      <div className='equipo__card '>
<img src={perfil2} alt="" />
<h4>Gustavo Gomez</h4>
<h6>Capataz</h6>
<p>Gustavo, nuestro capataz experimentado, es el pilar fundamental en el sitio de trabajo. Con años de experiencia en la gestión y coordinación de equipos, Gustavo se destaca por su liderazgo efectivo y su habilidad para mantener altos estándares de calidad y seguridad. Su dedicación al trabajo duro y su habilidad para motivar a su equipo aseguran que cada proyecto se complete de manera eficiente y dentro del plazo establecido. Gustavo es un líder en quien se puede confiar para llevar a cabo las tareas más desafiantes con profesionalismo y determinación.</p>
      </div>
      </div>
      
    </div>
  )
}

export default Equipo
