import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/estudiante');
} 

export default {getAll};