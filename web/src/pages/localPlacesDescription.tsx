import React, {useContext, useEffect, useState} from "react";
import Navigation from '../modules/common/components/navigation';
import Footer from "../modules/common/components/footer";
import Header from "../modules/common/components/header";

const LocalPlaceDescription = () => {
    return <div className={'homepage'}>
        <Header/>
        <Navigation/>

        <div className={'container pt-5'}>
            WIP
        </div>
        <Footer href={''} contact={''}/>
    </div>
}

export default LocalPlaceDescription;
