import axios from "axios";
import API_CONFIG from "../../../lib/api/config";
import {PlaceFinderPayload} from "../../homepage/models";
import {ArticleFinderPayload} from "../models";

export const getDetailBlog = (placeId: string) => {
    return axios.get(API_CONFIG.GET_BLOG_DETAIL(placeId))
        .then(response => response.data)
}

export const filterBlog = (payload: ArticleFinderPayload) => {
    return axios.post(API_CONFIG.GET_BLOG_LIST(), payload)
        .then(response => response.data)
}