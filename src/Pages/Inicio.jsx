import { Link } from 'react-router-dom';
import Slider from '../Components/Slider/Slider';
// import ViewCard from '../Components/ViewCard';
// import CardHover from '../Components/CardHover'
import Card3 from '../Components/Card/Card3/Card3'
import { RiGalleryFill, RiCalendarEventLine, RiShoppingCartLine, RiLightbulbLine, RiBook2Line, RiHeart2Line } from 'react-icons/ri'
import LayoutHome1 from "../Components/Layout/LayoutHome/LayoutHome"
import Home1 from "../Components/image/Home1.png"
import { Gallery } from "../Components/MiniGaleria/MiniGaleria";
import CardPersonal from "../Components/Card/CardPersonal/CardPersonal"
import Footer from "../Components/Footer/Footer"

const Inicio = () => {
    return (
        <div>
            <Slider />
            <div className="flex justify-center">
                <Card3
                    Icon={RiGalleryFill}
                    title="Galería Histórica"
                    text="Explora la historia del Barrio Popular N°1 a través de nuestra galería."
                />
                <Card3
                    Icon={RiCalendarEventLine}
                    title="Eventos"
                    text="Descubre nuestros próximos eventos y sé parte de experiencias únicas."
                />
                <Card3
                    Icon={RiShoppingCartLine}
                    title="Alquileres"
                    text="Encuentra todo para tu evento en un solo lugar. Descubre nuestros enseres de calidad."
                />
                <Card3
                    Icon={RiLightbulbLine}
                    title="Cursos"
                    text="Explora nuestros cursos y lleva tu aprendizaje al siguiente nivel."
                />
                <Card3
                    Icon={RiHeart2Line}
                    title="Donaciones"
                    text="Tu donación hace la diferencia. Únete a nosotros y apoya nuestra causa."
                />
            </div>
            <div>
                <LayoutHome1
                    title="Fundación FEPI"
                    textgran="En la Fundación para el Fomento de la Educación Popular y la Pequeña Industria (FEPI), nos dedicamos a promover el desarrollo integral a través de dos pilares fundamentales: la educación accesible para todos y el apoyo activo a la pequeña industria local. Desde nuestra fundación, trabajamos incansablemente para fortalecer el tejido social y económico de nuestras comunidades, creando oportunidades mediante programas educativos innovadores que empoderan a individuos y familias."
                    textn1="Nuestro compromiso se extiende a fomentar la educación popular como motor de cambio, facilitando el acceso a herramientas educativas que transforman vidas."
                    textn2="
Impulsamos el crecimiento de la pequeña industria a través de capacitación, asesoría y redes de apoyo, fomentando el emprendimiento y la creación de empleo local."
                    textn3="En FEPI, creemos que la combinación de educación y apoyo a la pequeña industria es clave para un desarrollo sostenible y equitativo."
                    imgnose={Home1}
                />

            </div>
            <div>
                <Gallery />
            </div>
            <div>
                <div className="ContPersonal">
                    <div className="Personal">
                        <CardPersonal
                            nombre="Ana Lucía Ramírez Torres"
                            text="Gerente de Desarrollo Social"
                            imageUrl="https://static.vecteezy.com/system/resources/previews/001/993/889/non_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg"

                        />
                        <CardPersonal
                            imageUrl="https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                            nombre="Jhon Jaime Sepúlveda Jiménez"
                            text="Dirigente de la Fundación FEPI"
                        />
                        <CardPersonal
                            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjO42nkg5RWeA6roUeQEf1TcSykrEBsMt3rw&s"
                            nombre="Camila Fernández Ortega"
                            text="Coordinadora de Proyectos Comunitarios"
                        />
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Inicio;
