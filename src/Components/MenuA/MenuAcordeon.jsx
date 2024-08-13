import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCog, FaQuestion, FaHistory, FaBullseye, FaEye, FaListAlt, FaUsers, FaGavel, FaChessKnight, FaHeart } from 'react-icons/fa'; import './CSS/MenuAcordeon.css';
import fepi from './image/fepi.png'
import Title from '../Title';


const SideMenu = () => {
    const [selectedTab, setSelectedTab] = useState("nosotros");

    const handleTabClick = (tabId) => {
        setSelectedTab(tabId);
    };

    const renderContent = () => {
        switch (selectedTab) {
            case "nosotros":
                return (
                    <div className='themas'>
                        <Title title="Nosotros" />
                        <p className="parrafo">
                            FEPI, jurídicamente es una fundación creada por el padre Federico Carrasquilla,
                            junto con habitantes del barrio Popular 1(Comuna 1) de la ciudad de Medellín,
                            con personería jurídica de noviembre 15 de 1983, integrada por hombres y mujeres
                            (Amas de casa, trabajadores, líderes, comerciantes, estudiantes) en la cual se busca
                            mejorar la calidad de vida a nivel personal y grupal a través de procesos de
                            iniciativas económicas de la economía popular, procesos culturales y artísticos,
                            procesos de empoderamiento de las mujeres y la participación comunitaria para el
                            desarrollo y la gestión local.
                        </p>
                        <h6 className="subtitle">Dos fundamentos son claves en todo el accionar de FEPI:</h6>
                        <ul className="puntos">
                            <li>
                                Todos los procesos con niños, niñas, jóvenes, mujeres, están en el marco de la educación Popular y este da sentido a todas las acciones que se puedan desarrollar como actividades de tipo cultural y artístico, recreativo, trabajo formativo con las mujeres, semana cultural, red barrial Popular 1 construyendo ciudadanía y demás actividades de desarrollo cultural para el barrio. En general actividades que contribuyen a la criticidad del contexto y a la búsqueda de mejores condiciones de vida. En este mismo sentido la participación como búsqueda por un mejor desarrollo y gestión local.
                            </li>
                            <li>
                                Fomento de iniciativas económicas de hombres y mujeres para el mejoramiento de su calidad de vida. Entre ellas están la economía popular, social, solidaria y feminista las cuales apuntan a sostener y mejorar la vida. Su ideal es la reproducción de la vida y no la acumulación de capital.
                            </li>
                        </ul>
                        <div className='image-container'>
                            <img src={fepi} alt="Fundación FEPI" style={{ width: '300px', height: 'auto' }} />
                        </div>
                    </div>
                );
            case "historia":
                return (
                    <div className="themas">
                        <h1 className="title">Historia</h1>
                        <h6 className="text-lg font-semibold mb-2">...</h6>
                        <p className="text-base text-gray-900 leading-relaxed mb-8">
                            ...
                        </p>
                    </div>
                );
            case "mision":
                return (
                    <div className="themas">
                        <h1 className="title">Misión</h1>
                        <p className="parrafo">
                            FEPI es una fundación integrada por habitantes del barrio Popular Nª 1,
                            que busca mejorar las condiciones de vida de niños, niñas, jóvenes y mujeres
                            cabezas de familia de la comuna 1 a través del desarrollo cultural y artístico,
                            capacitación técnica para el empleo, empoderamiento personal y fomento de la
                            autoestima, la participación comunitaria y ejecución de ideas de negocio para
                            la sostenibilidad.
                        </p>
                    </div>
                );
            case "vision":
                return (
                    <div className="themas">
                        <h1 className="title">Visión</h1>
                        <p className="parrafo">
                            FEPI en el 2030 habrá consolidado los proyectos de generación de ingresos
                            dignos a través de procesos administrativos claros y eficaces, aportando
                            así al mejoramiento de la convivencia y las relaciones intrafamiliares de
                            los participantes de los procesos socio- culturales.
                        </p>
                    </div>
                );
            case "objetivos":
                return (
                    <div className="themas">
                        <h1 className="title">Objetivos</h1>
                        <h6 className="subtitle">Objetivo estratégico</h6>
                        <p className="parrafo">
                            Potenciar las propuestas de emprendimiento de negocios que contribuyan
                            a la generación de ingresos dignos y la sostenibilidad de los programas
                            sociales de la Fundación logrando así una mayor sostenibilidad económica,
                            social y cultural.
                        </p>
                        <h6 className="subtitle">Objetivos específicos</h6>
                        <ul className="puntos">
                            <li>
                                Potenciar la consolidación de semilleros participativos infantiles en
                                áreas lúdicas y culturales como estrategias de prevención en la violencia,
                                mejoramiento de la autoestima y mejoramiento de las relaciones interpersonales.
                            </li>
                            <li>
                                Dinamizar procesos culturales que faciliten la participación de niños,
                                niñas, jóvenes y mujeres adultas como espacios de formación para la
                                convivencia, cultura de paz y proyección del talento humano.
                            </li>
                            <li>
                                Consolidar ideas de negocios en el mediano y largo plazo que le permitan
                                a la fundación la sostenibilidad de los programas sociales y la generación
                                de ingresos dignos.
                            </li>
                            <li>
                                Promover la realización de eventos culturales en los cuales se socialice
                                y proyecten las actividades artísticas y los resultados de impactos logrados.
                            </li>
                        </ul>
                    </div>
                );
            case "sociales":
                return (
                    <div className="themas">
                        <h1 className="title">Objetivos sociales</h1>
                        <h6 className="subtitle">De acuerdo a los estatutos:</h6>
                        <ul className="puntos">
                            <li>
                                Servir de medio educativo para la formación familiar y social del
                                individuo que le capacite para desempeñar un trabajo útil y cumplir
                                sus deberes familiares y sociales.
                            </li>
                            <li>
                                Promover el empleo organizado hacia pequeñas industrias que faciliten
                                un nivel de vida decoroso y la satisfacción de las necesidades vitales.
                            </li>
                            <li>
                                Ayudar a la organización de grupos de trabajo en forma solidaria y de ayuda mutua.
                            </li>
                            <li>
                                Propender por un mejoramiento integral tanto económico como cultural
                                y social de los socios y beneficiarios de la Fundación.
                            </li>
                            <li>
                                Impulsar la formación humanística, social, política y técnica del individuo,
                                mediante la construcción y aplicación de un modelo pedagógico que aborde
                                diferentes aspectos, como el psicológico, el sociopolítico, el económico
                                y el cultural, que capacite a los sujetos para pensar críticamente, asumir
                                compromisos sociales y desempeñar un trabajo digno.
                            </li>
                            <li>
                                Aportar al impulso y desarrollo de los procesos organizativos de la
                                comunidad, mediante dinámicas grupales con niños, niñas, jóvenes y
                                mujeres, en diversas áreas y propender por el conocimiento y
                                divulgación de los derechos humanos, haciendo énfasis en los sectores
                                más desfavorecidos: mujeres, jóvenes, niños y niñas.
                            </li>
                            <li>
                                Difundir el accionar de FEPI, la ampliación de la participación de la
                                comunidad en los procesos y finalidades de FEPI y el establecimiento
                                de una estrategia comunicativa.
                            </li>
                            <li>
                                Promover y ejecutar   con niños, niñas, jóvenes, mujeres y población
                                adulta proyectos en las áreas de recreación y deportes, fomento artístico
                                y cultural, acciones para el cuidado y fomento de una cultura ambiental,
                                cultura de paz y convivencia, derechos humanos, empoderamiento de las mujeres,
                                emprendimiento empresarial y todos aquellos que apunten al desarrollo local y
                                mejoramiento de la calidad de vida.
                            </li>
                            <li>
                                Promover unidades productivas con el fin de generar ingresos para el auto
                                sostenimiento económico de la organización.
                            </li>
                        </ul>
                    </div>
                );
            case "proposito":
                return (
                    <div className="themas">
                        <h1 className="title">Proposito</h1>
                        <p className="parrafo">
                            Formar individuos capaces de reconocer y desarrollarse integralmente,
                            fomentando la autonomía, el pensamiento crítico y la responsabilidad social.
                            <br />
                            Promovemos valores fundamentales como la solidaridad, la ayuda mutua,
                            la tolerancia, el respeto por la vida, el compromiso, la responsabilidad,
                            el trabajo en equipo, la honestidad, la equidad y la participación activa
                            en la construcción de una sociedad más justa y cohesionada.
                        </p>
                    </div>
                );
            case "estrategias":
                return (
                    <div className="themas">
                        <h1 className="title">Estrategias</h1>
                        <ul className="puntos">
                            <li>Formación cultural y artística</li>
                            <li>Formación de semilleros infantiles para la prevención y la convivencia.</li>
                            <li>Consolidación de ideas de negocios para la sostenibilidad.</li>
                            <li>La autofinanciación de los programas sociales.</li>
                            <li>Innovación e informática</li>
                            <li>Gestión de recursos</li>
                            <li>Gestión administrativa</li>
                        </ul>
                    </div>
                );
            case "politicas":
                return (
                    <div className="themas">
                        <h1 className="title">Políticas</h1>
                        <ul className="puntos">
                            <li>Actividades de proyección a la comunidad.</li>
                            <li>Conocimiento y divulgación de los derechos de mujeres, jóvenes, niños y niñas.</li>
                            <li>Conocimiento permanente de FEPI.</li>
                            <li>Criterio de autonomía.</li>
                            <li>Educación técnica unido a formación humanística.</li>
                            <li>La prevención como estrategia educativa.</li>
                            <li>Potenciación de la educación.</li>
                            <li>Participación en espacios de ciudad.</li>
                            <li>Participación en campañas de noviolencia, construcción de confianzas y reconciliación.</li>
                            <li>Sistematización permanente.</li>
                            <li>Todos los procesos educativos realizados en la fundación están atravesados por la perspectiva de género.</li>
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container10">
            <div className="container11">
                <div className="sub-heading c-blue upper ls-1">
                    <FaCog className="icon1" />
                    <h5>Explorar</h5>
                </div>
                <nav className="nav-links">
                    <hr className="link-divider" />
                    <Link className={`link ${selectedTab === "nosotros" ? "active" : ""}`} onClick={() => handleTabClick("nosotros")}>
                        <FaQuestion className="icon1" /> Nosotros
                    </Link>
                    <hr className="link-divider" />
                    <Link className={`link ${selectedTab === "historia" ? "active" : ""}`} onClick={() => handleTabClick("historia")}>
                        <FaHistory className="icon1" /> Historia
                    </Link>
                    <hr className="link-divider" />
                    <Link className={`link ${selectedTab === "mision" ? "active" : ""}`} onClick={() => handleTabClick("mision")}>
                        <FaBullseye className="icon1" /> Misión
                    </Link>
                    <hr className="link-divider" />
                    <Link className={`link ${selectedTab === "vision" ? "active" : ""}`} onClick={() => handleTabClick("vision")}>
                        <FaEye className="icon1" /> Visión
                    </Link>
                    <hr className="link-divider" />
                    <Link className={`link ${selectedTab === "objetivos" ? "active" : ""}`} onClick={() => handleTabClick("objetivos")}>
                        <FaListAlt className="icon1" /> Obj. estratégico y específicos
                    </Link>
                    <hr className="link-divider" />
                    <Link className={`link ${selectedTab === "sociales" ? "active" : ""}`} onClick={() => handleTabClick("sociales")}>
                        <FaUsers className="icon1" /> Obj. Sociales
                    </Link>
                    <hr className="link-divider" />
                    <Link className={`link ${selectedTab === "proposito" ? "active" : ""}`} onClick={() => handleTabClick("proposito")}>
                        <FaHeart className="icon1" /> Proposito
                    </Link>
                    <hr className="link-divider" />
                    <Link className={`link ${selectedTab === "estrategias" ? "active" : ""}`} onClick={() => handleTabClick("estrategias")}>
                        <FaChessKnight className="icon1" /> Estrategias
                    </Link>
                    <hr className="link-divider" />
                    <Link className={`link ${selectedTab === "politicas" ? "active" : ""}`} onClick={() => handleTabClick("politicas")}>
                        <FaGavel className="icon1" /> Políticas
                    </Link>
                </nav>
            </div>
            <div className="container2">
                <div className="content">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default SideMenu;
