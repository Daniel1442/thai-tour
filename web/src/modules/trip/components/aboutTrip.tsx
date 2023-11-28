import React, {useContext} from 'react';
import {TripContent, TripContext} from "../../../context/tripContext";
import {tripContentHeader} from "../utils/tripContentHeader";

const AboutTrip: React.FC = () => {
    const {
        trip,
        fetchTrip
    } = useContext(TripContext) as TripContent;

    return (
        <div className={'row mt-5 mb-3  '}>

            {trip && trip.tripContentsList && trip.tripContentsList.length > 0 && trip.tripContentsList.map((tripContent, index) => {
                if (index < trip.tripContentsList.length - 1) {
                    return <>
                        <div className={'col-lg-3 text-left mb'}>
                            <h3 className={'font-blue'}>{tripContentHeader(tripContent.type)}</h3>
                        </div>
                        <div className={'col-lg-8'}>
                            <p>{tripContent.value}</p>
                        </div>
                        <hr/>
                    </>
                } else if (index === trip.tripContentsList.length -1) {
                    return <>
                        <div className={'col-lg-3 text-left mb'}>
                            <h3 className={'font-blue'}>{tripContentHeader(tripContent.type)}</h3>
                        </div>
                        <div className={'col-lg-8'}>
                            <p>{tripContent.value}</p>
                        </div>
                    </>
                }
                return <></>

            })}
        </div>
    )
}
export default AboutTrip;
