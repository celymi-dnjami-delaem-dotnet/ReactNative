import { AppState } from '../store/state';
import { SignInState } from '../constants';

export const getIsLoading = (state: AppState): boolean => state.auth.isLoading;

export const getSignInState = (state: AppState): SignInState => state.auth.state;

export const getJwt = (state: AppState): string => state.auth.jwt;
