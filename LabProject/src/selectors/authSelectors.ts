import { AppState } from '../store/state';

export const getIsLoading = (state: AppState): boolean => state.auth.isLoading;

export const getJwt = (state: AppState): string => state.auth.jwt;
