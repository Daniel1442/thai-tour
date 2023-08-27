import React, {useEffect, useState} from "react";
import Navigation from '../modules/common/components/navigation';
import SearchBar from "../modules/homepage/components/searchBar";
import Carousel from "../modules/homepage/components/carousel";
import SuggestionItem from "../modules/homepage/components/suggestionItem";
import SuggestionArticle from "../modules/homepage/components/suggestionArticle";
import Footer from "../modules/common/components/footer";
import {useRouter} from "next/router";
import Header from "../modules/common/components/header";
import {PlaceRow} from "../modules/homepage/models";
import {getFavoritePlaces} from "../modules/homepage/action";
import MobileFooter from "../modules/common/components/mobileFooter";
import MobileNavigation from "../modules/common/components/mobileNavigation";

const Index = () => {
    const router = useRouter();

    const redirectToCatalog = () => {
        router.push('/catalog')
    }
    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    const [favoritePlace, setFavoritePlace] = useState<PlaceRow[]>([])


    useEffect(() => {
        getFavoritePlaces().then((list: any) => {
            setFavoritePlace(list.result)
        }).catch((err: string) => {
            console.log(err)
        })
    }, []);


    return <div className={'homepage'}>
        <Header/>
        <Navigation/>
        <MobileNavigation/>
        <div className="main__img pt-5 pb-5">
            <div className={'container'}>
                <div className={'row mb-5'}>
                    <SearchBar/>
                </div>
                <div className={'row'}>
                    <Carousel/>
                </div>
            </div>
        </div>
        <div className={'container'}>
            <div className={'row mt-5 mb-5'}>
                <h3 className={'mb-4 cursor-pointer'} onClick={() => redirectToCatalog()}>Vybrali jsme pro vás:</h3>
                {Object.entries(favoritePlace).map(([id, place]) => {
                    return (
                        <SuggestionItem place={place} key={id}/>
                    )
                })}
            </div>

            <div className={'row mt-5 mb-5'}>
                <h3 className={'mb-4'}>Nevíte kam? Inspirujte se!</h3>
                <SuggestionArticle image={'http://www.thaitour.cz/wp-content/uploads/14.jpg'}/>
                <SuggestionArticle image={'http://www.thaitour.cz/wp-content/uploads/21.jpg'}/>
                <SuggestionArticle image={'http://www.thaitour.cz/wp-content/uploads/31.jpg'}/>
                <SuggestionArticle image={'http://www.thaitour.cz/wp-content/uploads/14.jpg'}/>
            </div>
        </div>
        <Footer href={''} contact={''}/>
        <MobileFooter href={''} contact={''}/>

    </div>
}

export default Index;
