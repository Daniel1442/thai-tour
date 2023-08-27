import React from 'react';
import {useRouter} from "next/router";


interface ContactProps {
    href: string;
    contact: string
}

const Footer: React.FC<ContactProps> = ({href, contact}) => {
    const router = useRouter();

    const redirectToHomepage = () => {
        router.push('/')
    }
    return (
        <>
            <div className={'border-top pt-5 desktop'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-lg-12 d-flex'}>
                            <h2>Spojte se s Thai Tour</h2>
                            <ul className="list-unstyled d-flex justify-content-center footer-m">
                                <li className="ms-3"><a className="link-dark" href="#">
                                    <img src={'https://cdn-icons-png.flaticon.com/512/2168/2168336.png'}
                                         width={30}
                                         height={30}/>

                                </a></li>
                                <li className="ms-3"><a className="link-dark" href="#">
                                    <img src={'https://cdn-icons-png.flaticon.com/512/3669/3669688.png'}
                                         width={30}
                                         height={30}/>

                                </a></li>
                                <li className="ms-3"><a className="link-dark" href="#">
                                    <img src={'https://cdn-icons-png.flaticon.com/512/2168/2168281.png'}
                                         width={30}
                                         height={30}/>
                                </a></li>
                                <li className="ms-3"><a className="link-dark" href="#">
                                    <img src={'https://cdn-icons-png.flaticon.com/512/1384/1384015.png'}
                                         width={30}
                                         height={30}/>
                                </a></li>
                                <li className="ms-3"><a className="link-dark" href="#">
                                    <img src={'https://cdn-icons-png.flaticon.com/512/1384/1384014.png'}
                                         width={30}
                                         height={30}/>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={'row mt-5'}>
                        <div className={'col-lg-3 col-sm-12'}>
                            <h4>Nadpis 1</h4>
                            <ul style={{listStyleType: 'none', paddingLeft: '0'}}>
                                <li>text 1</li>
                                <li>text 1</li>
                                <li>text 1</li>
                                <li>text 1</li>
                                <li>text 1</li>
                                <li>text 1</li>
                                <li>text 1</li>
                                <li>text 1</li>
                                <li>text 1</li>
                                <li>text 1</li>
                            </ul>
                        </div>
                        <div className={'col-lg-3 col-sm-12'}>
                            <h4>Nadpis 2</h4>
                            <ul style={{listStyleType: 'none', paddingLeft: '0'}}>
                                <li>text 2</li>
                                <li>text 2</li>
                                <li>text 2</li>
                                <li>text 2</li>
                                <li>text 2</li>
                                <li>text 2</li>
                                <li>text 2</li>
                                <li>text 2</li>
                                <li>text 2</li>
                                <li>text 2</li>
                            </ul>
                        </div>
                        <div className={'col-lg-3 col-sm-12'}>
                            <h4>Nadpis 2</h4>
                            <ul style={{listStyleType: 'none', paddingLeft: '0'}}>
                                <li>text 3</li>
                                <li>text 3</li>
                                <li>text 3</li>
                                <li>text 3</li>
                                <li>text 3</li>
                                <li>text 3</li>
                                <li>text 3</li>
                                <li>text 3</li>
                                <li>text 3</li>
                                <li>text 3</li>
                            </ul>
                        </div>
                        <div className={'col-lg-3 col-sm-12'}>
                            <h4>Nadpis 4</h4>
                            <ul style={{listStyleType: 'none', paddingLeft: '0'}}>
                                <li>text 4</li>
                                <li>text 4</li>
                                <li>text 4</li>
                                <li>text 4</li>
                                <li>text 4</li>
                                <li>text 4</li>
                                <li>text 4</li>
                                <li>text 4</li>
                                <li>text 4</li>
                                <li>text 4</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'border-top pt-5'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-12  d-flex justify-content-center'}>
                            <img
                                onClick={() => redirectToHomepage()}
                                src={"https://www.thaitour.cz/favicon.png"}
                                className={'me-3'}
                                alt="ThaiTour"/>

                            <a  className={'me-3'}>Mapa webu</a>

                            <a  className={'me-3'}>Právní podmínky</a>

                            <a  className={'me-3'}>Ochrana soukromí</a>

                            <a  className={'me-3'}>Cookies
                            </a>

                            <a className={'me-3'} >Dokumenty</a>

                            <a  className={'me-3'}>Ceník</a>
                        </div>
                    </div>
                    <div className={'row text-center mt-5 mb-3'}>
                        <small>Copyright © 2023 Vodafone Czech Republic a.s.</small>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;
