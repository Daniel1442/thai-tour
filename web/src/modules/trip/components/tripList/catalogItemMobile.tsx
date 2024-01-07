import React from 'react';
import {useRouter} from "next/router";
import {GolfDetail} from "../../../homepage/models";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faPerson} from "@fortawesome/free-solid-svg-icons";
import {LazyLoadImage} from "react-lazy-load-image-component";
import HearthIcon from "../../../common/components/heartIcon";

interface ComponentProps {
    trip: GolfDetail
}

const CatalogItemMobile: React.FC<ComponentProps> = ({trip}) => {
    const router = useRouter();
    const redirectToDetail = (placeId: string) => {
        router.push(`/destination?id=${placeId}`)
    }

    return (
        <div className={'catalogItem background-white mt-3 rounded-corners'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <LazyLoadImage src={trip && trip.image}/>
                </div>
                <div className={'col-12 px-4 pb-3'}>
                    <div className={'col-12 mt-3'}>
                        <div className={'d-flex justify-content-between '}>
                            <div>
                                <h5 className="card-title card-link mb-1"> {trip.name} </h5>
                            </div>
                            <div>
                                <HearthIcon placeId={trip.id}/>
                            </div>
                        </div>
                        <p className="card-text" style={{fontSize: '11px'}}>
                            {trip.location}</p>
                    </div>
                    <div className={'col-12 pt-3 text-muted'} style={{fontSize: '11px'}}>
                        {trip && trip.tripContentsList && trip.tripContentsList.map((tripContents) => {
                            if (tripContents.type === 'NOTE')
                                return <>{tripContents.value}</>
                            else return;
                        })}
                    </div>
                    <div className={'col-12 mt-2'}><p style={{fontSize: '11px'}}>

                        <FontAwesomeIcon icon={faPerson}
                                         style={{
                                             color: '#00FFFF',
                                             marginRight: '8px',
                                             padding: "4px 0px 0px 0px"
                                         }}/>{trip.capacity}
                        <FontAwesomeIcon icon={faClock}
                                         style={{
                                             color: '#00FFFF',
                                             marginLeft: '16px',
                                             padding: "4px 0px 0px 0px"
                                         }}/> {trip.length}
                    </p>
                    </div>
                    <div className={'row mt-5 d-flex'}>
                        <div className={'col-12 d-flex justify-content-start'}>
                            <div className={'mt-2 me-5'}>

                            </div>
                            <b className={'font-red ms-5 mt-2'}> od {trip.price} Kč za os.</b>
                            <button className={'btn btn-sm background-yellow rounded-corners font-white ms-2'} style={{
                                width: '70px',
                                height: '30px',
                                marginTop: '4px'
                            }}
                                    onClick={() => redirectToDetail(trip && trip.id)}>Náhled
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CatalogItemMobile;