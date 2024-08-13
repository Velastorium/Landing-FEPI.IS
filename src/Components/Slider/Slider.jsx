import { useState } from 'react';
import './Slider.css'; 
import img1 from '../image/img1.jpg';
import img2 from '../image/img2.jpg';
import img3 from '../image/img3.jpg';
import img4 from '../image/img4.jpg';

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderItems = [
        {
            imgSrc: img1,
            title: 'MAGIC SLIDER',
            type: 'FLOWER',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.'
        },
        {
            imgSrc: img2,
            title: 'MAGIC SLIDER',
            type: 'NATURE',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.'
        },
        {
            imgSrc: img4,
            title: 'MAGIC SLIDER',
            type: 'PLANT',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.'
        },
        {
            imgSrc: img3,
            title: 'MAGIC SLIDER',
            type: 'NATURE',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.'
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % sliderItems.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + sliderItems.length) % sliderItems.length);
    };

    return (
        <div className="slider">
            <div className="list">
                {sliderItems.map((item, index) => (
                    <div key={index} className={`item ${index === currentSlide ? 'active' : ''}`}>
                        <img src={item.imgSrc} alt="" />
                        <div className="content1">
                            <div className="title1">{item.title}</div>
                            <div className="type">{item.type}</div>
                            <div className="description">{item.description}</div>
                            <div className="button">
                                <button>SEE MORE</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="thumbnail">
                {sliderItems.map((item, index) => (
                    <div key={index} className={`item ${index === currentSlide ? 'active' : ''}`}>
                        <img src={item.imgSrc} alt="" />
                    </div>
                ))}
            </div>

            <div className="nextPrevArrows">
                <button className="prev" onClick={prevSlide}> &lt; </button>
                <button className="next" onClick={nextSlide}> &gt; </button>
            </div>
        </div>
    );
};

export default ImageSlider;
