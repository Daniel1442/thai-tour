import React, {useContext, useEffect, useState} from "react";
import Navigation from '../modules/common/components/navigation';
import SearchBar from "../modules/homepage/components/searchBar";
import Carousel from "../modules/homepage/components/carousel";
import SuggestionItem from "../modules/homepage/components/suggestionItem";
import SuggestionArticle from "../modules/homepage/components/suggestionArticle";
import Footer from "../modules/common/components/footer";
import InformationImageCard from "../modules/destination/components/informationImageCard";
import DestinationSideBar from "../modules/destination/components/destinationSidebar";
import AboutDestination from "../modules/destination/components/aboutDestination";
import ImportantInfo from "../modules/destination/components/importantInfo";
import Header from "../modules/common/components/header";
import {useRouter} from "next/router";
import {getDetail, getFavoritePlaces} from "../modules/homepage/action";
import {PlaceDetail, PlaceRow} from "../modules/homepage/models";
import {usePlaceContext} from "../hooks/usePlaceContext";
import {PlaceContent, PlaceContext} from "../context/placeContext";
import Loader from "../modules/common/components/loader";

const Destination = () => {
    let width = typeof window !== 'undefined' && window.innerWidth;
    const router = useRouter();
    const {id} = router.query;

    const {
        place,
        fetchPlace
    } = useContext(PlaceContext) as PlaceContent;


    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    useEffect(() => {
        fetchPlace(id as string)
    }, [id]);

    return <div className={'homepage'}>
        <Header/>
        <Navigation/>
        {place  ?

        <div className={'container pt-5'}>
            <div className={'row'}>
                <div className={'col-lg-8 col-sm-12'}>
                    <InformationImageCard/>
                </div>
                <div className={'col-lg-4 col-sm-12'}>
                    <DestinationSideBar/>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-12'}>
                    <ImportantInfo/>
                </div>
            </div>
            <div className={'row mt-3'}>
                <div className={'col-12'}>
                    <AboutDestination/>
                </div>
            </div>
        </div> : <Loader text={'Počkejte prosím'}/>
        }
        <Footer href={''} contact={''}/>
    </div>
}

export default Destination;
