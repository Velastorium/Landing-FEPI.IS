import Title from "../../Title/Title";
import "./LayoutDonaciones.css"

const LayputD = ({ title, subtitle, texto }) => {
    return (
        <div className="Content-D">
            <div className="IzquierdoD">
                <div className="ContGrandeD">
                    <div className="TitleContD">
                        <Title title={title} />
                    </div>
                    <p className="subtitleD">{subtitle}</p>
                    <p className="textoD">{texto}</p>
                </div>

                <div className="ContListasD">

                </div>
            </div>
            <div className="DerechoD">
                <div className="ContectImgD">
                </div>
            </div>
        </div>
    );
}

export default LayputD;
