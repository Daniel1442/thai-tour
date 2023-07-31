import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faIcons} from "@fortawesome/free-solid-svg-icons";


interface ContactProps {
    href: string;
    contact: string
}

const Footer: React.FC<ContactProps> = ({href, contact}) => {

    return (
        <div className="container border-top">
            <footer className="py-5" style={{}}>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
                        <h5 className={'footer-mobile'}>Kontaktní informace</h5>
                        <ul className="nav flex-column footer-mobile">
                            <li className="nav-item mb-2"><a href="tel:+420 777 625 302"
                                                             className="nav-link p-0 text-muted">Telefon: +420 777 625
                                302</a></li>
                            <li className="nav-item mb-2"><a href="mailto: info@thaitour.cz"
                                                             className="nav-link p-0 text-muted">Email:
                                info@thaitour.cz</a>
                            </li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Všeobecné
                                obchodní podmínky</a>
                            </li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Fakturační
                                údaje</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Bankovní
                                spojení</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
                        <form>
                            <h5 className={'footer-mobile'}>Reference klientů</h5>
                            <div className="d-flex flex-column flex-sm-row mt-3 gap-2 footer-mobile">
                                <a href={'/reference'} className="btn btn btn-outline-primary" type="button">Přejít na refernce
                                </a>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-3 col-sm-12">
                        <h5 className={'footer-mobile'}>Citace</h5>
                        <i className={'footer-mobile'}>Agenturu Thai tour jsem našla náhodou na internetu a když jsem si zjistila, že za celou
                            organizaci dovolené si účtují jen poplatky za ubytování a výlety a přečetla si kladné
                            reference, neváhala jsem služeb využít. S přítelem jsme byli v Bangkoku, na Koh Samui a
                            Krabi a dovolenou si náramně užili. Nejvíce jsem ocenila ušetřený čas za hledání hotelů a
                            výletů a ty, které paní Škodová doporučila, byly fajn :-) Služby agentury jsou velmi
                            profesionální, takže v budoucnu je využiji zase :-)</i>
                    </div>


                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 footer-m">
                    <p className={'m-lg-0 m-sm-auto'}>© 2022 Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex footer-m">
                        <li className="ms-3"><a className="link-dark" href="#">
                            <FontAwesomeIcon icon={faIcons}/>

                        </a></li>
                        <li className="ms-3"><a className="link-dark" href="#">
                            <FontAwesomeIcon icon={faIcons}/>

                        </a></li>
                        <li className="ms-3"><a className="link-dark" href="#facebook">
                            <FontAwesomeIcon icon={faIcons}/>
                        </a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}
export default Footer;