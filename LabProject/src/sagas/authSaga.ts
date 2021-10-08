import { delay, put, takeLatest } from 'redux-saga/effects';
import { AuthActions, ISignInRequest, signInFailure, signInSuccess } from '../actions/authActions';

function* handleSignIn({ payload: { email, password } }: ISignInRequest) {
    try {
        const apiRequestDelayTime: number = 1000;
        const fakePassword: string = 'admin';
        const fakeJwt: string =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3RVc2VyTmFtZSIsImlhdCI6MTUxNjIzOTAyMn0.9ioVahAf729TB8ODRKu6iLu2DaGry1MfRiJlXZyVn5E';
        const fakeUserName: string = 'TestUserName';

        yield delay(apiRequestDelayTime);

        if (email.match(/(itechart-group.com)$/) && password === fakePassword) {
            yield put(signInSuccess(email, fakeUserName, fakeJwt));
        } else {
            throw new Error('Invalid credentials');
        }
    } catch (e) {
        yield put(signInFailure(e));
    }
}

export default function* authSaga() {
    yield takeLatest(AuthActions.SIGN_IN_REQUEST, handleSignIn);
}
