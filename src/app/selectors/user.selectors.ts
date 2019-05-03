import { AppState } from '../app.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Users } from '../users/user.model';
const allData = [];
export const getUserState = createFeatureSelector<AppState>('userData');

export const getUsers = () => createSelector(getUserState, (state: AppState) => {
    console.log("all users in selectors", state.userData)
    return state.userData;
})
export const getapiCalledFlag =  createSelector(getUserState, (state:AppState) => {
    console.log("loader flag in selector", state.apiCalling);
    return state.apiCalling;
})
export const getUserbyId = (id) => createSelector(getUserState, (state:AppState) => {
    let filteredData = [];
    if (state.userData) {
        for (let i = 0; i < 100; i++) {
            allData.push(state.userData[i]);
            if (allData[i].userId == id) {
                filteredData.push(allData[i]);
            }
        }
        console.log("filtered data", allData)
    } return filteredData;
})