import axios from "axios";
import API_CONFIG from "../../../lib/api/config";
import {GolfFinderPayload} from "../module";

export const getDetail = (golfId: string) => {
    return axios.get(API_CONFIG.GET_GOLF_DETAIL(golfId))
        .then(response => response.data)
}

export const filterGolf = (payload: GolfFinderPayload) => {
    return axios.post(API_CONFIG.GOLF_LIST(), payload)
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