import axios from "axios";
import API_CONFIG from "../../../lib/api/config";
import {TripFinderPayload} from "../../homepage/models";

export const getDetail = (tripId: string) => {
    return axios.get(API_CONFIG.GET_TRIP_DETAIL(tripId))
        .then(response => response.data)
}

export const filterTrip = (payload: TripFinderPayload) => {
    return axios.post(API_CONFIG.TRIP_LIST(), payload)
        .then(response => response.data)
}

export const cityList = () => {
    return axios.get(API_CONFIG.GET_CITIES_PARAMETER())
        .then(response => response.data)
}

export const getFilterParameters = () => {
    return axios.get(API_CONFIG.GET_PARAMETER())
        .then(response => response.data)
}