import React from 'react';
import { NativeSyntheticEvent, StyleSheet, TextInputChangeEventData, View } from 'react-native';
import { Text } from 'react-native-elements';
import theme from '../../theme/theme';
import Input from '../common/Input';
import Button, { ButtonColor } from '../common/Button';
import Chip from '../common/Chip';

export interface ISignInProps {
    email: string;
    password: string;
    onChangeEmail: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    onChangePassword: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    onPressSignIn: () => void;
}

const SignIn = ({ email, password, onChangeEmail, onChangePassword, onPressSignIn }: ISignInProps) => (
    <View style={styles.root}>
        <View style={styles.headerContainer}>
            <View style={styles.mainTitleContainer}>
                <Text style={styles.mainTitle} h2={true}>
                    Login
                </Text>
            </View>
        </View>

        <View style={styles.inputsContainer}>
            <Input value={email} onChange={onChangeEmail} placeholder="Your email address" label="Email" />
            <Input
                value={password}
                onChange={onChangePassword}
                placeholder="Password"
                label="Password"
                isPassword={true}
            />
            <Text style={styles.forgotPasswordTooltip}>Forgot Password</Text>
        </View>

        <View style={styles.footerButtonsContainer}>
            <Button title="Login" onPress={onPressSignIn} borderRadius={50} height={50} color={ButtonColor.Primary} />
            <Text style={styles.loginHelpText}>Let's test 2 ways to log in</Text>
            <View style={styles.pillsContainer}>
                <Chip title="Touch ID" />
                <Chip title="Face ID" />
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    root: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginHorizontal: 30,
        marginVertical: 50,
        position: 'relative',
    },
    headerContainer: {
        width: '100%',
        position: 'absolute',
        top: '10%',
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
    inputsContainer: {
        width: '100%',
    },
    forgotPasswordTooltip: {
        alignSelf: 'flex-end',
        fontSize: 16,
        color: theme.colors?.primary,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    footerButtonsContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    loginHelpText: {
        alignSelf: 'center',
        fontSize: 16,
        color: theme.colors?.grey1,
        marginBottom: 20,
        marginTop: 80,
    },
    pillsContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
});

export default SignIn;
