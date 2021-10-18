import { delay, put, takeLatest } from 'redux-saga/effects';
import {
    AuthActions,
    ISignInRequest,
    IUpdateProfileRequest,
    signInFailure,
    signInSuccess,
    updateUserProfileSuccess,
} from '../actions/authActions';
import { IUserProfile } from '../types';
import { apiRequestDelayTime } from '../constants';

function* handleSignIn({ payload: { email, password } }: ISignInRequest) {
    try {
        const fakePassword: string = 'admin';
        const fakeJwt: string =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3RVc2VyTmFtZSIsImlhdCI6MTUxNjIzOTAyMn0.9ioVahAf729TB8ODRKu6iLu2DaGry1MfRiJlXZyVn5E';
        const fakeUserName: string = 'TestUserName';
        const fakeUserAvatarLink: string =
            'https://files-wod.itechart-group.com/api/smgphotos/d6fabd2b-7cdf-11e5-bdad-d4ae5271be5b';
        const fakeUserDateOfBirth: Date = new Date(2000, 1, 1);

        yield delay(apiRequestDelayTime);

        if (email.match(/(itechart-group.com)$/) && password === fakePassword) {
            const profile: IUserProfile = {
                email,
                userName: fakeUserName,
                dateOfBirth: fakeUserDateOfBirth,
                avatarLink: fakeUserAvatarLink,
            };

            yield put(signInSuccess(profile, fakeJwt));
        } else {
            throw new Error('Invalid credentials');
        }
    } catch (e) {
        yield put(signInFailure(e));
    }
}

function* handleUpdateProfile({ payload: { userName, dateOfBirth } }: IUpdateProfileRequest) {
    yield delay(apiRequestDelayTime);

    yield put(updateUserProfileSuccess(userName, dateOfBirth));
}

export default function* authSaga() {
    yield takeLatest(AuthActions.SIGN_IN_REQUEST, handleSignIn);
    yield takeLatest(AuthActions.UPDATE_PROFILE_REQUEST, handleUpdateProfile);
}
