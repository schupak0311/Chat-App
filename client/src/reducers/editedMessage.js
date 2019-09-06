import { fetchMessage } from '../routines/routines';

const initialState = {
    message: null,
    loading: false,
    error: null
};

const editedMessage = (state = initialState, action) => {
    switch (action.type) {
        case fetchMessage.TRIGGER:
            return {
                ...state,
                loading: true
            };
        case fetchMessage.SUCCESS:
            return {
                ...state,
                message: action.payload
            };
        case fetchMessage.FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case fetchMessage.FULFILL:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};

export default editedMessage;