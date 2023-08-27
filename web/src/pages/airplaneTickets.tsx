import React, {useEffect} from "react";
import Navigation from '../modules/common/components/navigation';
import Footer from "../modules/common/components/footer";
import Header from "../modules/common/components/header";
import MobileFooter from "../modules/common/components/mobileFooter";
import MobileNavigation from "../modules/common/components/mobileNavigation";

const AirPlaneTickets = () => {
    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);
    return <div className={'homepage'}>
            <Header/>
        <Navigation/>
        <MobileNavigation/>

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
        <MobileFooter href={''} contact={''}/>
    </div>
}

export default AirPlaneTickets;
