import Configuration from '../config/config.js';

var baseUrlGenerator = function () {
    return `${Configuration.BASE_URL}?`;
}

var optionOrDefault = function (value, key) {
    return value ? value : Configuration.QUERY_PARAMS_DEFAULTS[key];
}

var trimAndFix = (str, trimLen=9) => {
    return str.length>13?str.substr(0,trimLen)+"...":str;
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
        let url = `${Configuration.TRACKs_URL}?id=${id}`;
        console.log(url);
        return url;
    }
}

var Utils = {
    getUrl: getUrl,
    get: get,
    getTracksByArtistId: getTracksByArtistId,
    trimAndFix:trimAndFix
};

export default Utils;