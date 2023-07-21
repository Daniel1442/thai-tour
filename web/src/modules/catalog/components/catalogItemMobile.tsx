import React, {useRef, useState} from 'react';
import StarRatings from "react-star-ratings";
import {useRouter} from "next/router";

const CatalogItemMobile: React.FC = () => {
    const router = useRouter();

    return (
        <div className={'catalogItem background-white mt-3 rounded-corners'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <img src={'http://www.thaitour.cz/wp-content/gallery/railay-great-view-resort/exterior_001.jpg'}/>
                </div>
                <div className={'col-12 px-4 pb-3'}>
                    <div className={'col-12 mt-3'}>
                        Thajsko - Railay Great View Resort & Spa
                    </div>
                    <div className={'col-12 mt-2 text-muted'} style={{fontSize: '11px'}}>
                        588 Moo 2, Tambol Ao Nang, Maung, Krabi 81000 Thajsko
                    </div>
                    <br/>
                    <div className={'row mt-5 d-flex'}>
                        <div className={'col-12 d-flex justify-content-start'}>
                            <div className={'mt-2 me-1'}>
                                <b className={'pt-2'}>4 / 5 </b>
                            </div>
                            <div className={'me-5 mt-1'}>
                                <StarRatings
                                    rating={1}
                                    starRatedColor="gold"
                                    numberOfStars={1}
                                    name='rating'
                                    starDimension="20px"
                                    starSpacing="5px"
                                />
                            </div>
                            <b className={'font-red mt-2 ms-5'}> od 1200 Kč za os.</b>
                            <button className={'btn background-yellow rounded-corners font-white ms-2 mb-1 '} onClick={() => router.push('/destination')}>Náhled
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CatalogItemMobile;