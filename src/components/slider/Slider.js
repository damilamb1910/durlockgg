import React from 'react'
import marca1 from '../../assets/img/marcas/banco_provincia.svg'
import marca2 from '../../assets/img/marcas/cheeky.svg'
import marca3 from '../../assets/img/marcas/dexter.svg'
import marca4 from '../../assets/img/marcas/mostaza.svg'
import marca5 from '../../assets/img/marcas/sullair.svg'
import './slider.css'

const Slider = () => {
  return (
    <div className='slider'>
        <div className='slide-track'>
            <div className='slide'>
                <img src={marca1} alt="" />
            </div>
            <div className='slide'>
                <img src={marca2} alt="" />
            </div>
            <div className='slide'>
                <img src={marca3} alt="" />
            </div>
            <div className='slide'>
                <img src={marca4} alt="" />
            </div>
            <div className='slide'>
                <img src={marca5} alt="" />
            </div>
            <div className='slide'>
                <img src={marca1} alt="" />
            </div>
            <div className='slide'>
                <img src={marca2} alt="" />
            </div>
            <div className='slide'>
                <img src={marca3} alt="" />
            </div>
            <div className='slide'>
                <img src={marca4} alt="" />
            </div>
            <div className='slide'>
                <img src={marca5} alt="" />
            </div>
        </div>
        
      
    </div>
  )
}

export default Slider
