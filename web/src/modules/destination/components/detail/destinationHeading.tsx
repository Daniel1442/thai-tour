import React, {useContext} from 'react';
import {PlaceContent, PlaceContext} from "../../../../context/placeContext";
import StarRatings from "react-star-ratings";
import {useLocalStorage} from "../../../../hooks/useLocalStorage";
import HearthIcon from "../../../common/components/heartIcon";


const DestinationHeading: React.FC = () => {
    const {
        place,
        fetchPlace
    } = useContext(PlaceContext) as PlaceContent;

    const [registry, setRegistryStore] = useLocalStorage("LOGIN_DATA", [])

    return (
        <div className={'col-lg-12 desktop'}>
            <div className={'row'}>

                <div className={'col-lg-7 col-sm-10 d-flex justify-content-start'}>
                    <h2 className={'me-2 detailHeding'}>{place && place.name}</h2>
                    <StarRatings
                        rating={place && place.review}
                        starRatedColor="gold"
                        numberOfStars={5}
                        name='rating'
                        starDimension="20px"
                        starSpacing="5px"
                    />
                </div>
                <div className={'col-lg-2 d-flex justify-content-start'}>

                </div>
                    {registry.userId  &&
                        <div className={'col-lg-3 col-sm-2 d-flex justify-content-end'}>
                            <HearthIcon placeId={place.id}/>
                        </div>
                    }
            </div>
            <div className={'col-12 d-flex justify-content-start'}>
                <p>
                    {place && place.address} (<a
                    href={`/map?lat=${place && place.latitude}&long=${place && place.longitude}&name=${place.name}`}>Zobrazit
                    na mapě</a>)</p>
            </div>

        </div>
    )
}
export default DestinationHeading;