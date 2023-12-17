import axios from "axios";
import API_CONFIG from "../../../lib/api/config";
import {PlaceFinderPayload, ReservationPayload} from "../models";

export const getFavoritePlaces = () => {
    return axios.get(API_CONFIG.FAVORITE_PLACES())
        .then(response => response.data)
}

export const getDetail = (placeId: string) => {
    return axios.get(API_CONFIG.GET_PLACE_DETAIL(placeId))
        .then(response => response.data)
}

export const filterPlace = (payload: PlaceFinderPayload) => {
    return axios.post(API_CONFIG.GET_PLACE_LIST(), payload)
        .then(response => response.data)
}


export const getFilterParameters = () => {
    return axios.get(API_CONFIG.GET_PLACE_PARAMETER())
        .then(response => response.data)
}

    export const sendReservation = (payload: ReservationPayload) => {
        return axios.post(API_CONFIG.GET_PLACE_RESERVATION(), payload)
            .then(response => response.data)
}