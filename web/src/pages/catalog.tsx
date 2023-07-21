import React, {useContext, useEffect} from "react";
import Navigation from '../modules/common/components/navigation';
import Footer from "../modules/common/components/footer";
import SidebarFilter from "../modules/catalog/components/sidebarFilter";
import CatalogItem from "../modules/catalog/components/catalogItem";
import CatalogItemMobile from "../modules/catalog/components/catalogItemMobile";
import ContactButton from "../modules/common/components/contactButton";
import Header from "../modules/common/components/header";
import {PlaceContent, PlaceContext} from "../context/placeContext";
import SuggestionItem from "../modules/homepage/components/suggestionItem";

const Catalog = () => {
    let width = typeof window !== 'undefined' && window.innerWidth;
    const {
        placeList
    } = useContext(PlaceContext) as PlaceContent;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);
    return <div className={'homepage'}>
        {width > 768 &&
            <Header/>
        }
        <Navigation/>
        <div className={'container mt-5'}>
            <div className={'row'}>
                <div className={'col-lg-3 col-sm-12 m-lg-3 m-sm-0'}>
                    <SidebarFilter/>
                </div>

                <div className={'col-lg-8 col-sm-12'}>
                    {Object.entries(placeList).map(([id, place]) => {
                        return(
                            <CatalogItem place={place} key={id}/>
                        )
                    })}
                </div>

            </div>
        </div>
        <Footer href={''} contact={''}/>
    </div>
}

export default Catalog;
