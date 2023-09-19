import React, {useEffect} from "react";

const AirPlaneTickets = () => {
    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    return <>
        <div className={'container'}>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Thai-tour</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Letenky</li>
                </ol>
            </nav>
        </div>
        <div className={'container pt-3'}>
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
    </>
}

export default AirPlaneTickets;
