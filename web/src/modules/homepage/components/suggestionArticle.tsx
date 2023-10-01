import React from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";

interface ComponentProps {
    image: string
}

const SuggestionArticle: React.FC<ComponentProps> = ({image}) => {

    return (
        <div className={'suggestionItem col-lg-3 col-sm-12  d-flex justify-content-center'}>

            <div className="card cardInfo border-0">
                <LazyLoadImage 
                    src={image}
                    className="card-img-top" alt="..."/>
                <div className="card-body mb-3">
                    <p className="card-text">
                        Koupili jste si na www.thaitour.cz zájezd a ve stejný den jste ho našli jinde za nižší cenu? Neprodleně nás kontaktujte a my vás odměníme!
                    </p>
                </div>
            </div>
        </div>
    )
}
export default SuggestionArticle;
