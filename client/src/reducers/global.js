import { CHANGE_DARK_MODE, CHANGE_LOGGED_IN } from "./action";


export function globalReducer (state,action)
{
    
    switch(action.type){
        case CHANGE_DARK_MODE:
            return {
                ...state,
                isDarkMode: action.payload
            }
        case CHANGE_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.payload
            }
        default:
            return state;
    }
}