import { Action } from '@ngrx/store';
import { Users } from '../users/user.model';


export enum User {
    GET_USERS = "[Users]GetUser",
    GET_USERS_SUCCESS = "[Users]UserSuccess",
    GET_USERS_FAIL = "[Users]UserFail"
}
export class getUsers implements Action {
    readonly type = User.GET_USERS;
}
export class getUsersSuccess implements Action {
    readonly type = User.GET_USERS_SUCCESS;
    constructor(public payload: Users[]) {
        // console.log("payload in action", payload)
    }
}
export class userFail implements Action {
    readonly type = User.GET_USERS_FAIL;
    constructor(public error) {
        console.log(error.error.type);
        alert("something went wrong! Please check your connection")
    }
}
export type UserActions = getUsers | getUsersSuccess
    ;
