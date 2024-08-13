import 'react';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

import "./MiniGaleria.css"
import Title from "../Title/Title";
import { Link } from 'react-router-dom';


const images = [
  { src: "/11.jpg", alt: "1" },
  { src: "/17.jpg", alt: "2", },
  { src: "/5.jpg", alt: "3", },
  { src: "/6.jpg", alt: "4", },
  { src: "/8.jpg", alt: "5", },
  { src: "/12.jpg", alt: "6", },
  { src: "/15.jpg", alt: "7", },
  { src: "/16.jpg", alt: "8", },
]

export function Gallery() {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
    <div className="Galley">
      <div className="TitleGallery">
        <Title title="Galería Histórica" />
        <p className='GalleryP'>Echa un vistazo a algunas de nuestras mejores fotos.</p>
      </div>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
      >

        {images.map((image, index) => {
          return (
            <a href={image.src} key={index}>
              <img alt={image.alt} src={image.src} />
            </a>
          )
        })}
      </LightGallery>
      <div className="GalleryButtom">
        <div className="flex justify-center mt-4">
          <Link to="/ruta-de-tu-galeria">
            <button className="bg-[#009929] hover:bg-green-600 text-white font-bold py-2 px-6 rounded">
              Ver galería completa
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}