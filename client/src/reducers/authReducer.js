import { auth } from '../routines/routines';

const initialState = {
    data: null,
    loading: false,
    error: null
};

const loginData = (state = initialState, action) => {
    switch(action.type) {
        case auth.TRIGGER:
            return {
                loginData: {

                    ...state,
                    loading: true
                }
            };
        case auth.SUCCESS:
            return {
                ...state,
                data: action.payload
            };
        case auth.FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default loginData;