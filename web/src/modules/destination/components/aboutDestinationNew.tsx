import React, {useContext} from 'react';
import {PlaceContent, PlaceContext} from "../../../context/placeContext";
import {placeContentHeader} from "../utils/placeContentHeader";

const AboutDestinationNew: React.FC = () => {

        const {
            place,
            fetchPlace
        } = useContext(PlaceContext) as PlaceContent;
        return (
            <div className={'row mt-5 mb-3'}>
                <>
                    {place && place.placeContentsList && place.placeContentsList.length > 0 && place.placeContentsList.map((placeContents, index) => {
                        if (index < place.placeContentsList.length - 1) {
                            return <>
                                <div className={'col-lg-3 text-left mb'}>
                                    <h3 className={'font-blue'}>{placeContentHeader(placeContents.type)}</h3>
                                </div>
                                <div className={'col-lg-8'}>
                                    <p>{placeContents.value}</p>
                                </div>
                                <hr/>
                            </>
                        } else if (index === place.placeContentsList.length -1) {
                            return <>
                                <div className={'col-lg-3 text-left mb'}>
                                    <h3 className={'font-blue'}>{placeContentHeader(placeContents.type)}</h3>
                                </div>
                                <div className={'col-lg-8'}>
                                    <p>{placeContents.value}</p>
                                </div>
                            </>
                        }
                        return <></>

                    })}
                </>
            </div>
        )
    }
    export default AboutDestinationNew;
