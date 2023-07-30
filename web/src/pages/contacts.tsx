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

        <div className={'container pt-5'}>
            <div className={'row'}>
                <div className={'col-lg-6 col-sm-12 mt-3    '}>
                    <div className="card border-0">
                        <div className="card-body">
                            <h5 className="card-title">Thai Tour cestovní agentura</h5>
                            <h5 className="card-title">Ing. Jana Škodová</h5>
                            <h6 className="card-subtitle mb-2 mt-2 text-muted">IČ: 713 822 16</h6>
                            <div className="entry-content">
                                <p><FontAwesomeIcon icon={faPhone}
                                                    style={{
                                                        color: '#00FFFF',
                                                        padding: "4px 0px 0px 0px"
                                                    }}/> +420 777 625 302</p>
                                <p><FontAwesomeIcon icon={faGlobe}
                                                    style={{
                                                        color: '#00FFFF',
                                                        padding: "4px 0px 0px 0px"
                                                    }}/> www.thaitour.cz</p>
                                <p><FontAwesomeIcon icon={faEnvelope}
                                                    style={{
                                                        color: '#00FFFF',
                                                        padding: "4px 0px 0px 0px"
                                                    }}/> info@thaitour.cz</p>
                                <p><FontAwesomeIcon icon={faAddressBook}
                                                    style={{
                                                        color: '#00FFFF',
                                                        padding: "4px 0px 0px 0px"
                                                    }}/> Pod Slovany 2041/5, Praha 2
                                    PSČ: 120 00, Česká republika</p>
                                <p><img className={'me-2'}
                                        src={'http://www.thaitour.cz/wp-content/themes/twentyten/images/court_small.png'}/>
                                    Zapsaná v Živnostenském rejstříku
                                    Úřadu městské části Praha 11
                                </p>

                            </div>
                            <a href="/reference" className="btn btn-primary mt-2">Reference klientů</a>
                        </div>
                    </div>
                </div>
                <div className={'col-lg-6 col-sm-12 mt-3'}>
                    <div className="card border-0">
                        <div className="card-body">
                            <a href={'http://www.thaitour.cz/wp-content/uploads/2013/11/Bankovni-udaje.pdf'}
                               target={'_blank'} className="card-title text-black cursor-pointer"
                               style={{fontSize: '20px', textDecoration: 'none'}}>
                                <FontAwesomeIcon icon={faBank}
                                                 className={'me-2'}
                                                 style={{
                                                     color: '#00FFFF',
                                                     padding: "4px 0px 0px 0px"
                                                 }}/>
                                Bankovní spojení</a>
                            <h6 className="card-subtitle mb-2 mt-2 text-muted">Air Bank a.s.</h6>
                            <div className={'mt-2'}>
                                <p><b>Č.Ú.: </b>1326035013 / 3030 (CZK)</p>
                                <p><b>IBAN </b> CZ48 3030 0000 0013 2603 5013</p>
                                <p><b>BIC/SWIFT: </b>AIRACZPP</p>
                                <br/>
                                <p><b>Č.Ú.: </b>326035021 / 3030 (EUR)</p>
                                <p><b>IBAN </b>CZ26 3030 0000 0013 2603 5021</p>
                                <p><b>BIC/SWIFT: </b>AIRACZPP</p>

                            </div>
                            <a href="http://www.thaitour.cz/wp-content/uploads/Vseobecne_obchodni_podminky_Thai_Tour_cestovni_agentura.pdf"
                               target={'_blank'} className="btn btn-primary mt-1">Všeobecné obchodní podmínky</a>

                        </div>
                    </div>
                </div>
            </div>
            <div className={'row mt-5'}>
                <div className={'col-12'}>
                    <form className={'bg-white p-3 rounded-corners'}>
                            <legend>Váš dotaz / připomínka</legend>
                            <div className="mb-3">
                                <label className="form-label">Jméno a přijmení</label>
                                <input type="text" className="form-control"
                                       placeholder="Jan Novák"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control"  placeholder="jan.novak@emial.cz"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Telefon</label>
                                <input type="text" className="form-control"  placeholder="777 666 555"
                                       />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Zpráva</label>
                                <textarea className="form-control"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary mt-5">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <Footer href={''} contact={''}/>
    </div>
}

export default Contacts;
