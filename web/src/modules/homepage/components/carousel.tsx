import React, {useEffect, useRef, useState} from 'react';
import Button from 'react-bootstrap/Button';


const Carousel: React.FC = () => {

    const images = ['http://www.thaitour.cz/wp-content/uploads/7.jpg', 'http://www.thaitour.cz/wp-content/uploads/slider.jpg', 'http://www.thaitour.cz/wp-content/uploads/2.jpg']

    const [index, setIndex] = useState<number>(0);

    const next = () => {
        setIndex(index + 1);
        if (index >= images.length - 1) {
            setIndex(0);
            return
        }
    }
    const prev = () => {
        setIndex((index - 1 == 0 - 1 ? images.length-1 : index - 1));
    }

    return (
        <div id="carouselExampleIndicators" className="carousel slide carouselComponent" data-bs-ride="carousel">
            <div className="carousel-inner" style={{borderRadius: '15px'}}>
                <div className="carousel-item active">
                    <img src={images[index]} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev" onClick={() => prev()}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    onClick={() => next()}
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Carousel;