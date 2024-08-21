import "./Footer.css"
import fb from "../Image/Iconos/facebook.png"
import insta from "../Image/Iconos/instagram.png"
import wa from "../Image/Iconos/whatsapp.png"
import yt from "../Image/Iconos/youtube.png"

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Sb_Footer SectionPadding">
                <div className="FooterLinks">
                    <div className="FooterLinksDiv">
                        <h4>Para Empresas</h4>
                        <a href="/empresa">
                            <p>Empresas</p>
                        </a>
                        <a href="/soluciones">
                            <p>Soluciones</p>
                        </a>
                        <a href="/contacto">
                            <p>Contacto</p>
                        </a>
                    </div>

                    <div className="FooterLinksDiv">
                        <h4>Recursos</h4>
                        <a href="/documentos">
                            <p>Documentos</p>
                        </a>
                        <a href="/tutoriales">
                            <p>Tutoriales</p>
                        </a>
                        <a href="/guia">
                            <p>Guía</p>
                        </a>
                    </div>

                    <div className="FooterLinksDiv">
                        <h4>Socios</h4>
                        <a href="/colaboradores">
                            <p>Colaboradores</p>
                        </a>
                        <a href="/aliados">
                            <p>Aliados</p>
                        </a>
                        <a href="/patrocinadores">
                            <p>Patrocinadores</p>
                        </a>
                    </div>

                    <div className="FooterLinksDiv">
                        <h4>Compañia</h4>
                        <a href="/Inicio">
                            <p>Inicio</p>
                        </a>
                        <a href="/Noticias">
                            <p>Noticias</p>
                        </a>
                        <a href="/Nosotros">
                            <p>Nosotros</p>
                        </a>
                        <a href="/Cursos">
                            <p>Cursos</p>
                        </a>
                        <a href="/Alquileres">
                            <p>Alquileres</p>
                        </a>
                        <a href="/Donaciones">
                            <p>Donaciones</p>
                        </a>
                        <a href="/Contactanos">
                            <p>Contactanos</p>
                        </a>
                    </div>
                    <div className="FooterLinksDiv">
                        <h4>Próximamente en</h4>
                        <div className="SocialMedia">
                            <p><img src={fb} alt="" /></p>
                            <p><img src={insta} alt="" /></p>
                            <p><img src={wa} alt="" /></p>
                            <p><img src={yt} alt="" /></p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="FooterBelow">
                    <div className="FooterCopyright">
                        <p>
                            @{new Date().getFullYear()} CodeInn. Todos los derechos reservados.
                        </p>
                    </div>
                    <div className="FooterBelowLinks">
                        <a href="/terminos"><div><p>Términos y condiciones</p></div></a>
                        <a href="/privacidad"><div><p>Privacidad</p></div></a>
                        <a href="/seguridad"><div><p>Seguridad</p></div></a>
                        <a href="/cookies"><div><p>Declaración de cookies</p></div></a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer