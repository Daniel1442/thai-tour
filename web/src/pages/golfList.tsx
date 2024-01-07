import React, {useContext, useEffect} from "react";
import {useRouter} from "next/router";
import SidebarFilter from "../modules/catalog/components/sidebarFilter";
import {GolfContent, GolfContext} from "../context/golfContext";
import {GolfFinderPayload} from "../modules/thaiGolf/module";
import CatalogItem from "../modules/thaiGolf/components/golfList/catalogItem";
import CatalogItemMobile from "../modules/thaiGolf/components/golfList/catalogItemMobile";

const GolfList = () => {
    const router = useRouter()

    const {
        parameters,
        golfList,
        fetchParameters,
        filterGolfF,
        payload
    } = useContext(GolfContext) as GolfContent;

    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    useEffect(() => {
        fetchParameters();
    }, [router]);

    useEffect(() => {
        if (payload == null) {
            filterGolfF({} as GolfFinderPayload)
        } else {
            filterGolfF(payload as GolfFinderPayload)
        }
    }, [router, payload]);

    return <div className={'container mt-5'}>
        <div className={'row'}>
            <div className={'col-lg-3 col-sm-12 mx-lg-3 mx-sm-0 mb-3 mt-0  m-sm-0'}>
                <SidebarFilter params={parameters} type={'GOLF'}/>
            </div>

            <div className={'col-lg-8 col-sm-12'}>
                {golfList && golfList.length > 0 ? Object.entries(golfList).map(([id, golf]) => {
                    return (
                        width > 768 ?
                            <CatalogItem golf={golf} key={id}/>
                            : <CatalogItemMobile golf={golf} key={id}/>
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

export default GolfList;
