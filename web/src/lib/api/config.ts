const API_CONFIG = {
    GET_PLACE_LIST: () =>  'https://320wsd.etyka.cz/api/v1/catalog/place/finder',
    GET_PLACE_DETAIL: (placeId: string) =>  `https://320wsd.etyka.cz/api/v1/catalog/place/${placeId}`,
    GET_PLACE_RESERVATION: () =>  `https://320wsd.etyka.cz/api/v1/catalog/place/resevation`,
    FAVORITE_PLACES: () => 'https://320wsd.etyka.cz/api/v1/catalog/place/favorite-places',

    GET_PLACE_PARAMETER: () =>  `https://320wsd.etyka.cz/api/v1/catalog/parameters/list`,

    GET_TRIP_LIST: () =>  'https://320wsd.etyka.cz/api/v1/catalog/trip/finder',
    GET_TRIP_DETAIL: (tripId: string) =>  `https://320wsd.etyka.cz/api/v1/catalog/trip/${tripId}`,

    GET_BLOG_LIST: () => 'https://320wsd.etyka.cz/api/v1/catalog/article/finder',
    GET_BLOG_DETAIL: (blogId: string) => `https://320wsd.etyka.cz/api/v1/catalog/article/${blogId}`
};
export default API_CONFIG;