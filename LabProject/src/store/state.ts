import { SignInState } from '../constants';
import { IUserProfile } from '../types';

export interface AppState {
    auth: AuthState;
}

export interface AuthState {
    profile: IUserProfile;
    jwt: string;
    isLoading: boolean;
    state: SignInState;
}
