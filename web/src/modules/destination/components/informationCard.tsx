import React, {useContext, useEffect} from 'react';
import StarRatings from 'react-star-ratings';
import {PlaceContent, PlaceContext} from "../../../context/placeContext";

const InformationCard: React.FC = () => {
    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);
    const {
        place,
        fetchPlace
    } = useContext(PlaceContext) as PlaceContent;

    return (
        <div className={'informationCard p-2 bg-white'} style={{borderRadius: '4px'}}>
            {/*<div className={'row my-3 d-flex justify-content-center image-row'}>*/}
            {/*    {place.placeImageListList && Object.entries(place.placeImageListList).map(([id, image], index) => {*/}
            {/*        return(*/}
            {/*            <div className={`col-2 me-3 ${index === 0 ? 'p-0' : ''}`}>*/}
            {/*                <img*/}
            {/*                    src={image.target}*/}
            {/*                    className="rounded" alt="..."/>*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</div>*/}
            <div className={'row my-lg-5 mx-lg-3 m-sm-0'}>
                {width <= 760 ?
                    <>
                        <div className={'col-12 d-flex justify-content-start'}>
                            <h1 className={'me-2 detailHeding'}>{place && place.name}</h1>
                        </div>
                        <div className={'col-12 d-flex justify-content-start mb-2'}>
                            <StarRatings
                                rating={place &&place.review}
                                starRatedColor="gold"
                                numberOfStars={5}
                                name='rating'
                                starDimension="20px"
                                starSpacing="5px"
                            />
                        </div>
                        <div className={'col-12 d-flex justify-content-start'}>
                            <p>
                                {place &&place.address}</p>
                        </div>
                    </> :
                    <>
                        <div className={'col-12 d-flex justify-content-start'}>
                            <h1 className={'me-2'}>{place && place.name}</h1>
                            <StarRatings
                                rating={place &&place.review}
                                starRatedColor="gold"
                                numberOfStars={5}
                                name='rating'
                                starDimension="20px"
                                starSpacing="5px"
                            />
                        </div>
                        <div className={'col-12 d-flex justify-content-start'}>
                            <p>
                                {place &&place.address}</p>

                        </div>
                    </>
                }
            </div>
        </div>
    )
}
export default InformationCard;