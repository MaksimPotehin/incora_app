import {
    GET_USERS_ERROR,
    RENDER_POST,
} from "../actions/actionTypes";

const initialState = {
    post:[],
    comments:[],
};

export default function post (state = initialState, action){
    switch (action.type) {
        case RENDER_POST:
            return {
                ...state, post: action.post, comments: action.comments
            };
        case GET_USERS_ERROR:
            return {
                error: action.e
            };
        default:
            return state
    }
}