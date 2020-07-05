import {combineReducers} from 'redux';
import {REQUEST, GET_ALL_SCORE, SUCCESS, FAILURE} from '../actions'
import {formatServerData} from "../utils/helper";

const initialState = {
    isFetching: false,
    data: [],
};

const allScoresData = (state = {...initialState}, action) => {
    switch (action.type) {
        case GET_ALL_SCORE[REQUEST]:
            return {...state, isFetching: true};

        case GET_ALL_SCORE[SUCCESS]:
            return {
                data: formatServerData(action.data), isFetching: false
            };

        case GET_ALL_SCORE[FAILURE]:
            return {...state, isFetching: false};

        default:
            return state;

    }

};

const rootReducer = combineReducers({
    allScoresData
});

export default rootReducer;
