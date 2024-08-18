import "./LayoutHome.css";
import Title from "../../Title/Title";
import { RiBookLine, RiBuildingLine , RiCommunityLine } from 'react-icons/ri';

const LayoutHome1 = ({ title, textgran, textn1, textn2, textn3 }) => {
    return (
        <div className="Content-H">
            <div className="IzquierdoH">
                <div className="ContGrandeH">
                    <div className="TitleH">
                        <Title title={title} />
                    </div>
                    <p className="TextGranH">{textgran}</p>
                </div>
            </div>
            <div className="DerechoH">
                <div className="ContListasH">
                    <div className="cardHomeH">
                        <div className="ListaH">
                            <RiBookLine className="iconH" />
                            <p className="ListTextH">{textn1}</p>
                        </div>
                    </div>
                    <div className="cardHomeH">
                        <div className="ListaH">
                            <RiBuildingLine className="iconH" />
                            <p className="ListTextH">{textn2}</p>
                        </div>
                    </div>
                    <div className="cardHomeH">
                        <div className="ListaH">
                            <RiCommunityLine className="iconH" />
                            <p className="ListTextH">{textn3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LayoutHome1;
