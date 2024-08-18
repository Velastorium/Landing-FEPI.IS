import "./LayoutHome.css";
import Title from "../../Title/Title";
import { RiBookLine, RiBuildingLine , RiCommunityLine } from 'react-icons/ri';

const LayoutHome1 = ({ title, textgran, textn1, textn2, textn3 }) => {
    return (
        <div className="Content-Nose">
            <div className="Izquierdo">
                <div className="ContGrande">
                    <div className="TitlenoseCont">
                        <Title title={title} />
                    </div>
                    <p className="TextGran">{textgran}</p>
                </div>
            </div>
            <div className="Derecho">
                <div className="ContListas">
                    <div className="cardHome">
                        <div className="Lista">
                            <RiBookLine className="iconD" />
                            <p className="ListText">{textn1}</p>
                        </div>
                    </div>
                    <div className="cardHome">
                        <div className="Lista">
                            <RiBuildingLine className="iconD" />
                            <p className="ListText">{textn2}</p>
                        </div>
                    </div>
                    <div className="cardHome">
                        <div className="Lista">
                            <RiCommunityLine className="iconD" />
                            <p className="ListText">{textn3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LayoutHome1;
