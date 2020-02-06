import {GET_USERS_ERROR, RENDER_POST} from "./actionTypes";
import axios from "../../axios/axios-app";


export function getFullInfo(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`posts/${id}`)
            const responseComments = await axios.get(`comments?postId=${id}`)

            console.log('response', response)
            dispatch(renderPost(response.data, responseComments.data))
        }
        catch (e) {
            dispatch(getPostsError(e))
        }
    }
}
export function deletedPost(id) {
    return async dispatch => {
        try {
            await axios.delete(`posts/${id}`)
            const response = await axios.get('posts')

            console.log('AFTER_DELETE', response)
        }
        catch (e) {
            dispatch(getPostsError(e))
        }
    }
}
export function editPost(id) {
    return async dispatch => {
        try {
            let newPost = "Lorem ipsum dolor sit amet."
            await axios.put(`posts/${id}`, newPost)
        }
        catch (e) {
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

export function renderPost(post, comments) {
    return {
        post,
        comments,
        type: RENDER_POST
    }
}














