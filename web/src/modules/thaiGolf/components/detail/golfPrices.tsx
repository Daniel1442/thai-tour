import React, {useContext} from 'react';
import {GolfContent, GolfContext} from "../../../../context/golfContext";

const GolfPrices: React.FC = () => {

    const {
        golf,
    } = useContext(GolfContext) as GolfContent;
    console.log(golf)
    return (
        <>
            <div className={'row mt-5 mb-3'}>
                <>

                    <div className={'col-lg-3 text-left mb'}>
                        <h3 className={'font-blue'}>Ceník služeb</h3>
                    </div>
                    <div className={'col-lg-8'}>
                        <table
                            className="table">
                            {golf && golf.prices && golf.prices.length > 0 &&
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">{golf.prices[0].label}</th>
                                        <th scope="col">{golf.prices[1].label}</th>
                                        <th scope="col">{golf.prices[2].label}</th>
                                        <th scope="col">{golf.prices[3].label}</th>
                                        <th scope="col">{golf.prices[4].label}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{golf.prices[0].price}</td>
                                        <td>{golf.prices[1].price}</td>
                                        <td>{golf.prices[2].price}</td>
                                        <td>{golf.prices[3].price}</td>
                                        <td>{golf.prices[4].price}</td>
                                    </tr>

                                    </tbody>
                                </table>
                            }
                        </table>
                    </div>

                </>
            </div>
            <div className={'row mt-5 mb-3'}>
                <>

                    <div className={'col-lg-3 text-left mb'}>
                        <h3 className={'font-blue'}>Ceník balíčku</h3>
                    </div>
                    <div className={'col-lg-8'}>
                        <table
                            className="table">
                            {golf && golf.prices && golf.prices.length > 0 &&
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">{golf.prices[0].label}</th>
                                        <th scope="col">{golf.prices[1].label}</th>
                                        <th scope="col">{golf.prices[2].label}</th>
                                        <th scope="col">{golf.prices[3].label}</th>
                                        <th scope="col">{golf.prices[4].label}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{golf.prices[5].price}</td>
                                        <td>{golf.prices[6].price}</td>
                                        <td>{golf.prices[7].price}</td>
                                        <td>{golf.prices[8].price}</td>
                                        <td>{golf.prices[9].price}</td>
                                    </tr>

                                    </tbody>
                                </table>
                            }
                        </table>
                    </div>

                </>
            </div>
        </>
    )
}
export default GolfPrices;
