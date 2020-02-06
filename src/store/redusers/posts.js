import {
    CREATE_NEW_POST,
    GET_USERS_ERROR, HANDLE_POPUP, RENDER_POSTS,
} from "../actions/actionTypes";

const initialState = {
    posts:[],
    isPopupOpen:false,
    newPost:'q'
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
        case CREATE_NEW_POST:
            return {
                ...state, newPost: action.newPost
            };
        default:
            return state
    }
}