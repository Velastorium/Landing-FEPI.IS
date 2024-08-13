import './CardHover.css'
const CardHover = ({Imagen, title, description}) => {
    return (
        <div className="card">
            <div className="image-box">
                <img src={Imagen} />
            </div>
            <div className="content1">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CardHover