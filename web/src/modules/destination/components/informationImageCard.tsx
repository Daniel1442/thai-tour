import React, {useContext, useRef, useState} from 'react';
import {Card} from 'react-bootstrap';
import {PlaceContent, PlaceContext} from "../../../context/placeContext";
import InformationCard from "./informationCard";

const InformationImageCard:React.FC = () => {
    const {
        place,
        fetchPlace
    } = useContext(PlaceContext) as PlaceContent;
    return (
        <div className={'informationImageCard'}>
            <div className={'row my-3'}>
                <div className={'col-12'}>
                    <div className={'d-flex justify-content-center'}>
                        <img src={place && place.image}
                             className={'detailImage'}/>
                    </div>
                </div>
            </div>
            <InformationCard/>
        </div>
    )
}
export default InformationImageCard;