import React, {useEffect} from "react";
import Navigation from '../modules/common/components/navigation';
import Footer from "../modules/common/components/footer";
import Header from "../modules/common/components/header";
import MobileFooter from "../modules/common/components/mobileFooter";
import MobileNavigation from "../modules/common/components/mobileNavigation";

const ThaiTours = () => {

    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    return <div className={'homepage'}>
            <Header/>
        <Navigation/>
        <MobileNavigation/>

        <div className={'container pt-5'}>
            WIP
        </div>
           <Footer href={''} contact={''}/> 
        <MobileFooter href={''} contact={''}/>
    </div>
}

export default ThaiTours;
