import React, {useContext} from 'react';
import {PlaceContent, PlaceContext} from "../../../context/placeContext";
import StarRatings from "react-star-ratings";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";


const DestinationHeadingMobile: React.FC = () => {
    const {
        place,
        fetchPlace
    } = useContext(PlaceContext) as PlaceContent;

    return (
        <div className={'col-lg-12 mobile'}>
            <div className={'row'}>
                <div className={'col-12 d-flex justify-content-start'}>
                    <h2 className={'me-2 detailHeding'}>{place && place.name}</h2>
                    <FontAwesomeIcon icon={faHeart}
                                     style={{
                                         color: '#808080',
                                         cursor: 'pointer',
                                         marginTop: '8px',
                                         padding: "0px 16px 0px 0px"
                                     }}/>
                </div>

                <div className={'col-12 d-flex justify-content-star mb-2'}>
                     <StarRatings
                        rating={place && place.review}
                        starRatedColor="gold"
                        numberOfStars={5}
                        name='rating'
                        starDimension="20px"
                        starSpacing="5px"
                        />
                </div>
            </div>
            <div className={'col-12 d-flex justify-content-start'}>
                <p>
                    {place && place.address} (<a href={'#'}>Zobrazit na mapě</a>)
                </p>
            </div>

        </div>
    )
}
export default DestinationHeadingMobile;