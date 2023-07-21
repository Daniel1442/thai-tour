import React, {useRef, useState} from 'react';
import Button from 'react-bootstrap/Button';


const Carousel: React.FC = () => {

    return (
        <div id="carouselExampleIndicators" className="carousel slide carouselComponent" data-bs-ride="carousel">
            <div className="carousel-inner" style={{borderRadius: '15px'}}>
                <div className="carousel-item active">
                    <img src="http://www.thaitour.cz/wp-content/uploads/7.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="http://www.thaitour.cz/wp-content/uploads/slider.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="http://www.thaitour.cz/wp-content/uploads/2.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Carousel;