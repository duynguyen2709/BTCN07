import axios from 'axios';
import {ActionConstant} from "../utils/Constants";

function setErrorText(value) {
    return {
        type: ActionConstant.SET_ERROR,
        value
    }
}

function callApiStart() {
    return {
        type: ActionConstant.CALL_API_START
    };
}

function loginSuccess() {
    return {
        type: ActionConstant.LOGIN_SUCCESS
    };
}

export const login = (username, password) => {

    return dispatch => {
        dispatch(callApiStart());

        return axios.post('http://localhost:3001/user/login', {
            username,
            password
        }).then(data => data.data)
            .then(data => {
                if (data.returnCode === 1) {
                    localStorage.setItem("token",data.token);
                    dispatch(loginSuccess());
                } else {
                    dispatch(setErrorText(data.message));
                }
            }).catch(err => dispatch(setErrorText(err)));
    };
};

export const register = (username, password, retypePassword) => {
    return dispatch => {
        if (password !== retypePassword)
            return dispatch(setErrorText('Mật khẩu không khớp. Vui lòng nhập lại'));

        dispatch(callApiStart());

        return axios.post('http://localhost:3001/user/register', {
            username,
            password
        }).then(data => data.data)
            .then(data => {
                dispatch(setErrorText(data.message));
        }).catch(err => dispatch(setErrorText(err)));
    }
};

export const getUsername = () => {
    return (dispatch, getState) => {
        console.log(getState());

        return dispatch(callApiStart());
    }
};

export function logout () {
    localStorage.removeItem("token");
    return {
        type: ActionConstant.LOGOUT
    }
}