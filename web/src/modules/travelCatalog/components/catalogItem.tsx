import React from 'react';
import {useRouter} from "next/router";
import {GolfDetail} from "../../homepage/models";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faPerson} from "@fortawesome/free-solid-svg-icons";
import {LazyLoadImage} from "react-lazy-load-image-component";

interface ComponentProps {
    trip: GolfDetail
}

const CatalogItem: React.FC<ComponentProps> = ({trip}) => {
    const router = useRouter();
    const redirectToDetail = (tripId: string) => {
        router.push(`/trip?id=${tripId}`)
    }

    return (
        <div className={'catalogItem background-white mt-3 rounded-corners cursor-pointer'}>
            <div className={'row'}>
                <div className={'col-4'}>
                    <LazyLoadImage src={trip && trip.image}/>
                </div>
                <div className={'col-8'}>
                    <div className={'col-12 mt-3'}>
                        <div className={'d-flex justify-content-between '}>
                            <div>

                                <h5 className="card-title card-link mb-1"> {trip.name}
                                </h5>
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
                    <div className={'row mt-3 d-flex'}>
                        <div className={'col-6 d-flex justify-content-start mt-2'}>
                        </div>
                        <div className={'col-6 d-flex justify-content-end'}>
                            <b className={'font-red me-4 mt-2'}> {trip.price} Kč za os.</b>
                            <button className={'btn btn-sm background-yellow rounded-corners font-white me-3 ms-3'}
                                    style={{
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
export default CatalogItem;