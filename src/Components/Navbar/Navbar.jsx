import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenuLine } from 'react-icons/ri';
import FEPIlogo from '../Image/Inicio/FEPIlogo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className='navbar'>
        <div className='logo'><img src={FEPIlogo} /></div>
        <ul className='links'>
          <li><Link to="/Inicio" >Inicio</Link></li>
          <li><Link to="/Noticias" >Noticias</Link></li>
          <li><Link to="/Nosotros" >Nosotros</Link></li>
          <li><Link to="/Cursos">Cursos</Link></li>
          <li><Link to="/Alquileres">Alquileres</Link></li>
          <li><Link to="/Donaciones">Donaciones</Link></li>
          <li><Link to="/Contactanos">Contactanos</Link></li>
        </ul>
        <a href='#' className='action_btn'>Get Started</a>
        <div className='toggle_btn' onClick={toggleMenu}>
          <i><RiMenuLine /></i>
        </div>
        <div className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
          <li><Link to="/Inicio" >Inicio</Link></li>
          <li><Link to="/Noticias" >Noticias</Link></li>
          <li><Link to="/Nosotros" >Nosotros</Link></li>
          <li><Link to="/Cursos">Cursos</Link></li>
          <li><Link to="/Alquileres">Alquileres</Link></li>
          <li><Link to="/Donaciones">Donaciones</Link></li>
          <li><Link to="/Contactanos">Contactanos</Link></li>
          <li><Link to="/Registrarse" className='action_btn_responsible'>Get Started</Link></li>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
