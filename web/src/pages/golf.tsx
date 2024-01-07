import React, {useContext, useEffect} from "react";
import {useRouter} from "next/router";
import Loader from "../modules/common/components/loader";


import {GolfContent, GolfContext} from "../context/golfContext";
import GolfHeading from "../modules/thaiGolf/components/detail/golfHeading";
import GolfHeadingMobile from "../modules/thaiGolf/components/detail/golfHeadingMobile";
import InformationImageCard from "../modules/thaiGolf/components/detail/InformationImageCard";
import GolfSidebar from "../modules/thaiGolf/components/detail/golfSidebar";
import GolfNavbar from "../modules/thaiGolf/components/detail/golfNavbar";
import AboutGolf from "../modules/thaiGolf/components/detail/golfAbout";
import GolfPrices from "../modules/thaiGolf/components/detail/golfPrices";
import GolfMap from "../modules/thaiGolf/components/detail/golfMap";

const Golf = () => {
    let width = typeof window !== 'undefined' && window.innerWidth;
    const router = useRouter();
    const {id} = router.query;

    const {
        golf,
        fetchGolf,
        golfDescriptionType
    } = useContext(GolfContext) as GolfContent;


    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    useEffect(() => {
        fetchGolf(id as string)
    }, [id]);

    useEffect(() => {
        console.log(golfDescriptionType)
    }, [golfDescriptionType]);

    return <>
        {golf ?
            <div className={'container pt-5'}>
                <div className={'row'}>
                    <GolfHeading/>
                    <GolfHeadingMobile/>
                </div>
                <div className={'row'}>
                    <div className={'col-lg-9 col-sm-12'}>
                        <InformationImageCard/>
                    </div>
                    <div className={'col-lg-3 col-sm-12'}>
                        <GolfSidebar/>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-12 mobilePaddingColumn'}>
                        <GolfNavbar/>
                    </div>
                    <div className={'col-12'}>
                        {golfDescriptionType === 'ABOUT' &&
                            <AboutGolf/>
                        }
                        {golfDescriptionType === 'PRICE' &&
                            <GolfPrices/>
                        }
                        {golfDescriptionType === 'MAP' &&
                            <GolfMap/>
                        }
                    </div>
                </div>
            </div> : <Loader text={'Počkejte prosím'}/>
        }
    </>

}

export default Golf;
