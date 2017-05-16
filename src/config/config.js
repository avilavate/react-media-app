const BASE_URL = 'https://api.spotify.com/v1/search';
const TRACKs_URL = 'https://media-api-media-api.1d35.starter-us-east-1.openshiftapps.com//tracks';
const QUERY_PARAMS_DEFAULTS = {
    Query: 'beatles',
    Item_Type: 'artist',
    Market: 'US',
    Limit: '10'
};
var Configuration = {
    BASE_URL: BASE_URL,
    QUERY_PARAMS_DEFAULTS: QUERY_PARAMS_DEFAULTS,
    TRACKs_URL: TRACKs_URL
};
export default Configuration;
