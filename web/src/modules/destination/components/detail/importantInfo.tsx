import React, {useContext} from 'react';
import {PlaceContent, PlaceContext} from "../../../../context/placeContext";

const ImportantInfo: React.FC = () => {
    const {
        place,
        fetchPlace
    } = useContext(PlaceContext) as PlaceContent;
    return (
        <div className={'importantInfo pt-3'} style={{borderRadius: '4px'}}>
            {/*<div dangerouslySetInnerHTML={{__html: place.placeContentsList && place.placeContentsList[1].value}}></div>*/}
            <div className={"row"}>
                <div className={"col-12"}>
                    <div className="alert alert-warning" role="alert" style={{padding: "0", border: 0}}><h4
                        className="alert-heading" style={{padding: "16px"}}>Důležité informace!</h4>
                        <hr style={{margin: "1rem 0 0 0"}}/>
                        <div className={"row"} style={{padding: "1rem 0", margin: 0, backgroundColor: "#fff"}}>
                            <div className={"mt-3 col-12 d-flex justify-content-start"}><h5>Důležité & Akce</h5>
                            </div>
                            <div className={"col-lg-8 col-sm-12 d-flex justify-content-start"}>
                                <div className="entry-content"><p>&#9642; V resortu nelze ubytovat děti pod 18
                                    let!</p>                                    <p>&#9642; Zdarma denně čerstvé
                                    ovoce na pokoji!</p>                                    <p>&#9642; Sleva 5% v
                                    případě rezervace provedené min. 60 dní předem v termínu 11.1. – 31.4.!</p>
                                    <p>&#9642; V termínu 20.12. – 15.1. je vyžadován pobyt min. 5 nocí!</p>
                                    <p>&#9642; Slevy a akce nelze kombinovat! Nelze použít na přistýlku!</p>
                                    <p>&#9642; Na Vánoce a Nový rok jsou klienti povinni zakoupit v hotelu Gala
                                        večeři s doprovodným programem. Při pobytu v těchto termínech bude večeře
                                        automaticky napočítána k ceně pobytu!</p></div>
                            </div>
                            <div className={"mt-3 col-12 d-flex justify-content-start"}><h5>Platební podmínky</h5>
                            </div>
                            <div className={" col-lg-8 col-sm-12 d-flex justify-content-start"}><p> Ceny uvedené v
                                ceníku jsou ceny základní a platné, eventuálně může dojít i k jejich případnému
                                snížení. To závisí na požadovaném termínu a obsazenosti resortu. Máte-li zájem o
                                tento resort, vyplňte prosím nezavázanou rezervaci a my Vám zpět zašleme cenovou
                                nabídku k potvrzení závazné rezervace. Poplatky za doplňkové služby dle nabídky
                                hotelu se nezapočítávají do celkové ceny a je třeba je zaplatit zvlášť při pobytu.
                                Platba: Twin Lotus Resort & Spa – Kho Lanta vyžaduje od klientů zálohu za ubytování
                                předem ve výši 20% z celkové ceny, a to při potvrzení závazné rezervace. Doplatek
                                ceny za ubytování je vyžadován min. 30 dní před odjezdem. </p></div>
                            <div className={"mt-3 col-12 d-flex justify-content-start"}><h5>Storno podmínky</h5>
                            </div>
                            <div className={" col-lg-8 col-sm-12 d-flex justify-content-start"}><p> Při zrušení
                                rezervace méně jak 21 dní před příjezdem v termínu 1.11. – 19.12. a 16.1. – 30.4.,
                                bude klientovi účtován stornopoplatek 50% celkové ceny a při zrušení rezervace méně
                                jak 21 dní před příjezdem v termínu 20.12. – 15.1., bude klientovi účtován
                                stornopoplatek 100% celkové ceny (podmínky hotelu). Mimo výše uvedeného se ostatní
                                storno podmínky řídí dle všeobecných obchodních podmínek Thai Tour cestovní
                                agentura. </p></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ImportantInfo;