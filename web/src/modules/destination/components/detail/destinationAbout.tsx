import React, {useContext} from 'react';
import {PlaceContent, PlaceContext} from "../../../../context/placeContext";


const DestinationAbout: React.FC = () => {
    const {
        place,
        fetchPlace
    } = useContext(PlaceContext) as PlaceContent;

    return (
        <div className={'col-lg-8 col-sm-12 mx-lg-0 mx-sm-3'}>
           <div dangerouslySetInnerHTML={{__html: place.placeContentsList &&  place.placeContentsList[0].value}}></div>
        </div>

    )
}
export default DestinationAbout;