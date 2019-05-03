import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from "@ngrx/store"
import { UserService } from '../services/user.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as userActions from "../actions/users.action";
import { Observable, of } from 'rxjs';
import { Users } from '../users/user.model';

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions,
        private userService: UserService) {
    }
    @Effect()
    getUsers$:Observable<Action> = this.actions$.pipe(
        ofType<userActions.getUsers>(
            userActions.User.GET_USERS
        ),
        mergeMap(() => 
            this.userService.getUsers().pipe(
                map((user: Users[]) => {
                    // console.log("user in effects", user)
                    return new userActions.getUsersSuccess(user)
                }),
                catchError((error)=> 
                of(new userActions.userFail(error)))
                )
        ))

}
