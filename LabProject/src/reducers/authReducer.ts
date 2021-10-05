import { AuthState } from '../store/state';
import { AuthActions, ISignInSuccess } from '../actions/authActions';

const initialState: AuthState = {
    email: '',
    userName: '',
    jwt: '',
    isLoading: false,
};

export default function authReducer(state = initialState, action: any) {
    switch (action.type) {
        case AuthActions.SIGN_IN_REQUEST:
            return handleSignInRequest(state);
        case AuthActions.SIGN_IN_SUCCESS:
            return handleSignInSuccess(state, action.payload);
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

const handleSignInSuccess = (state: AuthState, { payload: { email, userName, jwt } }: ISignInSuccess): AuthState => ({
    ...state,
    email,
    userName,
    jwt,
    isLoading: false,
});

const handleSignInFailure = (state: AuthState): AuthState => ({
    ...state,
    isLoading: false,
});

const handleSignOut = (): AuthState => initialState;
