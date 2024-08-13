import './Card3.css';

const Card3 = ({ Icon, title, text }) => {
    return (
        <div className="card3">
        <div className="inner">
            <div className="front">
                <div className="icon">
                    <Icon size={38} />
                </div>
                <h3 className="title3">{title}</h3>
            </div>
            <div className="back">
                <p className="text">{text}</p>
            </div>
        </div>
    </div>
    );
};

export default Card3;
