import axios from "axios";
import API_CONFIG from "../../../lib/api/config";

export const getDetail = (tripId: string) => {
    return axios.get(API_CONFIG.GET_TRIP_DETAIL(tripId))
        .then(response => response.data)
}

export const filterTrip = () => {
    return axios.get(API_CONFIG.GET_TRIP_LIST())
        .then(response => response.data)
}