import React, {useEffect} from "react";
import PlaceCardWithoutBullets from "../modules/common/components/placeCardWithoutBullets";
import {LazyLoadImage} from "react-lazy-load-image-component";

const Transfer = () => {

    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    return <div className={'container pt-5'}>
        <h1 className={'my-5'}>
            Transfer</h1>
        <div className={'row'}>
            <div className={'col-12'}>
                <LazyLoadImage src="http://www.thaitour.cz/wp-content/uploads/2013/11/transfer.jpg" width={'100%'}/>
            </div>
            <div className={'col-12'}>
                <PlaceCardWithoutBullets
                    text={'K ubytování v Thajsku Vám můžeme zprostředkovat i bezpečnou, spolehlivou a komfortní osobní automobilovou přepravu do místa Vaší cílové destinace, podle Vámi stanovených požadavků. Nejčastěji z/na letiště Bangkok. Máte-li zájem o letenky do Thajska (letenky Bangkok), naleznete je záložce „Letenky“.\n' +
                        '\n' +
                        'Zajistíme Vám přepravu jak individuální pro 1-4 osoby, tak i skupinovou pro 5 a více osob.'}
                    heading={'Co Vám nabízíme?'}/>
            </div>
            <div className={'col-12'}>
                <PlaceCardWithoutBullets heading={'Letištní transfer z nebo na letiště Bangkok:'}
                                         text={'Při příletu na letiště v Bangkoku na Vás řidič počká v příletové hale terminálu, podle Vašeho letu. Řidič bude držet tabulku s Vaším jménem (jménem uvedeným v rezervaci), takže se nemůžete minout. Řidič Vám pomůže se zavazadly a odveze Vás na adresu uvedenou v rezervaci či na voucheru. Máte-li během jízdy potřebu zastávky či jiný požadavek, nebojte se řidiče zeptat.\n' +
                                             '\n' +
                                             'Stejný princip je i v případě, že Vás řidič vyzvedne v hotelu, kdy Vás řidič v den transferu a uvedenou hodinu vyzvedne na recepci hotelu.\n' +
                                             '\n' +
                                             'Potřebujete-li přepravit z/na letiště, doporučujeme Vám zarezervovat si letištní transfer dopředu. Rezervaci transferu můžete provést on-line, spolu při rezervaci Vámi zvoleného ubytování, nebo samostatným e-mailem: info@thaitour.cz.\n' +
                                             '\n' +
                                             'Ceny jednotlivých transferů se liší dle cílové destinace a dle počtu přepravovaných osob. V případě vašeho zájmu Vám cenu transferu velmi rádi zjistíme.\n' +
                                             '\n' +
                                             'Přejeme Vám šťastnou cestu a aby byla Vaše dovolená v Thajsku a ubytování v Thajsku skvělý zážitek!'}/>
            </div>
        </div>
    </div>
}

export default Transfer;
