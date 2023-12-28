import axios from "axios";
import API_CONFIG from "../../../lib/api/config";
import {LoginPayload, RegisterPayload} from "../model";

export const logIn = (payload: LoginPayload) => {
    return axios.post(API_CONFIG.LOG_IN(), payload)
        .then(response => response.data)
}

export const register = (payload: RegisterPayload) => {
    return axios.post(API_CONFIG.REGISTER(), payload)
        .then(response => response.data)
}