import React, {useContext, useEffect, useState} from 'react';
import {PlaceContent, PlaceContext} from "../../../context/placeContext";
import StarRatings from "react-star-ratings";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {isFavoritePlaces, toggleFavorite} from "../../homepage/action";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import {FavoritePlacePayload} from "../../homepage/models";


const DestinationHeadingMobile: React.FC = () => {
    const {
        place,
        fetchPlace
    } = useContext(PlaceContext) as PlaceContent;

    const [registry, setRegistryStore] = useLocalStorage("LOGIN_DATA", [])
    const [payload, setPayload] = useState({} as FavoritePlacePayload)
    const [icon, setIcon] = useState<boolean>(false)


    const toggleFavoritePlace = () => {
        setPayload({customerId: registry.userId, resourceId: place && place.id, type: "PLACE"})
        toggleFavorite(payload).then(response => {
            isFavoritePlaces(payload).then(response => {
                if (response.result && response.result.isActive) {
                    setIcon(true)
                } else {
                    setIcon(false);
                }
            })
        }).catch((error) => {
            console.error(error)
        })
    }

    useEffect(() => {
        if (registry.userId) {
            setPayload({customerId: registry.userId, resourceId: place && place.id, type: "PLACE"})
            isFavoritePlaces(payload).then(response => {
                if (response.result && response.result.isActive) {
                        setIcon(true)
                } else {
                    setIcon(false);
                }
            })
        } else {
            setIcon(false);
        }
    }, [registry]);

    return (
        <div className={'col-lg-12 mobile'}>
            <div className={'row'}>
                <div className={'col-12 d-flex justify-content-start'}>
                    <h2 className={'me-2 detailHeding'}>{place && place.name}</h2>
                    <FontAwesomeIcon icon={faHeart}
                                     style={{
                                         color: '#808080',
                                         cursor: 'pointer',
                                         marginTop: '8px',
                                         padding: "0px 16px 0px 0px"
                                     }}/>
                </div>

                <div className={'col-12 d-flex justify-content-star mb-2'}>
                     <StarRatings
                        rating={place && place.review}
                        starRatedColor="gold"
                        numberOfStars={5}
                        name='rating'
                        starDimension="20px"
                        starSpacing="5px"
                        />
                </div>
            </div>
            <div className={'col-12 d-flex justify-content-start'}>
                <p>
                    {place && place.address} (<a href={'#'}>Zobrazit na mapě</a>)
                </p>
            </div>

        </div>
    )
}
export default DestinationHeadingMobile;