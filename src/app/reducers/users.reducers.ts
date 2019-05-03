import * as userActions from "../actions/users.action";
import { AppState } from '../app.state';

export const initialState: AppState = {
    userData: [],
    apiCalling: false
}
export function displayUsers(state = initialState, action) {
    switch (action.type) {
        case userActions.User.GET_USERS:
            return { ...state, apiCalling: true }
        case userActions.User.GET_USERS_SUCCESS:
            return { ...state, userData: action.payload, apiCalling: false }
        case userActions.User.GET_USERS_FAIL:
            return { apiCalling: false }
    }
}