import axios from 'axios';
const URLBASE = 'https://632e5544b37236d2ebe8b7d7.mockapi.io/api/test/';
export const Api = axios.create({baseURL: URLBASE});