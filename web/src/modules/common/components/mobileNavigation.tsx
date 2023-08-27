import React, {useEffect, useState} from 'react';
import Dropdown from "./dropdown";
import {useRouter} from "next/router";
import DropdownPlaces from "./dropdownPlaces";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const MobileNavigation: React.FC = () => {
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

        <div className={'background-blue navigation mobile'}>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light pt-0" style={{height: '70px'}}
                     onClick={() => (setToggle(!toggle))}>
                    <div className="container">
                        <div className={'col-12'}>

                            <div className={'d-flex justify-content-between'}>
                                <div className="contact-info font-white">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faPhone}/>
                                    </div>
                                    <div className="text">
                                        <span className="text-row">Zavolejte</span>
                                        <span className="text-row">nám</span>
                                    </div>
                                </div>
                                <div  className={'me-5'}>
                                    <img
                                        onClick={() => redirectToHomepage()}
                                        height={'115px'}
                                        style={{zIndex:'1000', position:'relative'}}
                                        src={"http://www.thaitour.cz/wp-content/themes/twentyten/images/logo.jpg"}
                                        alt="ThaiTour"/>

                                </div>

                                <button type="button" className="navbar-toggler font-white mt-3" data-bs-toggle="collapse" style={{width: '55px',  height:'40px'}}
                                        data-bs-target="#navbarCollapse">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className={`collapse navbar-collapse mobileNavbar ${toggle ? 'show' : ''}`}
                                     id="navbarCollapse">
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
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )

}
export default MobileNavigation;