import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";

interface ComponentProps {
    heading: string
    text: string
    image: string
    link: string
}

const Card: React.FC<ComponentProps> = ({heading, text, image, link}) => {
    return (
        <div className={'col-lg-4 col-sm-12 mt-3'}>
            <div className="card border-0" style={{width: "18rem"}}>
                <LazyLoadImage  className="card-img-top"
                     src={image}
                     alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{heading}
                    </h5>
                    <p className="card-text">{text}</p>
                    <a href={link} className="font-blue">
                        Více informací</a>
                </div>
            </div>
        </div>
    )
}
export default Card