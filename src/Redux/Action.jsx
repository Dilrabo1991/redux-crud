import { DELETE_USER, FEIL_REQUEST, GET_USER_LIST, MAKE_REQUEST } from "./AxtionType"
import axios from "axios"

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    }
}
export const feilRequest = (err) => {
    return {
        type: FEIL_REQUEST,
        payload: err
    }
}
export const getUserList = (data) => {
    return {
        type: GET_USER_LIST,
        payload: data
    }
}
export const deleteUser = () => {
    return {
        type: DELETE_USER
    }
}

export const FetchUserList = () => {
    return (dispatch) => {
        dispatch(makeRequest());

        axios.get('http://localhost:8000/user').then(res => {
            const userlist = res.data;
            dispatch(getUserList(userlist));
        }).catch(err => {
            dispatch(feilRequest(err.message))
        })

    }
}
export const Removeuser = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());

        axios.delete('http://localhost:8000/user' + code).then(res => {
            dispatch(deleteUser());

        }).catch(err => {
            dispatch(feilRequest(err.message))
        })

    }
}