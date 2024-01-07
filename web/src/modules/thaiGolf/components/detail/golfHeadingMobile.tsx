import React, {useContext} from 'react';
import {GolfContent, GolfContext} from "../../../../context/golfContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";


const GolfHeadingMobile: React.FC = () => {
    const {
        golf
    } = useContext(GolfContext) as GolfContent;
    
    return (
        <div className={'col-lg-12 mobile'}>
            <div className={'row'}>
                <div className={'col-12 d-flex justify-content-start'}>
                    <h2 className={'me-2 detailHeding'}>{golf && golf.name}</h2>
                    <FontAwesomeIcon icon={faHeart}
                                     style={{
                                         color: '#808080',
                                         cursor: 'pointer',
                                         marginTop: '8px',
                                         padding: "0px 16px 0px 0px"
                                     }}/>
                </div>

                <div className={'col-12 d-flex justify-content-star mb-2'}>

                </div>
            </div>
            <div className={'col-12 d-flex justify-content-start'}>
                <p>
                    {golf && golf.location} (<a href={`/map?lat=${golf && golf.latitude}&long=${golf && golf.longitude}&name=${golf.name}`}>Zobrazit na mapě</a>)
                </p>
            </div>

        </div>
    )
}
export default GolfHeadingMobile;