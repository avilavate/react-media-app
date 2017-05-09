import Configuration from '../config/config.js';

var baseUrlGenerator = function () {
    return `${Configuration.BASE_URL}?`;
}

var optionOrDefault = function (value, key) {
    return value ? value : Configuration.QUERY_PARAMS_DEFAULTS[key];
}

var processQueryStringOptions = function (options = {}) {
    let queryString = '';
    Object.keys(Configuration.QUERY_PARAMS_DEFAULTS).forEach(k => {
        switch (k) {
            case 'Query':
                queryString += `q=${optionOrDefault(options[k], k)}`
                break;
            case 'Item_Type':
                queryString += `&type=${optionOrDefault(options[k], k)}`
                break;
            case 'Market':
                queryString += `&market=${optionOrDefault(options[k], k)}`
                break;
            case 'Limit':
                queryString += `&limit=${optionOrDefault(options[k], k)}`
                break;
            default:
                break;
        }
    });
    return queryString;
}

var getUrl = function (options) {
    let queryString = processQueryStringOptions(options);
    let url = baseUrlGenerator() + queryString;
    return url.trim();
}

var get = function (url) {
    if (url) {
        return fetch(url, { method: 'GET' });
    }
}

var getTracksByArtistId = function (id) {
    if (id) {
        return `${Configuration.TRACKs_URL}${id}/top-tracks`;
    }
}

var Utils = {
    getUrl: getUrl,
    get: get,
    getTracksByArtistId: getTracksByArtistId
};

export default Utils;