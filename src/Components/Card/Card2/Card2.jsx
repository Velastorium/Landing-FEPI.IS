import { useState, useEffect } from 'react';
import './CSS/Card2.css';

const Card2 = ({ imagen, title, description }) => {
  const [mostrarTitulo, setMostrarTitulo] = useState('');
  const [escribiendo, setEscribiendo] = useState(true); 

  useEffect(() => {
    if (title) {
      const intervaloEscribir = setInterval(() => {
        if (escribiendo) {
          setMostrarTitulo(prev => {
            if (prev.length === title.length) {
              setEscribiendo(false); 
              return prev;
            }
            return prev + title[prev.length];
          });
        } else {
          setMostrarTitulo(prev => {
            if (prev === 'F') {
              setEscribiendo(true); 
              return prev;
            }
            if (prev.length === 0) {
              setEscribiendo(true); 
              return prev;
            }
            return prev.slice(0, prev.length - 1);
          });
        }
      }, 100); 

      return () => {
        clearInterval(intervaloEscribir);
      };
    }
  }, [title, escribiendo]); 

  return (
    <div className="card-container">
      <img src={imagen} alt="Card Image" className="card-image" />
      <div className="card-content">
        <div>
          <h3>{mostrarTitulo}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
