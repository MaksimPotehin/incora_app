import {
    GET_USERS_ERROR,
    RENDER_USERS,
} from "../actions/actionTypes";

const initialState = {
    usersList:[],
    error:null,
};

export default function users (state = initialState, action){
    switch (action.type) {
        case RENDER_USERS:
            return {
                ...state, usersList: action.users
            };
        case GET_USERS_ERROR:
            return {
                error: action.e
            };
        default:
            return state
    }
}