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
import once from "../../Components/Image/Galery/11.jpg"
import diecisieta from "../../Components/Image/Galery/17.jpg"
import cinco from "../../Components/Image/Galery/5.jpg"
import seis from "../../Components/Image/Galery/6.jpg"
import ocho from "../../Components/Image/Galery/8.jpg"
import doce from "../../Components/Image/Galery/12.jpg"
import quince from "../../Components/Image/Galery/15.jpg"
import dieciseis from "../../Components/Image/Galery/16.jpg"

const images = [
  { src: once, alt: "1" },
  { src: diecisieta, alt: "2", },
  { src: cinco, alt: "3", },
  { src: seis, alt: "4", },
  { src: ocho, alt: "5", },
  { src: doce, alt: "6", },
  { src: quince, alt: "7", },
  { src: dieciseis, alt: "8", },
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