import React, {useEffect, useRef, useState} from 'react';
import Dropdown from "./dropdown";
import {useRouter} from "next/router";


const Navigation: React.FC = () => {
    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    const router = useRouter();

    const redirectToHomepage = () => {
        router.push('/')
    }


    return (

        <div className={'background-blue navigation'}>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light" style={{height: '60px'}}>
                    <div className="container-fluid">
                        <a href="#" className="navbar-brand">
                            <img
                                onClick={() => redirectToHomepage()}
                                className={'mobile'}
                                src={"https://www.thaitour.cz/favicon.png"}
                                alt="ThaiTour"/>
                            <img
                                onClick={() => redirectToHomepage()}
                                className={'desktop'}
                                src={"http://www.thaitour.cz/wp-content/themes/twentyten/images/logo.jpg"}
                                alt="ThaiTour"/>
                        </a>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav">
                                <a href="" className="nav-item nav-link font-white">O nás</a>
                                <a href="#" className="nav-item nav-link font-white">Ubytování</a>
                                <a href="#" className="nav-item nav-link font-white">Letenky</a>
                                <a href="#" className="nav-item nav-link font-white">Transfer</a>
                                <a href="#" className="nav-item nav-link font-white">Výlety</a>
                                <a href="#" className="nav-item nav-link font-white">Golf</a>
                                <Dropdown name={'O thajsku'}/>
                                <a href="#" className="nav-item nav-link font-white">Kontakt</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )

}
export default Navigation;