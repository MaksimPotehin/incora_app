import {GET_USERS_ERROR, HANDLE_POPUP, RENDER_POSTS} from "./actionTypes";
import axios from "../../axios/axios-app";


export function getPosts(id) {
    return async dispatch => {
        try {
            const response = await axios.get(`posts?userId=${id}`)
            dispatch(renderPosts(response.data))
        } catch (e) {
            dispatch(getPostsError(e))
        }
    }
}
export function getPostsError(e) {
    return{
        e,
        type: GET_USERS_ERROR
    }
}

export function renderPosts(posts) {
    return {
        posts,
        type: RENDER_POSTS
    }
}
export function handlePopup() {
    return {
        type: HANDLE_POPUP
    }
}














