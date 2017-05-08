const BASE_URL = 'https://api.spotify.com/v1/search';
const QUERY_PARAMS_DEFAULTS = {
    Query: 'beatles',
    Item_Type: 'artist',
    Market: 'US',
    Limit: '10'
};
var Configuration = {
    BASE_URL: BASE_URL,
    QUERY_PARAMS_DEFAULTS: QUERY_PARAMS_DEFAULTS
};
export default Configuration;
