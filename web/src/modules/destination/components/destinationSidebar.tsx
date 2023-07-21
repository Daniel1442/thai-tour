import React, {useContext, useRef, useState} from 'react';
import {Card} from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import {PlaceContent, PlaceContext} from "../../../context/placeContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun, faWater} from "@fortawesome/free-solid-svg-icons";

const DestinationSideBar: React.FC = () => {
    const {
        place,
        fetchPlace
    } = useContext(PlaceContext) as PlaceContent;

    return (
        <div className={'destinationSideBar my-3'}>
            <div className={'row'}>
                <div className={'col-12 my-3'}>
                    <div className={'bg-white rounded p-5'}>
                        <div className={'row'}>
                            <div className={'d-flex justify-content-center'}>
                                <h2>Hodnocení</h2>
                            </div>
                        </div>
                        <div className={'row mt-3'}>
                            <div className={'d-flex justify-content-center'}>
                                <StarRatings
                                    rating={place &&place.review}
                                    starRatedColor="gold"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension="40px"
                                    starSpacing="5px"
                                />
                            </div>
                        </div>
                        <div className={'row mt-3'}>
                            <p className={'text-muted d-flex justify-content-center'}>{place &&place.review * 5} hodnocení</p>
                        </div>
                    </div>
                </div>

                <div className={'col-12 my-3'}>
                    <div className={'bg-white rounded p-5'}>
                        <div className={'row'}>
                            <div className={'d-flex justify-content-center'}>
                                <h2>Zjistit cenu ubytování</h2>
                            </div>
                        </div>
                        <div className={'row mt-3'}>
                            <div className={'d-flex justify-content-center'}>
                                <button className={'btn'} style={{backgroundColor: '#FFD700', color: "#fff"}}>Zažádat o
                                    cenu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'col-12'}>
                    <div className={'bg-white rounded p-5'}>
                        <div className={'row'}>

                            <h3 className={'d-flex justify-content-center'}>Aktuální počasí</h3>
                        </div>
                        <div className={'row mt-3'}>
                            <h3 className={'d-flex justify-content-center'}>
                                21 °C <FontAwesomeIcon icon={faWater}
                                                       style={{
                                                           color: '#00FFFF',
                                                           padding: "4px 16px 0px 8px"
                                                       }}/>
                                31 °C <FontAwesomeIcon icon={faSun}
                                                       style={{
                                                           color: '#FFD700',
                                                           padding: "4px 0px 0px 8px"
                                                       }}/></h3>
                        </div>
                    </div>
                </div>

                <div className={'col-12 mt-3'}>
                    <div className={'mapButton d-flex justify-content-center rounded p-5'}>
                        <button className={'btn btn-light'} style={{backgroundColor: '#ffffff'}}>Zobrazit na mapě
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DestinationSideBar;