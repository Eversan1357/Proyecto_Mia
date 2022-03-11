import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/beneficiario');
} 

export default {getAll};