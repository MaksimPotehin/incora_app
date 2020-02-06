import {CREATE_NEW_POST, GET_USERS_ERROR, HANDLE_POPUP, RENDER_POSTS} from "./actionTypes";
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
export function createNewPost(newPost) {
    return{
        newPost,
        type: CREATE_NEW_POST
    }
}
export function sendNewPost() {
    return async (dispatch, getState) => {
        await axios.post('posts', getState().newPost);
        console.log('getState', getState().posts.newPost);
        dispatch(handlePopup())
        let postsARR = await axios.get('posts');
        console.log('postsARR', postsARR);
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














