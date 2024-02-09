import React from 'react'
import imgIngenieria from '../../assets/img/ingenieria.jpg'
import imgConstruccion from '../../assets/img/construccion.jpg'
import imgSeco from '../../assets/img/seco.jpg'
import './servicios.css'

const Servicios = () => {
  return (
    <div id="servicios" className='servicios__container'>
      <h3>Servicios</h3>
      <div className='servicios__card__container'>
        <div className='servicios__card'>
<img src={imgIngenieria} alt="" />
<h4>Ingenieria</h4>
<ul>
    <li>Ingeniería civil y estructural.
</li>
    <li>Diseño y análisis de sistemas.
</li>
    <li>Gestión de proyectos y supervisión.
</li>
    <li>Inspecciones técnicas.</li>
</ul>
        </div>
        <div className='servicios__card'>
<img src={imgConstruccion} alt="" />
<h4>Construcción</h4>
<ul>
    <li>Preparación del terreno.
</li>
    <li>Cimentación y estructuras de concreto.
</li>
    <li>Estructuras metálicas.
</li>
    <li>Albañilería y acabados.</li>
    <li>Instalaciones eléctricas.</li>
    <li>Instalaciones de fontanería y sanitarias.
</li>
    <li>Instalación de sistemas de climatización y ventilación.</li>
    <li>Carpintería y acabados de madera.</li>
    <li>Instalación de sistemas de seguridad.
</li>
    <li>Paisajismo y acabados exteriores.
</li>
</ul>
        </div>
        <div className='servicios__card'>
<img src={imgSeco} alt="" />
<h4>Construcción Seca</h4>
<ul>
    <li>Instalación de estructuras de madera o metal para paredes, techos y pisos.

</li>
    <li>Construcción de tabiques interiores y divisiones.

</li>
    <li>Instalación de sistemas de aislamiento térmico y acústico.

</li>
    <li>Colocación de paneles de yeso (drywall) para revestimiento de paredes y techos.</li>
    <li>Acabados de pintura y texturizado en superficies interiores y exteriores.
</li>
    <li>Instalación de sistemas de iluminación y cableado eléctrico.
</li>
    <li>Instalación de sistemas de comunicación y redes.
</li>
    <li>Montaje de muebles y accesorios para interiores.
</li>
    <li>Instalación de sistemas de seguridad y  alarmas.</li>
</ul>
        </div>

      </div>
    </div>
  )
}

export default Servicios
