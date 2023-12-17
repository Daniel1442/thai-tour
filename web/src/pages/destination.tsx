import React, {useContext, useEffect} from "react";
import InformationImageCard from "../modules/destination/components/informationImageCard";
import {useRouter} from "next/router";
import {PlaceContent, PlaceContext} from "../context/placeContext";
import Loader from "../modules/common/components/loader";
import DestinationHeading from "../modules/destination/components/destinationHeading";
import DestinationSidebarNew from "../modules/destination/components/destinationSidebarNew";
import DestinationNavbar from "../modules/destination/components/destinationNavbar";
import AboutDestinationNew from "../modules/destination/components/aboutDestinationNew";
import DestinationHeadingMobile from "../modules/destination/components/destinationHeadingMobile";
import DestinationRoom from "../modules/destination/components/destinationRoom";
import DestinationMap from "../modules/destination/components/destinationMap";
import DestinationWeather from "../modules/destination/components/destinationWeather";

const Destination = () => {
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
                    <DestinationHeading/>
                    <DestinationHeadingMobile/>
                </div>
                <div className={'row'}>
                    <div className={'col-lg-9 col-sm-12'}>
                        <InformationImageCard/>
                    </div>
                    <div className={'col-lg-3 col-sm-12'}>
                        <DestinationSidebarNew/>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-12 mobilePaddingColumn'}>
                        <DestinationNavbar/>
                    </div>
                    <div className={'col-12'}>
                        {placeDescriptionType === 'ABOUT' &&
                            <AboutDestinationNew/>
                        }
                        {placeDescriptionType === 'ROOMS' &&
                            <DestinationRoom/>
                        }
                        {placeDescriptionType === 'MAP' &&
                            <DestinationMap/>
                        }
                        {placeDescriptionType === 'WEATHER' &&
                            <DestinationWeather/>
                        }

                    </div>
                </div>
            </div> : <Loader text={'Počkejte prosím'}/>
        }
    </>

}

export default Destination;
