import _get from "lodash/get";
import {test_score_data} from "../constants/test_score_data";

export const getAllScores = (state, isTest) => isTest ? test_score_data : _get(state, "allScoresData.data", []);
export const isScoresDataFetching = state => _get(state, "allScoresData.isFetching", false);
