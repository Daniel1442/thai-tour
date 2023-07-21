import React, {useEffect, useRef, useState} from 'react';
import DestinationParameter from "./destinationParameter";
import DestinationAbout from "./destinationAbout";

const AboutDestination: React.FC = () => {
    return (
        <div className={'aboutDestination py-3 bg-white'} style={{borderRadius: '4px'}}>
            <div className={'row mt-3 mx-lg-3 row-about'}>
                <div className={'col-12 d-flex justify-content-start'}>
                    <h1>O destinaci</h1>
                </div>

                <DestinationParameter/>
                <DestinationAbout/>

            </div>
        </div>
    )
}
export default AboutDestination;
