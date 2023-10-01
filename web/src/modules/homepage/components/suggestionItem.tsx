import React from 'react';
import {useRouter} from "next/router";
import StarRatings from "react-star-ratings";
import {PlaceRow} from "../models";
import UserReviewBadge from "./userReviewBadge";
import {LazyLoadImage} from "react-lazy-load-image-component";

interface ComponentProps  {
  place: PlaceRow
}
const SuggestionItem: React.FC<ComponentProps> = ({place}) => {
    const router = useRouter();

    const redirectToDetail = (placeId: string) => {
        router.push(`/destination?id=${placeId}`)
    }
    return (
        <div className={'col-lg-3 col-sm-12 d-flex justify-content-center suggestionItem'} onClick={(() => redirectToDetail(place.id as string))}>
            <div className="card cursor-pointer cardInfo border-0">
                <LazyLoadImage 
                    src="http://www.thaitour.cz/wp-content/uploads/Beachfront-Swimming-Pool_Bua-Fah-Restaurant-2-198x126.jpg"
                    className="card-img-top" alt="..."/>
                <div className="card-body ">
                    <h5 className="card-title card-link mb-3"> {place.name} <StarRatings
                        rating={place.review}
                        starRatedColor="gold"
                        numberOfStars={5}
                        name='rating'
                        starDimension="15px"
                        starSpacing="0px"
                    /></h5>
                    <p className="card-text">
                        {place.address}</p>
                </div>
                <ul className="list-group list-group-flush border-0" style={{padding: '16px'}}>
                    <li className="list-group-item border-0 d-flex justify-content-between px-0">
                        <div>
                            <UserReviewBadge review={place.review}/>
                        </div>
                        <div style={{paddingTop: '4px'}}>
                            <b className={'text-danger'}>od 7 500 Kč</b>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default SuggestionItem;
