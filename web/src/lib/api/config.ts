const API_CONFIG = {
    GET_PLACE_LIST: () =>  'http://164.90.210.212:8080/api/v1/catalog/place/finder',
    GET_PLACE_DETAIL: (placeId: string) =>  `http://164.90.210.212:8080/api/v1/catalog/place/${placeId}`,
    // GET_PLACE_PARAMETER: (placeId: string) =>  `http://164.90.210.212:8080/api/v1/catalog/parameters/${placeId}`,
    FAVORITE_PLACES: () => 'http://164.90.210.212:8080/api/v1/catalog/place/favorite-places'
};
export default API_CONFIG;