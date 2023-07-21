import React, {useRef, useState} from 'react';
import StarRatings from "react-star-ratings";
import {useRouter} from "next/router";
import {PlaceRow} from "../../homepage/models";
interface ComponentProps  {
    place: PlaceRow
}
const CatalogItem: React.FC<ComponentProps> = ({place}) => {
    const router = useRouter();
    const redirectToDetail = (placeId: string) => {
        router.push(`/destination?id=${placeId}`)
    }
    return (
        <div className={'catalogItem background-white mt-3 rounded-corners'}>
            <div className={'row'}>
                <div className={'col-4'}>
                    <img src={place && place.image}/>

                </div>
                <div className={'col-8'}>
                    <div className={'col-12 mt-3'}>
                        {place && place.name}
                    </div>
                    <div className={'col-12 mt-2 text-muted'} style={{fontSize: '11px'}}>
                        {place && place.value}
                    </div>
                    <br/>
                    <div className={'row mt-5 d-flex'}>

                            <div className={'col-6 d-flex justify-content-start'}>
                                <div className={'mt-2 me-1'}>
                                    <b className={'pt-2'}>{place && place.review} / 5 </b>
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
                            </div>
                            <div className={'col-6 d-flex justify-content-end'}>
                                <b className={'font-red mt-2 ms-5 me-2'}> od 1200 Kč za os.</b>
                                <button className={'btn background-yellow rounded-corners font-white mb-1 me-1'} onClick={() =>redirectToDetail(place && place.id)}>Náhled
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default CatalogItem;