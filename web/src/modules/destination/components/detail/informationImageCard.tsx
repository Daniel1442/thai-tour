import React, {useContext} from 'react';
import {PlaceContent, PlaceContext} from "../../../../context/placeContext";
import ImageGallery from "react-image-gallery";
import {TripContent, TripContext} from "../../../../context/tripContext";

const InformationImageCard: React.FC = () => {
    const {
        place,
        fetchPlace
    } = useContext(PlaceContext) as PlaceContent;

    const {
        trip,
        fetchTrip
    } = useContext(TripContext) as TripContent;



    return (
        <div className={'informationImageCard'}>
            <div className={'row my-3'}>
                <div className={'col-12'}>
                    <ImageGallery items={place && place.placeImageListList &&  place.placeImageListList.length > 0 ? place.placeImageListList: trip && trip.tripImageListList && trip.tripImageListList.length > 0 ? trip.tripImageListList : []} showNav={true} showThumbnails={true} infinite={true}
                                  showFullscreenButton={true} showPlayButton={false}/>
                </div>
            </div>

        </div>
    )
}
export default InformationImageCard;