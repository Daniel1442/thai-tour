import React, {useContext} from 'react';
import {GolfContent, GolfContext} from "../../../../context/golfContext";

const AboutGolf: React.FC = () => {

    const {
        golf,
    } = useContext(GolfContext) as GolfContent;
    return (
        <div className={'row mt-5 mb-3'}>
            <>
                {golf && golf.contents && golf.contents.length > 0 && golf.contents.map((golfContent, index) => {
                    if (golfContent.type === "DESCRIPTION") {
                        return <>
                            <div className={'col-lg-3 text-left mb'}>
                                <h3 className={'font-blue'}>Popis</h3>
                            </div>
                            <div className={'col-lg-8'}>
                                <p>{golfContent.value}</p>
                            </div>
                            <hr/>
                        </>
                    }
                    return <></>

                })}
            </>
        </div>
    )
}
export default AboutGolf;
