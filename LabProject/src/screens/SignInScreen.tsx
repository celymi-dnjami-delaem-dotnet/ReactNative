import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import SignIn, { ISignInProps } from '../components/sign-in/SignIn';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../actions/authActions';
import { getIsLoading, getSignInState } from '../selectors/authSelectors';
import { SignInState } from '../constants';

export interface ISignScreenInProps extends NativeStackScreenProps<never> {}

const SignInScreen: React.FC<ISignScreenInProps> = () => {
    const dispatch = useDispatch();

    const isLoading: boolean = useSelector(getIsLoading);
    const signInState: SignInState = useSelector(getSignInState);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onChangeEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
        setEmail(e.nativeEvent.text);
    };

    const onChangePassword = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
        setPassword(e.nativeEvent.text);
    };

    const onPressSignIn = (): void => {
        dispatch(signInRequest(email, password));
    };

    const signInProps: ISignInProps = {
        email,
        password,
        isLoading,
        signInState,
        onChangeEmail,
        onChangePassword,
        onPressSignIn,
    };

    return <SignIn {...signInProps} />;
};

export default SignInScreen;
