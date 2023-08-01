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
                    <div className="col-lg-3 col-md-3 col-sm-12 mb-3">
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

                    <div className="col-lg-3 col-md-3 col-sm-12 mb-3">
                        <h5 className={'footer-mobile'} >O Thai Tour</h5>
                        <ul className="nav flex-column footer-mobile">
                            <li className="nav-item mb-2">
                                <a className="nav-link p-0 text-muted">Často kladené otázky</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a className="nav-link p-0 text-muted" href={'/reference'}>Refence klientů</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-12 mb-3">
                        <h5 className={'footer-mobile'} >Další informace</h5>
                        <ul className="nav flex-column footer-mobile">
                            <li className="nav-item mb-2">
                                <a className="nav-link p-0 text-muted">O Thajsku</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a className="nav-link p-0 text-muted" href={'/reference'}>Golf v Thajsku</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 mb-3 col-sm-12">
                        <h5 className={'footer-mobile'}>Citace</h5>
                        <i className={'footer-mobile'}>Agenturu Thai tour jsem našla náhodou na internetu a když jsem si
                            zjistila, že za celou
                            organizaci dovolené si účtují jen poplatky za ubytování a výlety a přečetla si kladné
                            reference, neváhala jsem služeb využít. S přítelem jsme byli v Bangkoku, na Koh Samui a
                            Krabi a dovolenou si náramně užili. Nejvíce jsem ocenila ušetřený čas za hledání hotelů a
                            výletů a ty, které paní Škodová doporučila, byly fajn :-) Služby agentury jsou velmi
                            profesionální, takže v budoucnu je využiji zase :-)</i>
                    </div>


                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 footer-m">
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <p className={'text-center m-lg-0 m-sm-auto'}>© 2000–2023. Thai Tour.cz, a.s. - největší
                                cestovní agentura pro Thajské destinace v ČR. Tato stránka využívá cookies.</p>
                        </div>
                        <div className={'col-12 2 mt-3'}>
                            <ul className="list-unstyled d-flex justify-content-center footer-m">
                                <li className="ms-3"><a className="link-dark" href="#">
                                    <img src={'https://cdn-icons-png.flaticon.com/512/2168/2168336.png'} width={30}
                                         height={30}/>

                                </a></li>
                                <li className="ms-3"><a className="link-dark" href="#">
                                    <img src={'https://cdn-icons-png.flaticon.com/512/3669/3669688.png'} width={30}
                                         height={30}/>

                                </a></li>
                                <li className="ms-3"><a className="link-dark" href="#">
                                    <img src={'https://cdn-icons-png.flaticon.com/512/2168/2168281.png'} width={30}
                                         height={30}/>
                                </a></li>
                                <li className="ms-3"><a className="link-dark" href="#">
                                    <img src={'https://cdn-icons-png.flaticon.com/512/1384/1384015.png'} width={30}
                                         height={30}/>
                                </a></li>
                                <li className="ms-3"><a className="link-dark" href="#">
                                    <img src={'https://cdn-icons-png.flaticon.com/512/1384/1384014.png'} width={30}
                                         height={30}/>
                                </a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;
