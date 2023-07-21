import React, {useContext, useRef, useState} from 'react';
import {PlaceContent, PlaceContext} from "../../../context/placeContext";

const ImportantInfo: React.FC = () => {
    const {
        place,
        fetchPlace
    } = useContext(PlaceContext) as PlaceContent;
    return (
        <div className={'importantInfo pt-3'} style={{borderRadius: '4px'}}>
            <div dangerouslySetInnerHTML={{__html: place.placeContentsList && place.placeContentsList[1].value}}></div>
        </div>
    )
}
export default ImportantInfo;