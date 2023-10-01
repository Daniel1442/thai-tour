import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";

interface ComponentProps {
    heading: string
    img: string
    paragraph: string
}

const GolfParagraph: React.FC<ComponentProps> = ({heading, img, paragraph}) => {
    return (
        <div className={'row mb-4'}>
            <h5>
                {heading}
            </h5>
            <div className={'col-lg-2 col-sm-12'}>
                <LazyLoadImage  src={img} alt={'golf_img'}/>
            </div>
            <div className={'col-lg-9 col-sm-12 ms-4'}>
                <p>
                    {paragraph}
                </p>
            </div>
        </div>
    )
}
export default GolfParagraph;