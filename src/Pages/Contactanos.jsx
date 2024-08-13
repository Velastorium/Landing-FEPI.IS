import "../Components/CSS/Contactanos.css";
import { useRef } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import Footer from "../Components/Footer/Footer"

const Contactanos = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_z1oamsi', 'template_53vcnup', form.current, {
                publicKey: 'WeEh543vYZu-Lg-jN',
            })
            .then(
                () => {
                    Swal.fire({
                        title: "Enviado exitosamente",
                        text: "Mensaje enviado con éxito",
                        icon: "success"
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div>
            <div className="body-contact">
                <div className="container20">
                    <div className="content">
                        <div className="left-side">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15862.953300059684!2d-75.5482636!3d6.2980766!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442f738ff34bc1%3A0xa50a63a6a390955f!2sfepi!5e0!3m2!1ses-419!2sco!4v1721873981908!5m2!1ses-419!2sco"
                                width="100%"
                                height="665"
                                style={{ border: '0' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="right-side">
                            <h2 className="title">Contactanos</h2>
                            <div className="topic-text">¿Tienes alguna pregunta o comentario?</div>
                            <p>Nos encantaría saber de ti. Ya sea que necesites información adicional sobre nuestros servicios, tengas alguna inquietud o quieras compartir tu experiencia con nosotros, estamos aquí para ayudarte. Tu opinión es muy valiosa y nos ayuda a mejorar continuamente.</p>
                            <form className="form" ref={form} onSubmit={sendEmail}>
                                <label>
                                    <input type="text" className="field" name="nombre" required />
                                    <span>Nombre completo</span>
                                </label>
                                <div className="flex">
                                    <label>
                                        <input type="email" className="field" name="gmail" required />
                                        <span>Gmail</span>
                                    </label>
                                    <label>
                                        <input type="text" className="field" name="asunto" required />
                                        <span>Asunto</span>
                                    </label>
                                </div>
                                <label>
                                    <textarea className="field mess" name="mensaje" required />
                                    <span>Mensaje</span>
                                </label>
                                <button className="submit">Enviar</button>
                            </form>
                            <div>
                                <ul className="example-2">
                                    <li className="icon-content">
                                        <a
                                            href="https://www.spotify.com/"
                                            aria-label="Gmail"
                                            data-social="email"
                                        >
                                            <div className="filled"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                                <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                        <div className="tooltip">Gmail</div>
                                    </li>
                                    <li className="icon-content">
                                        <a
                                            href="https://www.pinterest.com/"
                                            aria-label="Facebook"
                                            data-social="facebook"
                                        >
                                            <div className="filled"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                                <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                        <div className="tooltip">Facebook</div>
                                    </li>
                                    <li className="icon-content">
                                        <a
                                            href="https://telegram.org/"
                                            aria-label="WhatsApp"
                                            data-social="whatsapp"
                                        >
                                            <div className="filled"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                                <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                        <div className="tooltip">WhatsApp</div>
                                    </li>
                                    <li className="icon-content">
                                        <a
                                            href="https://dribbble.com/"
                                            aria-label="Youtube"
                                            data-social="youtube"
                                        >
                                            <div className="filled"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                                <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" fill="currentColor"></path>

                                            </svg>
                                        </a>
                                        <div className="tooltip">YouTube</div>
                                    </li>
                                    <li className="icon-content">
                                        <a
                                            href="https://telegram.org/"
                                            aria-label="Instagram"
                                            data-social="instagram"
                                        >
                                            <div className="filled"></div>
                                            <svg
                                                fill="#4d4d4d"
                                                className="svgIcon"
                                                viewBox="0 0 448 512"
                                                height="1.5em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill="currentColor"
                                                ></path>
                                            </svg>
                                        </a>
                                        <div className="tooltip">Instagram</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p></p>
                    <div className="below">
                        <div className="hours  details">
                            <i><FaClock /></i>
                            <div className="topic">Horario</div>
                            <div className="text-one">Lunes a Viernes: 9am - 6pm</div>
                            <div className="text-two">Sábados: 9am - 2pm</div>
                        </div>
                        <div className="phone details">
                            <i><FaPhone /></i>
                            <div className="topic">Teléfono</div>
                            <div className="text-one">+0098 9893 5647</div>
                            <div className="text-two">+0096 3434 5678</div>
                        </div>
                        <div className="address details">
                            <i><FaMapMarkerAlt /></i>
                            <div className="topic">Dirección</div>
                            <div className="text-one">Surkhet, NP12</div>
                            <div className="text-two">Birendranagar 06</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Contactanos;

