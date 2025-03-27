import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3001/',
});

const requestWithTokenRefresh = async (method, path, data, options = {}) => {
    try {
        return await request({
            method,
            url: path,
            data,

            ...options,
        });
    } catch (error) {
        if (error.response && error.response.status === 403) {
            return await request({
                method,
                url: path,
                data,

                ...options,
            });
        }
        throw error; // Ném lỗi nếu không thể làm mới token
    }
};

export const getMethod = async (path, options = {}) => {
    return requestWithTokenRefresh('get', path, null, options).then(
        (response) => response.data,
    );
};

export const postMethod = async (path, data, options = {}) => {
    return requestWithTokenRefresh('post', path, data, options).then(
        (response) => response.data,
    );
};

export const putMethod = async (path, data, options = {}) => {
    return requestWithTokenRefresh('put', path, data, options).then(
        (response) => response.data,
    );
};

export const deleteMethod = async (path, data, options = {}) => {
    return requestWithTokenRefresh('delete', path, data, options).then(
        (response) => response.data,
    );
};

export default request;
