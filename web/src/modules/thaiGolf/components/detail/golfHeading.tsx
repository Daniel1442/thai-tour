import React, {useContext} from 'react';
import {GolfContent, GolfContext} from "../../../../context/golfContext";


const GolfHeading: React.FC = () => {
    const {
        golf
    } = useContext(GolfContext) as GolfContent;

    return (
        <div className={'col-lg-12 desktop'}>
            <div className={'row'}>

                <div className={'col-lg-7 col-sm-10 d-flex justify-content-start'}>
                    <h2 className={'me-2 detailHeding'}>{golf && golf.name}</h2>
                </div>
                <div className={'col-lg-2 d-flex justify-content-start'}>

                </div>

            </div>
            <div className={'col-12 d-flex justify-content-start'}>
                <p>
                    {golf && golf.location} (<a
                    href={`/map?lat=${golf && golf.latitude}&long=${golf && golf.longitude}&name=${golf.name}`}>Zobrazit
                    na mapě</a>)</p>
            </div>

        </div>
    )
}
export default GolfHeading;