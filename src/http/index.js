import { generate as id } from 'shortid';

const asyncAwaitTime = 1500;

export const get = (url, cb) => {
    setTimeout(() => {
        cb(id());
    }, asyncAwaitTime);
};
