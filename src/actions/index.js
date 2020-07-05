export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const createRequestTypes = base => {
    return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`;
        return acc;
    }, {});
};

const action = (type, payload = {}) => {
    return { type, ...payload };
};

export const GET_ALL_SCORE = createRequestTypes('GET_ALL_SCORE');

const formattedAction = (actionType) => ({
   request: () => action(actionType[REQUEST]),
   success: (data) => action(actionType[SUCCESS], data),
   failure: () => action(actionType[FAILURE]),
});

export const getAllScoresAction = formattedAction(GET_ALL_SCORE);

