import React, {useContext} from 'react';
import {PlaceContent, PlaceContext} from "../../../context/placeContext";
import StarRatings from "react-star-ratings";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";


const DestinationHeading: React.FC = () => {
    const {
        place,
        fetchPlace
    } = useContext(PlaceContext) as PlaceContent;

    return (
        <div className={'col-lg-12 desktop'}>
            <div className={'row'}>

                <div className={'col-lg-7 col-sm-10 d-flex justify-content-start'}>
                    <h2 className={'me-2 detailHeding'}>{place && place.name}</h2>
                    <StarRatings
                        rating={place && place.review}
                        starRatedColor="gold"
                        numberOfStars={5}
                        name='rating'
                        starDimension="20px"
                        starSpacing="5px"
                    />
                </div>
                <div className={'col-lg-2 d-flex justify-content-start'}>

                </div>
                <div className={'col-lg-3 col-sm-2 d-flex justify-content-end'}>
                    <FontAwesomeIcon icon={faHeart}
                                     style={{
                                         color: '#808080',
                                         cursor: 'pointer',
                                         padding: "0px 16px 0px 0px"
                                     }}/>
                </div>
            </div>
            <div className={'col-12 d-flex justify-content-start'}>
                <p>
                    {place && place.address} (<a href={'/map'}>Zobrazit na mapě</a>)</p>
            </div>

        </div>
    )
}
export default DestinationHeading;