const API_CONFIG = {
    GET_PLACE_LIST: () =>  'https://320wsd.etyka.cz/api/v1/catalog/place/finder',
    GET_PLACE_DETAIL: (placeId: string) =>  `https://320wsd.etyka.cz/api/v1/catalog/place/${placeId}`,
    // GET_PLACE_PARAMETER: (placeId: string) =>  `https://320wsd.etyka.cz/api/v1/catalog/parameters/${placeId}`,
    FAVORITE_PLACES: () => 'https://320wsd.etyka.cz/api/v1/catalog/place/favorite-places',
    GET_BLOG_LIST: () => 'https://320wsd.etyka.cz/api/v1/catalog/article/finder',
    GET_BLOG_DETAIL: (blogId: string) => `https://320wsd.etyka.cz/api/v1/catalog/article/${blogId}`
};
export default API_CONFIG;