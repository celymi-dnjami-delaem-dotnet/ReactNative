import { IBaseAction } from '../types';

export const AuthActions = {
    SIGN_IN_REQUEST: 'auth/signInRequest',
    SIGN_IN_SUCCESS: 'auth/signInSuccess',
    SIGN_IN_FAILURE: 'auth/signInFailure',
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
        email: string;
        userName: string;
        jwt: string;
    };
}

export interface ISignInFailure extends IBaseAction {
    payload: Error;
}

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

export const signInSuccess = (email: string, userName: string, jwt: string): ISignInSuccess => ({
    type: AuthActions.SIGN_IN_SUCCESS,
    payload: {
        email,
        userName,
        jwt,
    },
});

export const signInFailure = (error: Error): ISignInFailure => ({
    type: AuthActions.SIGN_IN_FAILURE,
    payload: error,
});
