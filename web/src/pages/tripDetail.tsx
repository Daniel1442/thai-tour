import React, {useContext, useEffect} from "react";
import InformationImageCard from "../modules/destination/components/informationImageCard";
import {useRouter} from "next/router";
import {PlaceContent, PlaceContext} from "../context/placeContext";
import Loader from "../modules/common/components/loader";
import TripSidebar from "../modules/trip/components/tripSidebar";
import AboutTrip from "../modules/trip/components/aboutTrip";
import TripHeading from "../modules/trip/components/tripHeading";
import TripHeadingMobile from "../modules/trip/components/tripHeadingMobile";

const TripDetail = () => {
    let width = typeof window !== 'undefined' && window.innerWidth;
    const router = useRouter();
    const {id} = router.query;

    const {
        place,
        fetchPlace,
        placeDescriptionType
    } = useContext(PlaceContext) as PlaceContent;


    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    useEffect(() => {
        fetchPlace(id as string)
    }, [id]);

    return <>
        {place ?

            <div className={'container pt-5'}>
                <div className={'row'}>
                    <TripHeading/>
                    <TripHeadingMobile/>
                </div>
                <div className={'row'}>
                    <div className={'col-lg-9 col-sm-12'}>
                        <InformationImageCard/>
                    </div>
                    <div className={'col-lg-3 col-sm-12'}>
                        <TripSidebar/>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-12'}>
                       <AboutTrip/>
                    </div>
                </div>
            </div> : <Loader text={'Počkejte prosím'}/>
        }
    </>

}

export default TripDetail;
