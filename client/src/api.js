const LIVE_API_URL = "/.netlify/functions/api";
const DEV_API_URL = "http://localhost:9000/.netlify/functions/api";

export const API_URL = DEV_API_URL;

export const DETAILS_API = (type, details) => `https://api.chikn.farm/api/${type}/details/${details}`;

export const SEARCH_API = (type, search) => `https://api.chikn.farm/api/${type}/metadata/${search}`;

export const REPORT_API = (type) => `https://api.chikn.farm/api/reports/${type}`;

// export const API_URL = (endpoint, type, input) => `https://api.chikn.farm/api/${endpoint}}/${type}/${input}`;
