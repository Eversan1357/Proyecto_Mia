import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/institucion');
} 

export default {getAll};