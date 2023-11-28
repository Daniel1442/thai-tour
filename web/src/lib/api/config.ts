const API_CONFIG = {
    GET_PLACE_LIST: () =>  'http://164.90.210.212:8080/api/v1/catalog/place/finder',
    GET_PLACE_DETAIL: (placeId: string) =>  `http://164.90.210.212:8080/api/v1/catalog/place/${placeId}`,
    FAVORITE_PLACES: () => 'http://164.90.210.212:8080/api/v1/catalog/place/favorite-places',

    GET_PLACE_PARAMETER: () =>  `http://164.90.210.212:8080/api/v1/catalog/parameters/list`,

    GET_TRIP_LIST: () =>  'http://164.90.210.212:8080/api/v1/catalog/trip/finder',
    GET_TRIP_DETAIL: (tripId: string) =>  `http://164.90.210.212:8080/api/v1/catalog/trip/${tripId}`,

    GET_BLOG_LIST: () => 'http://164.90.210.212:8080/api/v1/catalog/article/finder',
    GET_BLOG_DETAIL: (blogId: string) => `http://164.90.210.212:8080/api/v1/catalog/article/${blogId}`
};
export default API_CONFIG;