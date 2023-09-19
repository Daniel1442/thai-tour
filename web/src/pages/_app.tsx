import '../../resources/sass/app.scss';
import type {AppProps as NextAppProps} from "next/app";
import React, {ReactNode} from "react";
import PlaceContextProvider from "../context/placeContext";
import Header from "../modules/common/components/header";
import Navigation from "../modules/common/components/navigation";
import MobileNavigation from "../modules/common/components/mobileNavigation";
import MobileFooter from "../modules/common/components/mobileFooter";
import Footer from "../modules/common/components/footer";

type AppProps<P = any> = {
    pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;
export default function App({Component, pageProps}: AppProps): JSX.Element {
    return (<React.Fragment>
        <PlaceContextProvider>
            <div className={'homepage'}>
                <Header/>
                <Navigation/>
                <MobileNavigation/>
                <Component {...pageProps as ReactNode}/>
                <Footer href={''} contact={''}/>
                <MobileFooter href={''} contact={''}/>
            </div>
        </PlaceContextProvider>
    </React.Fragment>)
}