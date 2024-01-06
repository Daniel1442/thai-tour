const API_CONFIG = {
    GET_PLACE_LIST: () =>  'http://164.90.210.212:8080/api/v1/catalog/place/finder',
    GET_PLACE_DETAIL: (placeId: string) =>  `http://164.90.210.212:8080/api/v1/catalog/place/${placeId}`,
    GET_PLACE_RESERVATION: () =>  `http://164.90.210.212:8080/api/v1/catalog/place/resevation`,
    FAVORITE_PLACES: () => 'http://164.90.210.212:8080/api/v1/catalog/place/favorite-places',
    TOGGLE_FAVORITE: () => 'http://164.90.210.212:8080/api/v1/catalog/place/toggle-favorite',
    CUSTOMER_FAVORITE_PLACE: () =>  'http://164.90.210.212:8080/api/v1/catalog/place/favorite',
    IS_PLACE_FAVORITE_BY_CUSTOMER: () =>  'http://164.90.210.212:8080/api/v1/catalog/place//is-customer-favorite',

    GET_PLACE_PARAMETER: () =>  `http://164.90.210.212:8080/api/v1/catalog/parameters/list`,

    GET_PARAMETER: () =>  `http://164.90.210.212:8080/api/v1/catalog/parameters/trip/list`,

    GET_CITIES_PARAMETER: () =>  `http://164.90.210.212:8080/api/v1/catalog/parameters/list-cities`,

    TRIP_LIST: () =>  'http://164.90.210.212:8080/api/v1/catalog/trip/finder',
    GET_TRIP_DETAIL: (tripId: string) =>  `http://164.90.210.212:8080/api/v1/catalog/trip/${tripId}`,

    GOLF_LIST: () =>  'http://164.90.210.212:8080/api/v1/catalog/golf/finder',
    GET_GOLF_DETAIL: (golfId: string) =>  `http://164.90.210.212:8080/api/v1/catalog/golf/${golfId}`,

    GET_BLOG_LIST: () => 'http://164.90.210.212:8080/api/v1/catalog/article/finder',
    GET_BLOG_DETAIL: (blogId: string) => `http://164.90.210.212:8080/api/v1/catalog/article/${blogId}`,

    LOG_IN: ()=> 'http://164.90.210.212:8080/api/v1/customer/login',
    REGISTER: ()=> 'http://164.90.210.212:8080/api/v1/customer/register'


};
export default API_CONFIG;