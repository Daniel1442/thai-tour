import React, {useEffect} from "react";

const TripList = () => {

    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    return <div className={'container pt-5'}>
        <div className={'row'}>

        </div>
    </div>

}

export default TripList;
