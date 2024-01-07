import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun} from "@fortawesome/free-solid-svg-icons";


export interface WeatherCardProps {
    heading: string;
}
const WeatherCard: React.FC<WeatherCardProps> = ({heading}) => {

    return (
        <div className="card-body mt-3">
            <h5 className="card-title text-center mb-2">{heading}</h5>
            <h5 className="card-subtitle mb-2 text-center">32 °C</h5>
            <p className="card-text text-muted text-center fs-7">v noci 24 °C</p>
            <div className={'d-flex justify-content-center'}>

                <FontAwesomeIcon icon={faSun}
                                 style={{
                                     color: '#FFD700',
                                     textAlign: 'center',
                                     width: '50px',
                                     height: '50px',
                                     padding: "4px 0px 0px 8px"
                                 }}/>
            </div>
        </div>
    )
}
export default WeatherCard;
