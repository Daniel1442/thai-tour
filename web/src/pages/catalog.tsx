import React, {useContext, useEffect} from "react";
import SidebarFilter from "../modules/catalog/components/sidebarFilter";
import CatalogItem from "../modules/catalog/components/catalogItem";
import {PlaceContent, PlaceContext} from "../context/placeContext";
import {useRouter} from "next/router";
import {PlaceFinderPayload} from "../modules/homepage/models";
import CatalogItemMobile from "../modules/catalog/components/catalogItemMobile";

const Catalog = () => {
    const router = useRouter()

    const {
        placeList,
        filterPlaceF,
        parameters,
        fetchParameters,
        payload
    } = useContext(PlaceContext) as PlaceContent;

    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    useEffect(() => {
        fetchParameters();
    }, [router]);

    useEffect(() => {
        console.log(payload)
        if (payload == null) {
            filterPlaceF({} as PlaceFinderPayload)
        } else {
            console.log(payload)
            filterPlaceF(payload as PlaceFinderPayload)
        }
    }, [router,payload]);


    return <div className={'container mt-5'}>
            <div className={'row'}>
                <div className={'col-lg-3 col-sm-12 mx-lg-3 mx-sm-0 mb-3 mt-0  m-sm-0'}>
                    <SidebarFilter params={parameters}/>
                </div>

                <div className={'col-lg-8 col-sm-12'}>
                    {placeList && placeList.length > 0 ? Object.entries(placeList).map(([id, place]) => {
                        return (
                            width > 768 ?
                                <CatalogItem place={place} key={id}/>
                                : <CatalogItemMobile place={place} key={id}/>

                        )
                    }) : <div className="alert alert-danger mt-3" role="alert">
                        <h4 className="alert-heading">Bohužel!</h4>
                        <p>Nepodařilo najít odpovídající lokalitu.</p>
                        <hr/>
                        <p className="mb-0">Zkuste upravit své filtry</p>
                    </div>}
                    <nav aria-label="Page navigation example" className={'mt-5'}>
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link font-blue" href="#" >Předcházející</a>
                            </li>
                            <li className="page-item "><a className="page-link" href="#">1</a></li>
                            <li className="page-item "><a className="page-link" href="#">2</a></li>
                            <li className="page-item "><a className="page-link" href="#">3</a></li>
                            <li className="page-item ">
                                <a className="page-link font-blue" href="#">Další</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
}

export default Catalog;
