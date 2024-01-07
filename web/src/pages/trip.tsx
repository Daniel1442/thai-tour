import React, {useContext, useEffect} from "react";
import InformationImageCard from "../modules/destination/components/detail/informationImageCard";
import {useRouter} from "next/router";
import Loader from "../modules/common/components/loader";
import TripSidebar from "../modules/trip/components/detail/tripSidebar";
import AboutTrip from "../modules/trip/components/detail/aboutTrip";
import TripHeading from "../modules/trip/components/detail/tripHeading";
import TripHeadingMobile from "../modules/trip/components/detail/tripHeadingMobile";
import {TripContent, TripContext} from "../context/tripContext";

const Trip = () => {
    let width = typeof window !== 'undefined' && window.innerWidth;
    const router = useRouter();
    const {id} = router.query;

    const {
        trip,
        fetchTrip
    } = useContext(TripContext) as TripContent;


    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    useEffect(() => {
        console.log(id)
        fetchTrip(id as string)
    }, [id]);

    return <>
        {trip ?

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

export default Trip;
