import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {TripContent, TripContext} from "../../../context/tripContext";


const TripHeading: React.FC = () => {
    const {
        trip,
        fetchTrip
    } = useContext(TripContext) as TripContent;

    return (
        <div className={'col-lg-12 desktop'}>
            <div className={'row'}>

                <div className={'col-lg-7 col-sm-10 d-flex justify-content-start'}>
                    <h2 className={'me-2 detailHeding'}>{trip.name}</h2>
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
                <p>Výlety {trip.location}</p>
            </div>

        </div>
    )
}
export default TripHeading;