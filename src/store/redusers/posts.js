import {
    GET_USERS_ERROR, HANDLE_POPUP, RENDER_POSTS,
} from "../actions/actionTypes";

const initialState = {
    posts:[],
    isPopupOpen:false
};

export default function posts (state = initialState, action){
    switch (action.type) {
        case RENDER_POSTS:
            return {
                ...state, posts: action.posts
            };
        case GET_USERS_ERROR:
            return {
                error: action.e
            };
        case HANDLE_POPUP:
            return {
                ...state, isPopupOpen: !state.isPopupOpen
            };
        default:
            return state
    }
}