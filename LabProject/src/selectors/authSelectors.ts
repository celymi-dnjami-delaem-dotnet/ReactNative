import { AppState } from '../store/state';
import { SignInState } from '../constants';

export const getIsLoading = (state: AppState): boolean => state.auth.isLoading;

export const getSignInState = (state: AppState): SignInState => state.auth.state;

export const getJwt = (state: AppState): string => state.auth.jwt;

export const getUserName = (state: AppState): string => state.auth.profile.userName;

export const getUserDateOfBirth = (state: AppState): Date => state.auth.profile.dateOfBirth;

export const getUserAvatarLink = (state: AppState): string => state.auth.profile.avatarLink;
