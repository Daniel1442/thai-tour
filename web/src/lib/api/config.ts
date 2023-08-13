const API_CONFIG = {
    GET_PLACE_LIST: () =>  'http://localhost:8080/api/v1/catalog/place/finder',
    GET_PLACE_DETAIL: (placeId: string) =>  `http://localhost:8080/api/v1/catalog/place/${placeId}`,
    // GET_PLACE_PARAMETER: (placeId: string) =>  `http://localhost:8080/api/v1/catalog/parameters/${placeId}`,
    FAVORITE_PLACES: () => 'http://localhost:8080/api/v1/catalog/place/favorite-places'
};
export default API_CONFIG;