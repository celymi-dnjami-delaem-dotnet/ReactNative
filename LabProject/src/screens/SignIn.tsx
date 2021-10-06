import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import SignIn, { ISignInProps } from '../components/sign-in/SignIn';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

export interface ISignScreenInProps extends NativeStackScreenProps<never> {}

const SignInScreen: React.FC<ISignScreenInProps> = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onChangeEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
        setEmail(e.nativeEvent.text);
    };

    const onChangePassword = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
        setPassword(e.nativeEvent.text);
    };

    const onPressSignIn = (): void => {
        console.log('Hello world!');
    };

    const signInProps: ISignInProps = {
        email,
        password,
        onChangeEmail,
        onChangePassword,
        onPressSignIn,
    };

    return <SignIn {...signInProps} />;
};

export default SignInScreen;
