import React, {useContext, useEffect, useState} from "react";
import Navigation from '../modules/common/components/navigation';
import Footer from "../modules/common/components/footer";
import Header from "../modules/common/components/header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAddressBook, faBank,
    faBowlFood, faEnvelope,
    faGlassCheers, faGlobe, faParking, faPhone, faSink, faSkiing,
    faSnowflake,
    faSwimmingPool,
    faTree,
    faUmbrellaBeach, faWeightHanging,
    faWifi
} from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {
    return <div className={'homepage'}>
        <Header/>
        <Navigation/>

        <div className={'container pt-5 bg-white'}>
            <h1 className={'my-5'}>Hlavní kontakty</h1>
            <p>
                Ať už potřebujete pomoci s výběrem destinace a ubytování, či máte dotazy k rezervaci, rádi vám pomůžeme!

            </p>
            <p>
                S důvěrou se na nás obraťte <b>od pondělka do neděle 8:00-22:00 </b> a získejte potřebnou pomoc.

            </p>
            <div className={'row'}>
                <div className={'col-lg-3 col-sm-12 mt-3'}>
                    <div className="card border-0" style={{width: "18rem"}}>
                        <img className="card-img-top"
                             src="data:image/png;base64,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"
                             alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Rezervujte si svou příští dovolenou</h5>
                            <p className="card-text">Thai Tour má odborníky, kteří vám rádi poradí s výběrem destinace a
                                ubytování a pomohou vám s výběrem zájezdů.</p>
                            <a href="tel: +420 777 625 302" className="font-blue"><FontAwesomeIcon icon={faPhone}
                                                                                                   className={'me-2'}/> +420
                                777 625 302</a>
                        </div>
                    </div>
                </div>
                <div className={'col-lg-3 col-sm-12 mt-3'}>
                    <div className="card border-0" style={{width: "18rem"}}>
                        <img className="card-img-top"
                             src="data:image/png;base64,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"
                             alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Další služby</h5>
                            <p className="card-text">Už jste si rezervovali dovolenou? Přiobjednejte si parkování na
                                letišti a pojištění nebo si pronajměte auto, aby vaše cesta byla pohodlnější.</p>
                            <a href="tel: +420 777 625 302" className="font-blue"><FontAwesomeIcon icon={faPhone}
                                                                                                   className={'me-2'}/> +420
                                777 625 302</a>
                        </div>
                    </div>
                </div>
                <div className={'col-lg-3 col-sm-12 mt-3'}>
                    <div className="card border-0" style={{width: "18rem"}}>
                        <img className="card-img-top"
                             src="data:image/png;base64,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"
                             alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Online podpora při rezervaci</h5>
                            <p className="card-text">Vybíráte si zájezd či ubytování online a máte jakékoli související
                                dotazy? Jsme připraveni vám je zodpovědět.</p>
                            <a href="tel: +420 777 625 302" className="font-blue"><FontAwesomeIcon icon={faPhone}
                                                                                                   className={'me-2'}/> +420
                                777 625 302</a>
                        </div>
                    </div>
                </div>
                <div className={'col-lg-3 col-sm-12 mt-3'}>
                    <div className="card border-0" style={{width: "18rem"}}>
                        <img className="card-img-top"
                             src="data:image/png;base64,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"
                             alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Dotazy ohledně zakoupené dovolené</h5>
                            <a href="tel: +420 777 625 302" className="font-blue"><FontAwesomeIcon icon={faPhone}
                                                                                                   className={'me-2'}/> +420
                                777 625 302</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'row'}>
                <h3 className={'my-5'}>Sídlo společnosti</h3>

                <h5>Thai Tour, a.s.</h5>
                <b>Pod Slovany 2041/5</b>
                <b>120 00 Praha 2</b>

                    <table className="table mt-3">
                        <thead>
                        <tr className={'background-blue'}>
                            <th scope="col font-white">Název bankovního účtu</th>
                            <th scope="col font-white">Číslo bankovního účtu</th>
                            <th scope="col font-white">IBAN</th>
                            <th scope="col font-white">BIC/SWIFT</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Air Bank a.s. (CZK)</th>
                            <td>1326035013 / 3030</td>
                            <td>CZ48 3030 0000 0013 2603 5013</td>
                            <td>AIRACZPP</td>
                        </tr>
                        <tr>
                            <th scope="row">Air Bank a.s. (EUR)</th>
                            <td>326035021 / 3030</td>
                            <td>CZ26 3030 0000 0013 2603 5021</td>
                            <td>AIRACZPP</td>
                        </tr>

                        </tbody>
                    </table>

            </div>
            </div>
        <Footer href={''} contact={''}/>
    </div>
}

export default Contacts;