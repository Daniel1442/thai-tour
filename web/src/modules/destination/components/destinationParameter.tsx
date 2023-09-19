import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBowlFood,
    faGlassCheers,
    faParking,
    faSink,
    faSkiing,
    faSnowflake,
    faSwimmingPool,
    faTree,
    faUmbrellaBeach,
    faWeightHanging,
    faWifi
} from "@fortawesome/free-solid-svg-icons";


const DestinationParameter: React.FC = () => {

    return (
        <div className={'col-lg-4 col-sm-12'}>
            <div className={'mt-3 col-12 d-flex justify-content-start'}>
                <h5>Parametry</h5>
            </div>
            <div className={'col-12 d-flex justify-content-start'}>
                <div className="entry-content">
                    <p><FontAwesomeIcon icon={faWifi}
                                        style={{
                                            color: '#00FFFF',
                                            padding: "4px 0px 0px 0px"
                                        }}/> Internet/wifi</p>
                    <p><FontAwesomeIcon icon={faUmbrellaBeach}
                                        style={{
                                            color: '#00FFFF',
                                            padding: "4px 0px 0px 0px"
                                        }}/> Pláž</p>
                    <p><FontAwesomeIcon icon={faSwimmingPool}
                                        style={{
                                            color: '#00FFFF',
                                            padding: "4px 0px 0px 0px"
                                        }}/> Venkovní bazén</p>
                    <p><FontAwesomeIcon icon={faTree}
                                        style={{
                                            color: '#00FFFF',
                                            padding: "4px 0px 0px 0px"
                                        }}/> Zahrada</p>
                    <p><FontAwesomeIcon icon={faSnowflake}
                                        style={{
                                            color: '#00FFFF',
                                            padding: "4px 0px 0px 0px"
                                        }}/> Klimatizace</p>
                    <p><FontAwesomeIcon icon={faGlassCheers}
                                        style={{
                                            color: '#00FFFF',
                                            padding: "4px 0px 0px 0px"
                                        }}/> Bar</p>
                    <p><FontAwesomeIcon icon={faBowlFood}
                                        style={{
                                            color: '#00FFFF',
                                            padding: "4px 0px 0px 0px"
                                        }}/> Restaurace</p>
                    <p><FontAwesomeIcon icon={faWeightHanging}
                                        style={{
                                            color: '#00FFFF',
                                            padding: "4px 0px 0px 0px"
                                        }}/> Fitness</p>
                    <p><FontAwesomeIcon icon={faParking}
                                        style={{
                                            color: '#00FFFF',
                                            padding: "4px 0px 0px 0px"
                                        }}/> Parkoviště</p>
                    <p><FontAwesomeIcon icon={faSink}
                                        style={{
                                            color: '#00FFFF',
                                            padding: "4px 0px 0px 0px"
                                        }}/> Potápění a šnorchlování</p>
                        <p><FontAwesomeIcon icon={faSkiing}
                                            style={{
                                                color: '#00FFFF',
                                                padding: "4px 0px 0px 0px"
                                            }}/> Vodní sporty</p>
                </div>
            </div>
        </div>

    )
}
export default DestinationParameter;