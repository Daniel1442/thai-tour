import React, {useContext, useEffect} from "react";
import {PlaceContent, PlaceContext} from "../context/placeContext";
import {useRouter} from "next/router";
import {useLocalStorage} from "../hooks/useLocalStorage";
import SuggestionItem from "../modules/homepage/components/suggestionItem";

const FavoriteCatalog = () => {
    const router = useRouter()

    const {
        placeFavoriteList,
        filterFavoritePlaceF,
    } = useContext(PlaceContext) as PlaceContent;
    const [registry, setRegistryStore] = useLocalStorage("LOGIN_DATA", [])


    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);


    useEffect(() => {
        console.log(registry)
        if (!registry.userId) {
            router.push('/')
        }
        if (registry.userId) {
            filterFavoritePlaceF({customerId: registry.userId, type: 'PLACE'})
        }
    }, [router, registry]);


    return <div className={'container mt-5'}>
        <div className={'row mt-5 mb-5'}>
            <h3 className={'mb-4'}>Vaše oblíbená místa</h3>
            {placeFavoriteList && placeFavoriteList.length > 0 ? Object.entries(placeFavoriteList).map(([id, place]) => {

                return (
                    <SuggestionItem place={place} key={id}/>
                )
            }) : <div className="alert alert-danger mt-3" role="alert">
                <h4 className="alert-heading">Bohužel!</h4>
                <p>Nepodařilo najít žádná oblíbená místa.</p>
                <hr/>
                <p className="mb-0">Zkuste si nějaká místa přídat!</p>
            </div>}
        </div>
    </div>
}

export default FavoriteCatalog;
