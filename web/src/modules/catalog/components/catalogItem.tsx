import React, {useRef, useState} from 'react';
import StarRatings from "react-star-ratings";
import {useRouter} from "next/router";
import {PlaceRow} from "../../homepage/models";
import UserReviewBadge from "../../homepage/components/userReviewBadge";

interface ComponentProps {
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
                        <h5 className="card-title card-link mb-1"> {place.name} <StarRatings
                            rating={place.review}
                            starRatedColor="gold"
                            numberOfStars={5}
                            name='rating'
                            starDimension="15px"
                            starSpacing="0px"
                        /></h5>
                        <p className="card-text" style={{fontSize: '11px'}}>
                            {place.address}</p>
                    </div>
                    <div className={'col-12 pt-3 text-muted'} style={{fontSize: '11px'}}>
                        {place && place.value}
                    </div>
                    <br/>
                    <div className={'row mt-3 d-flex'}>
                        <div className={'col-6 d-flex justify-content-start mt-2'}>
                            <UserReviewBadge review={place.review}/>
                        </div>
                        <div className={'col-6 d-flex justify-content-end'}>
                            <b className={'font-red      me-4 mt-2'}> od 1200 Kč za os.</b>
                            <button className={'btn btn-sm background-yellow rounded-corners font-white me-3 ms-3'} style={{    width: '70px',
                                height: '30px',
                                marginTop: '4px'}}
                               onClick={() => redirectToDetail(place && place.id)}>Náhled
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CatalogItem;