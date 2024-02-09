
import logo from "../../assets/img/logo.png"
import "./Navbar.css"
import { useState } from "react"
import { useEffect } from "react"
import { useContext } from 'react';
import { MenuContext } from "../../context/MenuContext"



const Navbar=(click)=>{
    const{menuOpen}=useContext(MenuContext)
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
          setWindowSize(window.innerWidth);
        }
    
    comprobar()
        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
      }, [menuOpen]);
    const comprobar=()=>{
        if(menu===true){
            toggleMenu()
        }
    }
    const [menu, setMenu]=useState(false)
    const toggleMenu=()=>{
        setMenu(!menu)
        
        
    }

    return(
        <header onClick={comprobar}>
       <a href="#"><img className="logo" src={logo} alt="" /></a>
       <button onClick={toggleMenu} className="menu-boton">
           <svg className="menu" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"  viewBox="0 0 16 16">
  <path  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
           </button>
           <nav className={`header__nav ${menu ? 'isActive' : ''} `}>
            
            
{windowSize < 768 ? (
           <ul  className="nav__ul">
            <a href="#nosotros" ><li className="nav__item">Nosotros</li></a>
               
            <a href="#servicios"><li className="nav__item">Servicios</li></a>
            <a href="#contacto"><li className="nav__item">Contacto</li></a>

            </ul>
                ):(
                    <ul  className="nav__ul">
            <a href="#nosotros" ><li className="nav__item">Nosotros</li></a>
            <a href="#servicios"><li className="nav__item">Servicios</li></a>
            <a href="#contacto"><li className="nav__item">Contacto</li></a>
            
            </ul>
    )}
            

            
           
        </nav>
       
        
        
    </header>
    )
}

export default Navbar