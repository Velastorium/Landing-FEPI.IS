import Title from "../../Title/Title";
import "./LayoutDonaciones.css";

const LayoutD = ({ title, subtitle, texto,imgD,WidthD, align = "left"}) => {
    const isLeftAligned = align === "left";

    return (
        <div className={`Content-D ${isLeftAligned ? "left-align" : "right-align"}`}>
            <div className={`IzquierdoD ${isLeftAligned ? "text-left" : "text-right"}`}>
                <div className="ContGrandeD">
                    <div className="TitleContD">
                        <Title title={title} />
                    </div>
                    <p className="subtitleD">{subtitle}</p>
                    <p className="textoD">{texto}</p>
                </div>
            </div>
            <div className="DerechoD">
                <div className="ContectImgD">
                    <img src={imgD} />
                </div>
            </div>
        </div>
    );
}

export default LayoutD;
