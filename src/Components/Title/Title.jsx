import './Title.css';

const Title = ({ title }) => {
  return (
    <div className='title-container '>
      <div>
        <div className="title-content">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Title;
