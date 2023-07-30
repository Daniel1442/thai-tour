const API_CONFIG = {
    GET_PLACE_LIST: () =>  'http://thai-tour.test01.etyka.internal/api/v1/catalog/place/finder',
    GET_PLACE_DETAIL: (placeId: string) =>  `http://thai-tour.test01.etyka.internal/api/v1/catalog/place/${placeId}`,
    // GET_PLACE_PARAMETER: (placeId: string) =>  `http://thai-tour.test01.etyka.internal/api/v1/catalog/parameters/${placeId}`,
    FAVORITE_PLACES: () => 'http://thai-tour.test01.etyka.internal/api/v1/catalog/place/favorite-places'
};
export default API_CONFIG;