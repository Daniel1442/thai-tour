import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {TripContent, TripContext} from "../../../context/tripContext";


const TripHeadingMobile: React.FC = () => {
    const {
        trip,
        fetchTrip
    } = useContext(TripContext) as TripContent;

    return (
        <div className={'col-lg-12 mobile'}>
            <div className={'row'}>
                <div className={'col-12 d-flex justify-content-start'}>
                    <h2 className={'me-2 detailHeding'}>{trip.name}</h2>
                    <FontAwesomeIcon icon={faHeart}
                                     style={{
                                         color: '#808080',
                                         cursor: 'pointer',
                                         marginTop: '8px',
                                         padding: "0px 16px 0px 0px"
                                     }}/>
                </div>
            </div>
            <div className={'col-12 d-flex justify-content-start'}>
                <p>Výlety {trip.location}</p>
            </div>

        </div>
    )
}
export default TripHeadingMobile;