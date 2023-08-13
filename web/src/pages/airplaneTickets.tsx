import React, {useContext, useEffect, useState} from "react";
import Navigation from '../modules/common/components/navigation';
import Footer from "../modules/common/components/footer";
import Header from "../modules/common/components/header";

const AirPlaneTickets = () => {
    return <div className={'homepage'}>
        <Header/>
        <Navigation/>

        <div className={'container pt-5'}>
            <h1 className={'my-5'}>
                Letenky do Thajska / Letenky Thajsko</h1>
            <div className={'row'}>
                <div className={'col-12'}>
                    <img src={'http://www.thaitour.cz/wp-content/uploads/2013/10/Letadlo.jpg'} width={'100%'}/>
                </div>
                <div className={'col-12'}>
                    <iframe src={'https://letenky.kralovna.cz/booking/?idProdejce=4710&lang=cs-cz'} width={'100%'}
                            height={'900px'}/>
                </div>
            </div>
        </div>
        <Footer href={''} contact={''}/>
    </div>
}

export default AirPlaneTickets;
