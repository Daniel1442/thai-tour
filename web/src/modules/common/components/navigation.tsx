import React, {useEffect, useState} from 'react';
import Dropdown from "./dropdown";
import {useRouter} from "next/router";
import DropdownPlaces from "./dropdownPlaces";
import {faHeart, faLock, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


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
            <div className="container  px-0">
                <nav className="navbar navbar-expand-lg navbar-light" style={{height: '60px'}} onClick={() => (setToggle(!toggle))}>
                    <div className="container-fluid  px-0">
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse mobileNavbar ${toggle ? 'show' : ''}`} id="navbarCollapse d-flex" style={{justifyContent: 'space-between'}}>
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
                            <div className="navbar-text float-end row">
                                <div className={'col-4'}>
                                    <FontAwesomeIcon icon={faSearch}
                                                     style={{
                                                         color: '#ffffff',
                                                         padding: "0px 16px 0px 0px"
                                                     }}/>
                                </div>
                                <div className={'col-4'}>
                                    <FontAwesomeIcon icon={faHeart}
                                                     style={{
                                                         color: '#ffffff',
                                                         padding: "0px 16px 0px 0px"
                                                     }}/>
                                </div>
                                <div className={'col-4'}>
                                    <FontAwesomeIcon icon={faLock}
                                                     style={{
                                                         color: '#ffffff',
                                                         padding: "0px 16px 0px 0px"
                                                     }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )

}
export default Navigation;