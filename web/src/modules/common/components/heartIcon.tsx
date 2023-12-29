import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import {isFavoritePlaces, toggleFavorite} from "../../homepage/action";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";


interface HearthIconProps {
    placeId: string
}

const HearthIcon: React.FC<HearthIconProps> = ({placeId}) => {
    const router = useRouter();

    const redirectToHomepage = () => {
        router.push('/')
    }
    const [registry, setRegistryStore] = useLocalStorage("LOGIN_DATA", [])
    const [icon, setIcon] = useState<boolean>(false)


    const toggleFavoritePlace = () => {

        toggleFavorite({customerId: registry.userId, resourceId: placeId, type: "PLACE"}).then(response => {
            isFavoritePlaces({customerId: registry.userId, resourceId: placeId, type: "PLACE"}).then(response => {
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
            isFavoritePlaces({customerId: registry.userId, resourceId: placeId, type: "PLACE"}).then(response => {
                if (response.result && response.result.isActive) {
                    setIcon(true)
                } else {
                    setIcon(false);
                }
            })
        } else {
            setIcon(false);
        }
    }, [registry, placeId]);
    return (
        <FontAwesomeIcon icon={faHeart}
                         onClick={() => toggleFavoritePlace()}
                         style={{
                             color: icon ? '#ED254E' : '#808080',
                             cursor: 'pointer',
                             padding: "0px 16px 0px 0px"
                         }}/>
    )
}
export default HearthIcon;
