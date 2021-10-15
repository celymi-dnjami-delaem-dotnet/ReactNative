import { AuthState } from '../store/state';
import { AuthActions, ISignInSuccess } from '../actions/authActions';
import { SignInState } from '../constants';

const initialState: AuthState = {
    profile: {
        avatarLink: '',
        email: '',
        userName: '',
        dateOfBirth: undefined,
    },
    jwt: '',
    isLoading: false,
    state: SignInState.NotAttempted,
};

export default function authReducer(state = initialState, action: any) {
    switch (action.type) {
        case AuthActions.SIGN_IN_REQUEST:
            return handleSignInRequest(state);
        case AuthActions.SIGN_IN_SUCCESS:
            return handleSignInSuccess(state, action);
        case AuthActions.SIGN_IN_FAILURE:
            return handleSignInFailure(state);
        case AuthActions.SIGN_OUT:
            return handleSignOut();
        default:
            return state;
    }
}

const handleSignInRequest = (state: AuthState): AuthState => ({
    ...state,
    isLoading: true,
});

const handleSignInSuccess = (state: AuthState, { payload: { profile, jwt } }: ISignInSuccess): AuthState => ({
    ...state,
    profile,
    jwt,
    isLoading: false,
    state: SignInState.SuccessfulAttempt,
});

const handleSignInFailure = (state: AuthState): AuthState => ({
    ...state,
    isLoading: false,
    state: SignInState.FailedAttempt,
});

const handleSignOut = (): AuthState => initialState;
