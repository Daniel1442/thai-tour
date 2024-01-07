import React, {useContext, useEffect} from "react";
import {useRouter} from "next/router";
import {TripFinderPayload} from "../modules/homepage/models";
import CatalogItemMobile from "../modules/trip/components/tripList/catalogItemMobile";
import {TripContent, TripContext} from "../context/tripContext";
import CatalogItem from "../modules/trip/components/tripList/catalogItem";
import SidebarFilter from "../modules/catalog/components/sidebarFilter";

const TripList = () => {
    const router = useRouter()

    const {
        parameters,
        tripList,
        fetchParameters,
        filterTripF,
        payload
    } = useContext(TripContext) as TripContent;

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
            filterTripF({} as TripFinderPayload)
        } else {
            console.log(payload)
            filterTripF(payload as TripFinderPayload)
        }
    }, [router, payload]);

    console.log(tripList)

    return <div className={'container mt-5'}>
        <div className={'row'}>
            <div className={'col-lg-3 col-sm-12 mx-lg-3 mx-sm-0 mb-3 mt-0  m-sm-0'}>
                <SidebarFilter params={parameters} type={'TRIP'}/>
            </div>

            <div className={'col-lg-8 col-sm-12'}>
                {tripList && tripList.length > 0 ? Object.entries(tripList).map(([id, trip]) => {
                    return (
                        width > 768 ?
                            <CatalogItem trip={trip} key={id}/>
                            : <CatalogItemMobile trip={trip} key={id}/>
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
                            <a className="page-link font-blue" href="#">Předcházející</a>
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

export default TripList;
