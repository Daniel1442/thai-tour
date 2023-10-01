import React from 'react';
import {useRouter} from "next/router";
import MobileFooterDropdown from "./mobileFooterDropdown";
import {LazyLoadImage} from "react-lazy-load-image-component";


interface ContactProps {
    href: string;
    contact: string
}

const MobileFooter: React.FC<ContactProps> = ({href, contact}) => {
    const router = useRouter();

    const redirectToHomepage = () => {
        router.push('/')
    }
    return (
        <>
            <div className={'border-top py-2 border-bottom mobile'}>
                <div className={'container'}>
                    <MobileFooterDropdown heading={'Užitečné dotazy'}/>
                    <MobileFooterDropdown heading={'Nabídky  služeb'}/>
                    <MobileFooterDropdown heading={'Můj Thai Tour'}/>
                    <MobileFooterDropdown heading={'O nás'}/>
                    <MobileFooterDropdown heading={'Kontakty'}/>
                    <div className={'row mt-3 '}>
                        <div className={'col-12 d-flex justify-content-center  mb-2'}>
                            <h3>Spojte se Thai Tour</h3>
                        </div>
                        <div className={'col-12 d-flex justify-content-center'}>
                            <ul className="list-unstyled d-flex justify-content-center footer-m">
                                <li className="ms-3"><a className="link-dark" href="#">
                                    <LazyLoadImage  src={'https://cdn-icons-png.flaticon.com/512/2168/2168336.png'}
                                         width={30}
                                         height={30}/>

                                </a></li>
                                <li className="ms-3"><a className="link-dark" href="#">
                                    <LazyLoadImage  src={'https://cdn-icons-png.flaticon.com/512/3669/3669688.png'}
                                         width={30}
                                         height={30}/>

                                </a></li>
                                <li className="ms-3"><a className="link-dark" href="#">
                                    <LazyLoadImage  src={'https://cdn-icons-png.flaticon.com/512/2168/2168281.png'}
                                         width={30}
                                         height={30}/>
                                </a></li>
                                <li className="ms-3"><a className="link-dark" href="#">
                                    <LazyLoadImage  src={'https://cdn-icons-png.flaticon.com/512/1384/1384015.png'}
                                         width={30}
                                         height={30}/>
                                </a></li>
                                <li className="ms-3"><a className="link-dark" href="#">
                                    <LazyLoadImage  src={'https://cdn-icons-png.flaticon.com/512/1384/1384014.png'}
                                         width={30}
                                         height={30}/>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-10'}>
                            <div className={'row'}>
                                <div className={'col-12'}>
                                    <small className={'me-3'}>Mapa webu</small>
                                    <small className={''}>Právní podmínky</small>
                                </div>
                            </div>
                            <div className={'row'}>
                                <div className={'col-12'}>
                                    <small className={'me-3'}>Ochrana soukromí</small>
                                    <small className={''}>Cookies</small>
                                    <small className={''}>Dokumenty</small>
                                </div>
                            </div>
                            <div className={'row'}>
                                <div className={'col-12'}>
                                    <small className={'me-3'}>Ceník</small>
                                </div>
                            </div>

                            <small>Copyright © 2023 Vodafone Czech Republic a.s.</small>
                        </div>
                        <div className={'col-2'}>
                            <LazyLoadImage 
                                onClick={() => redirectToHomepage()}
                                // src={"https://www.thaitour.cz/favicon.png"}
                                src={"http://www.thaitour.cz/wp-content/themes/twentyten/images/logo.jpg"}

                                className={'me-3 w-100 h-100'}
                                alt="ThaiTour"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MobileFooter;
