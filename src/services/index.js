import axios from "axios";
import {getAllScoresAction} from "../actions/index";

export const CORS_BYPASS = "https://cors-anywhere.herokuapp.com/";
export const GET_ALL_SCORES_API = "http://assessments.reliscore.com/static/misc/cric_scores.json";

export const getAllScoresService = () => {
    return (dispatch) => {
        dispatch(getAllScoresAction.request());
        axios.get(CORS_BYPASS + GET_ALL_SCORES_API)
            .then(response =>
                dispatch(getAllScoresAction.success({data: response.data}))
            )
            .catch(e => dispatch(getAllScoresAction.failure(e)));
    }
}
