import React from 'react';
import { NativeSyntheticEvent, StyleSheet, TextInputChangeEventData, View } from 'react-native';
import { Text } from 'react-native-elements';
import theme from '../../theme/theme';
import Input from '../common/Input';
import Button, { ButtonColor } from '../common/Button';
import Chip, { ChipColor } from '../common/Chip';
import { SignInState } from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';

export interface ISignInProps {
    email: string;
    password: string;
    isLoading: boolean;
    signInState: SignInState;
    onChangeEmail: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    onChangePassword: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    onPressSignIn: () => void;
}

const SignIn: React.FC<ISignInProps> = ({
    email,
    password,
    isLoading,
    signInState,
    onChangeEmail,
    onChangePassword,
    onPressSignIn,
}) => {
    const errorMessage: string = signInState === SignInState.FailedAttempt ? 'Invalid credentials' : '';
    const chipIconSize: number = 18;

    return (
        <View style={styles.root}>
            <View style={styles.headerContainer}>
                <View style={styles.mainTitleContainer}>
                    <Text style={styles.mainTitle} h2={true}>
                        Login
                    </Text>
                </View>
            </View>

            <View style={styles.inputsContainer}>
                <View style={styles.inputContainer}>
                    <Input
                        value={email}
                        onChange={onChangeEmail}
                        placeholder="Your email address"
                        label="Email"
                        errorMessage={errorMessage}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        value={password}
                        onChange={onChangePassword}
                        placeholder="Password"
                        label="Password"
                        errorMessage={errorMessage}
                        isPassword={true}
                    />
                </View>
                <Text style={styles.forgotPasswordTooltip}>Forgot Password</Text>
            </View>

            <View style={styles.footerButtonsContainer}>
                <Button
                    title="Login"
                    onPress={onPressSignIn}
                    borderRadius={50}
                    height={50}
                    color={ButtonColor.Primary}
                    isLoading={isLoading}
                />
                <Text style={styles.loginHelpText}>Let's test 2 ways to log in</Text>
                <View style={styles.pillsContainer}>
                    <Chip
                        title="Touch ID"
                        chipColor={ChipColor.Grey}
                        icon={<Icon size={chipIconSize} name="finger-print" />}
                    />
                    <Chip
                        title="Face ID"
                        chipColor={ChipColor.Grey}
                        icon={<Icon size={chipIconSize} name="person" />}
                    />
                </View>
            </View>
        </View>
    );
};

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
        flex: 0.5,
        justifyContent: 'center',
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
        flex: 2,
    },
    inputContainer: {
        marginTop: 20,
    },
    forgotPasswordTooltip: {
        alignSelf: 'flex-end',
        fontSize: 16,
        color: theme.colors?.primary,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: 10,
    },
    footerButtonsContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'space-between',
    },
    loginHelpText: {
        alignSelf: 'center',
        fontSize: 16,
        color: theme.colors?.grey1,
        marginBottom: 30,
        marginTop: 'auto',
    },
    pillsContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default SignIn;
