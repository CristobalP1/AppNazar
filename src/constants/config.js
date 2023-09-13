import Constants from "expo-constants";
import base64 from 'base-64';

export const API_URL = Constants.expoConfig.extra.apiUrl;
export const USER_API = Constants.expoConfig.extra.apiUser;
export const USER_PASS = Constants.expoConfig.extra.apiPass;

export const API_URL_TEST = API_URL;
export const USER_API_TEST = USER_API;
export const USER_PASS_TEST = USER_PASS;

export const base64Credentials = base64.encode(`${USER_API_TEST}:${USER_PASS_TEST}`);
