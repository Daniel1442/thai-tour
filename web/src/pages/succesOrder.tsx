import React, {useEffect} from "react";

const SuccesOrder = () => {

    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    return <div className={'container pt-5'}>
    </div>

}

export default SuccesOrder;
