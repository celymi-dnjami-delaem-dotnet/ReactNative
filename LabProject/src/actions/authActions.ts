import { IBaseAction, IUserProfile } from '../types';

export const AuthActions = {
    SIGN_IN_REQUEST: 'auth/signInRequest',
    SIGN_IN_SUCCESS: 'auth/signInSuccess',
    SIGN_IN_FAILURE: 'auth/signInFailure',
    SIGN_OUT: 'auth/signOut',
};

/*
    Interfaces
 */

export interface ISignInRequest extends IBaseAction {
    payload: {
        email: string;
        password: string;
    };
}

export interface ISignInSuccess extends IBaseAction {
    payload: {
        profile: IUserProfile;
        jwt: string;
    };
}

export interface ISignInFailure extends IBaseAction {
    payload: Error;
}

export interface ISignOut extends IBaseAction {}

/*
    Actions
 */

export const signInRequest = (email: string, password: string): ISignInRequest => ({
    type: AuthActions.SIGN_IN_REQUEST,
    payload: {
        email,
        password,
    },
});

export const signInSuccess = (profile: IUserProfile, jwt: string): ISignInSuccess => ({
    type: AuthActions.SIGN_IN_SUCCESS,
    payload: {
        profile,
        jwt,
    },
});

export const signInFailure = (error: Error): ISignInFailure => ({
    type: AuthActions.SIGN_IN_FAILURE,
    payload: error,
});

export const signOut = (): ISignOut => ({ type: AuthActions.SIGN_OUT });
