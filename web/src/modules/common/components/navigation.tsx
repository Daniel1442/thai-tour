import React, {useEffect, useState} from 'react';
import Dropdown from "./dropdown";
import {useRouter} from "next/router";
import DropdownPlaces from "./dropdownPlaces";


const Navigation: React.FC = () => {
    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    const router = useRouter();

    const redirectToHomepage = () => {
        router.push('/')
    }
    const [toggle, setToggle] = useState(false)


    return (

        <div className={'background-blue navigation desktop'}>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light" style={{height: '60px'}} onClick={() => (setToggle(!toggle))}>
                    <div className="container-fluid">
                        <a className="navbar-brand cursor-pointer">
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
                        <div className={`collapse navbar-collapse mobileNavbar ${toggle ? 'show' : ''}`} id="navbarCollapse">
                            <div className="navbar-nav">
                                <a href="/aboutUs" className="nav-item nav-link font-white">O nás</a>
                                <a href="/blog" className="nav-item nav-link font-white">Blog</a>
                                <DropdownPlaces name={'Ubytování'}/>
                                <a href="/airplaneTickets" className="nav-item nav-link font-white">Letenky</a>
                                <a href="/transfer" className="nav-item nav-link font-white">Transfer</a>
                                <a href="/tripCatalog" className="nav-item nav-link font-white">Výlety</a>
                                <a href="/thaiGolf" className="nav-item nav-link font-white">Golf</a>
                                <Dropdown name={'O thajsku'}/>
                                <a href="/contacts" className="nav-item nav-link font-white">Kontakt</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )

}
export default Navigation;