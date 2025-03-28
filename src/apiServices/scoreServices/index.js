import * as request from '~/utils/request';

export const getScore = async (id) => {
    try {
        const res = await request.getMethod('scores/' + id);
        // console.log(res);
        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getReportScore = async (subject) => {
    try {
        const res = await request.getMethod('scores/report/' + subject);
        // console.log(res);
        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getTopGroupA = async () => {
    try {
        const res = await request.getMethod('scores/report/top_group_a');
        // console.log(res);
        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getGreaterThan5 = async (subject) => {
    try {
        const res = await request.getMethod(
            'scores/get_greater_than_5/' + subject,
        );
        // console.log(res);
        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getNumberExamType = async () => {
    try {
        const res = await request.getMethod('scores/exam_type');
        // console.log(res);
        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};
