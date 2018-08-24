import { 
    LOG_IN,
    LOG_OUT
} from '../../actions';

const initialState = {
    state: 'INITIAL',
    userData: null
};

export function authReducer(state = initialState, action) {
    switch(action.type) {
        case LOG_IN: 
            return {
                ...state,
                userData: action.payload
            };
        
        case LOG_OUT: 
            return {
                ...state,
                userData: null
            };

        default: 
            return state;
    }
}