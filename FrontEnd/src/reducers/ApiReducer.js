import { ActionConstant } from '../utils/Constants';

const initialState = {
    error: ''
};

export default function apiReducer(state = initialState, action){

    switch (action.type) {
        case ActionConstant.SET_ERROR:
            return {
                ...state,
                error: action.value
            };

        default :
            return state;
    }
}