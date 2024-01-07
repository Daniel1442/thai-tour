import React from 'react';
import {useRouter} from "next/router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faFlag} from "@fortawesome/free-solid-svg-icons";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {GolfDetail} from "../../module";

interface ComponentProps {
    golf: GolfDetail
}

const CatalogItem: React.FC<ComponentProps> = ({golf}) => {
    const router = useRouter();
    const redirectToDetail = (golfId: string) => {
        router.push(`/golf?id=${golfId}`)
    }

    return (
        <div className={'catalogItem background-white mt-3 rounded-corners cursor-pointer'}>
            <div className={'row'}>
                <div className={'col-4'}>
                    <LazyLoadImage src={golf && golf.image}/>
                </div>
                <div className={'col-8'}>
                    <div className={'col-12 mt-3'}>
                        <div className={'d-flex justify-content-between '}>
                            <div>

                                <h5 className="card-title card-link mb-1"> {golf.name}
                                </h5>
                            </div>
                        </div>
                        <p className="card-text" style={{fontSize: '11px'}}>
                            {golf.location}</p>
                    </div>
                    <div className={'col-12 pt-3 text-muted'} style={{fontSize: '11px'}}>
                        <>{golf.label}</>
                    </div>
                    <div className={'col-12 mt-2'}><p style={{fontSize: '11px'}}>

                        <FontAwesomeIcon icon={faFlag}
                                         style={{
                                             color: '#00FFFF',
                                             marginRight: '8px',
                                             padding: "4px 0px 0px 0px"
                                         }}/>{golf.holes}
                        <FontAwesomeIcon icon={faClock}
                                         style={{
                                             color: '#00FFFF',
                                             marginLeft: '16px',
                                             padding: "4px 0px 0px 0px"
                                         }}/> {golf.opened}
                    </p>
                    </div>
                    <div className={'row mt-3 d-flex'}>
                        <div className={'col-6 d-flex justify-content-start mt-2'}>
                        </div>
                        <div className={'col-6 d-flex justify-content-end'}>
                            <b className={'font-red me-4 mt-2'}> {golf.price} Kč za os.</b>
                            <button className={'btn btn-sm background-yellow rounded-corners font-white me-3 ms-3'}
                                    style={{
                                        width: '70px',
                                        height: '30px',
                                        marginTop: '4px'
                                    }}
                                    onClick={() => redirectToDetail(golf && golf.id)}>Náhled
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CatalogItem;