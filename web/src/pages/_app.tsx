import '../../resources/sass/app.scss';
import type { AppProps as NextAppProps } from "next/app";
import React, {ReactNode} from "react";
import PlaceContextProvider from "../context/placeContext";

type AppProps<P = any> = {
    pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;
export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (<React.Fragment>
        <PlaceContextProvider>
            <Component {...pageProps as ReactNode}/>
        </PlaceContextProvider>
    </React.Fragment>)
}