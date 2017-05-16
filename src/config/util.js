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
    // let queryString = processQueryStringOptions(options);
    // let url = baseUrlGenerator() + queryString;
    return `${Configuration.BASE_URL}?artist=${options.Query}`;
}

var get = function (url) {
    if (url) {
        return fetch(url, { method: 'GET' });
    }
}

var getTracksByArtistId = function (id, country = 'us') {
    if (id) {
        //ToDo: for testing setting ID=4qjTbJHr1i0O0ViKgFgZqN
        let url = `${Configuration.TRACKs_URL}?id=4qjTbJHr1i0O0ViKgFgZqN`;
        //To Do: needs changes in openshift api
        //`${Configuration.TRACKs_URL}${id}/top-tracks?country=${country}`;
        console.log(url);
        return url;
    }
}

var Utils = {
    getUrl: getUrl,
    get: get,
    getTracksByArtistId: getTracksByArtistId
};

export default Utils;