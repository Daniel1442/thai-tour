import React, {useEffect} from "react";
import {faReply} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Reference = () => {

    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    return <section className="gradient-custom">
            <div className="container  py-5">
                <div className={'bg-white rounded-corners'}>
                    <div className={'row'}>
                        <div className={'col-12 px-4'}>
                            <h3 className={'mt-3'}>Reference</h3>
                            <p>Zde si můžete přečíst reakce našich klientů reflektující kvality našich služeb, které pro
                                Vás
                                stále zlepšujeme, a které můžete vyzkoušet i Vy sami, když zvolíte Thaitour.cz jako
                                svého
                                partnera pro Vaši exotickou dovolenou v Thajsku.

                                Podělte se s ostatními o Vaše zážitky a zanechte nám zde Vaši referenci, ať už na hotel,
                                nebo na naše služby. Pro vložení Vašeho příspěvku využijte níže uvedený formulář.

                                Děkujeme všem našim klientům za důvěru a pochvalné dopisy, které nám zasíláte. Jsme tu
                                pro
                                Vás a děláme maximum pro Vaši spokojenost!</p>
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-md-12 col-lg-12 col-xl-12">
                            <div className="card border-0">
                                <div className="card-body">
                                    <h4 className="text-left mb-4 pb-2">60 komentářů u Reference</h4>

                                    <div className="row">
                                        <div className="col">
                                            <div className="d-flex flex-start">
                                                <img className="rounded-circle shadow-1-strong me-3"
                                                     src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                                                     alt="avatar" width="65"
                                                     height="65"/>
                                                <div className="flex-grow-1 flex-shrink-1">
                                                    <div>
                                                        <div
                                                            className="d-flex justify-content-between align-items-center">
                                                            <p className="mb-1">
                                                                Lenka Harcubová <span
                                                                className="small">- 6.12.2018</span>
                                                            </p>
                                                            <a href="#!"><FontAwesomeIcon icon={faReply}
                                                                                          style={{
                                                                                              color: '#00FFFF',
                                                                                              padding: "4px 0px 0px 0px"
                                                                                          }}/><span
                                                                className="small"></span></a>
                                                        </div>
                                                        <p className="small mb-0">
                                                            Ráda bych tímto poděkovala Thai Tour a paní Škodové za
                                                            organizaci naší dovolené. Dovolená byla nádherná, ubytován
                                                            skvělé a jídlo – no luxus! Měli jsme domluvený transfer z
                                                            posledního letiště do hotelu na Koh Chang, překvapilo mě
                                                            ale, že
                                                            na nás i v Bangkoku čekal pomocník, který nás provedl
                                                            letištěm a
                                                            pomohl s vízem a všemi náležitostmi.
                                                            Objednali jsme si i výlety – trekking v džungli nás dostal
                                                            na
                                                            pokraj sil – asi naši skupinu odhadli jako velmi zdatnou :-)
                                                            Bylo to ale strašně zajímavé a jsme moc rádi, že jsme
                                                            absolvovali.
                                                            Doporučuji nejen Thajsko ale Thajsko s paní Škodovou!
                                                        </p>
                                                    </div>

                                                    <div className="d-flex flex-start mt-4">
                                                        <a className="me-3" href="#">
                                                            <img className="rounded-circle shadow-1-strong"
                                                                 src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(11).webp"
                                                                 alt="avatar"
                                                                 width="65" height="65"/>
                                                        </a>
                                                        <div className="flex-grow-1 flex-shrink-1">
                                                            <div>
                                                                <div
                                                                    className="d-flex justify-content-between align-items-center">
                                                                    <p className="mb-1">
                                                                        Admin <span
                                                                        className="small">- 6.12.2018</span>
                                                                    </p>
                                                                </div>
                                                                <p className="small mb-0">
                                                                    Děkuji za pěkná slova a zpětnou vazbu
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-start mt-4">
                                                <img className="rounded-circle shadow-1-strong me-3"
                                                     src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(12).webp"
                                                     alt="avatar" width="65"
                                                     height="65"/>
                                                <div className="flex-grow-1 flex-shrink-1">
                                                    <div>
                                                        <div
                                                            className="d-flex justify-content-between align-items-center">
                                                            <p className="mb-1">
                                                                Michaela a Daniel <span
                                                                className="small">- 1.12.2018</span>
                                                            </p>
                                                            <a href="#!"><FontAwesomeIcon icon={faReply}
                                                                                          style={{
                                                                                              color: '#00FFFF',
                                                                                              padding: "4px 0px 0px 0px"
                                                                                          }}/><span
                                                                className="small"></span></a>
                                                        </div>
                                                        <p className="small mb-0">
                                                            Před 10 dny jsme se vrátili ze dvoutýdenní dovolené z
                                                            Thajska,
                                                            ze které máme spoustu zážitků, na které budeme dlouho
                                                            vzpomínat.
                                                            Děkujeme tímto moc paní Škodové, která nám zajistila
                                                            ubytování a
                                                            transfer do hotelu a dala před cestou cenné a užitečné rady.
                                                            Naše dovolená začala v Bangkoku, kde jsme zůstali 2 noci a
                                                            poté
                                                            jsme pokračovali na Krabi a odtud na ostrov Koh Lanta. Hotel
                                                            Lanta Chada byl opravdu moc hezký, podnikali jsme výlety a
                                                            vše
                                                            se vydařilo. Agenturu Thaitour bych opravdu všem doporučila,
                                                            jednání s paní Škodovou bylo profesionální a příjemné.
                                                            Zdraví Michaela+Daniel
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
}

export default Reference;
