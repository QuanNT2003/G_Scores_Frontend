import * as request from '~/utils/request';

export const getScore = async (id) => {
    try {
        const res = await request.getMethod('api/scores/' + id);
        console.log(res);
        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};
