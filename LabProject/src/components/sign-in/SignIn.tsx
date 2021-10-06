import React from 'react';
import { NativeSyntheticEvent, StyleSheet, TextInputChangeEventData, View } from 'react-native';
import { Text } from 'react-native-elements';
import theme from '../../theme/theme';
import Input from '../common/Input';
import Button from '../common/Button';

export interface ISignInProps {
    email: string;
    password: string;
    onChangeEmail: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    onChangePassword: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    onPressSignIn: () => void;
}

const SignIn = ({ email, password, onChangeEmail, onChangePassword, onPressSignIn }: ISignInProps) => (
    <View style={styles.root}>
        <View style={styles.mainTitleContainer}>
            <Text style={styles.mainTitle} h2={true}>
                Login
            </Text>
        </View>

        <Input value={email} onChange={onChangeEmail} placeholder="Your email address" label="Email" />
        <Input value={password} onChange={onChangePassword} placeholder="Password" label="Password" isPassword={true} />
        <Text style={styles.forgotPasswordTooltip}>Forgot Password</Text>

        <Button title="Login" onPress={onPressSignIn} borderRadius={50} height={50} />
    </View>
);

const styles = StyleSheet.create({
    root: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingHorizontal: 30,
    },
    mainTitleContainer: {
        alignSelf: 'flex-start',
        borderBottomWidth: 5,
        borderBottomColor: theme.colors?.primary,
    },
    mainTitle: {
        fontWeight: 'bold',
        borderBottomWidth: 1,
    },
    inputContainer: {
        paddingHorizontal: 0,
    },
    inputLabel: {
        fontSize: 20,
    },
    forgotPasswordTooltip: {
        alignSelf: 'flex-end',
        fontSize: 16,
        color: theme.colors?.primary,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default SignIn;
