import React, {useContext} from 'react';
import {PlaceContent, PlaceContext} from "../../../context/placeContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";


const TripHeadingMobile: React.FC = () => {
    const {
        place,
        fetchPlace
    } = useContext(PlaceContext) as PlaceContent;

    return (
        <div className={'col-lg-12 mobile'}>
            <div className={'row'}>
                <div className={'col-12 d-flex justify-content-start'}>
                    <h2 className={'me-2 detailHeding'}>Damnoen Saduak Plovoucí trh & River</h2>
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
                <p>Výlety Khao Lak, Thajsko</p>
            </div>

        </div>
    )
}
export default TripHeadingMobile;