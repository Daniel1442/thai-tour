import React, {useEffect} from "react";

const WhyThaiTour = () => {

    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    return <div className={'container pt-5'}>
        WIP
    </div>
}

export default WhyThaiTour;
