import React from 'react';
import StarRatings from "react-star-ratings";
import {useRouter} from "next/router";
import {PlaceDetail} from "../../homepage/models";
import UserReviewBadge from "../../homepage/components/userReviewBadge";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUmbrellaBeach, faWifi} from "@fortawesome/free-solid-svg-icons";
import {LazyLoadImage} from "react-lazy-load-image-component";
import HearthIcon from "../../common/components/heartIcon";

interface ComponentProps {
    place: PlaceDetail
}

const CatalogItemMobile: React.FC<ComponentProps> = ({place}) => {
    const router = useRouter();
    const redirectToDetail = (placeId: string) => {
        router.push(`/destination?id=${placeId}`)
    }

    const findLowestPrice = () => {
        let lowestPrice = Number.MAX_SAFE_INTEGER;
        place && place.rooms && place.rooms.length > 0 ? place.rooms.forEach((room, index) => {
            if (lowestPrice > room.price) {
                lowestPrice = room.price;
            }
        }) : null;

        return lowestPrice
    }
    return (
        <div className={'catalogItem background-white mt-3 rounded-corners'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <LazyLoadImage src={place && place.image}/>
                </div>
                <div className={'col-12 px-4 pb-3'}>
                    <div className={'col-12 mt-3'}>
                        <div className={'d-flex justify-content-between '}>
                            <div>
                                <h5 className="card-title card-link mb-1"> {place.name} <StarRatings
                                    rating={place.review}
                                    starRatedColor="gold"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension="15px"
                                    starSpacing="0px"
                                /></h5>
                            </div>
                            <div>
                                <HearthIcon placeId={place.id}/>
                            </div>
                        </div>
                        <p className="card-text" style={{fontSize: '11px'}}>
                            {place.address}</p>
                    </div>
                    <div className={'col-12 pt-3 text-muted'} style={{fontSize: '11px'}}>
                        {place && place.placeContentsList && place.placeContentsList.map((placeContents) => {
                            if (placeContents.type === 'LOCATION')
                                return <>{placeContents.value}</>
                            else return;
                        })}
                    </div>
                    <div className={'col-12 mt-2'}><p style={{fontSize: '11px'}}>

                        <FontAwesomeIcon icon={faWifi}
                                         style={{
                                             color: '#00FFFF',
                                             padding: "4px 0px 0px 0px"
                                         }}/> Internet/wifi
                        <FontAwesomeIcon icon={faUmbrellaBeach}
                                         style={{
                                             color: '#00FFFF',
                                             marginLeft: '16px',
                                             padding: "4px 0px 0px 0px"
                                         }}/> Pláž
                    </p>
                    </div>
                    <div className={'row mt-5 d-flex'}>
                        <div className={'col-12 d-flex justify-content-start'}>
                            <div className={'mt-2 me-5'}>
                                <UserReviewBadge review={place.review}/>
                            </div>
                            <b className={'font-red ms-5 mt-2'}> od {findLowestPrice} Kč za os.</b>
                            <button className={'btn btn-sm background-yellow rounded-corners font-white ms-2'} style={{
                                width: '70px',
                                height: '30px',
                                marginTop: '4px'
                            }}
                                    onClick={() => redirectToDetail(place && place.id)}>Náhled
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CatalogItemMobile;