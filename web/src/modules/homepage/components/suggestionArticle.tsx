import React, {useRef, useState} from 'react';
import Button from 'react-bootstrap/Button';


const SuggestionArticle: React.FC = () => {

    return (
        <div className={'suggestionItem col-lg-3 col-sm-12  d-flex justify-content-center'}>

            <div className="card cardInfo">
                <img
                    src="http://www.thaitour.cz/wp-content/uploads/14.jpg"
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
