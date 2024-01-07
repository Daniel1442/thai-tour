import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWater} from "@fortawesome/free-solid-svg-icons";


const WaterCard: React.FC = () => {

    return (
        <div className="card-body mt-3">
            <h5 className="card-title text-center mb-2">Teplota vody</h5>
            <h5 className="card-subtitle mb-2 text-center">39 °C</h5>
            <p className="card-text text-white text-center fs-7">dsfsdfsd</p>

            <div className={'d-flex justify-content-center'}>
                <FontAwesomeIcon icon={faWater}
                                 style={{
                                     color: '#00FFFF',
                                     textAlign: 'center',
                                     width: '50px',
                                     height: '50px',
                                     padding: "4px 0px 0px 8px"
                                 }}/>
            </div>
        </div>
    )
}
export default WaterCard;
