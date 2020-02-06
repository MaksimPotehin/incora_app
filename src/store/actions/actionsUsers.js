import {
    GET_USERS_ERROR,
    RENDER_USERS,
} from "./actionTypes";
import axios from "../../axios/axios-app";


export function getUsers() {
    return async dispatch => {
        try {
            const response = await axios.get('users')
            dispatch(renderUsers(response.data))
        } catch (e) {
            dispatch(getUsersError(e))
        }
    }
}
export function getUsersError(e) {
    return{
        e,
        type: GET_USERS_ERROR
    }
}

export function renderUsers(users) {
    return {
        users,
        type: RENDER_USERS
    }
}





// export function finishCreateQuiz() {
//     return async (dispatch, getState) => {
//         await axios.post('quizes.json', getState().create.quiz);
//         dispatch (resetQuizCreation())
//     }
// }
