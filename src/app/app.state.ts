import { Users } from './users/user.model';

export interface AppState {
    userData: Users[];
    apiCalling: boolean;
}