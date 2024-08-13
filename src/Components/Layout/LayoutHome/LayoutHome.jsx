import "./LayoutHome.css";
import Title from "../../Title/Title";

const LayoutHome1 = ({ title, textgran, textn1, textn2, textn3, imgnose }) => {
    return (
        <div className="Content-Nose">
            <div className="Izquierdo">
                <div className="ContGrande">
                    <div className="TitlenoseCont">
                        <Title title={title} />
                    </div>
                    <p className="TextGran">{textgran}</p>
                </div>
                
                <div className="ContListas">
                    <div className="cardHome">
                        <div className="Lista1">
                            <p className="ListText">{textn1}</p>
                        </div>
                    </div>
                    <div className="cardHome">
                        <div className="Lista2">
                            <p className="ListText">{textn2}</p>
                        </div>
                    </div>
                    <div className="cardHome">
                        <div className="Lista3">
                            <p className="ListText">{textn3}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Derecho">
                <div className="ContectImg">
                    <img src={imgnose} alt="Nose" />
                </div>
                {/* <div className="ButtomHome">
                <button className="ConocerMasButton">Conocer más</button>
                </div> */}
            </div>
        </div>
    );
}

export default LayoutHome1;
