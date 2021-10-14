import React, { useState } from 'react';
import { KeyboardAvoidingView, NativeSyntheticEvent, Platform, TextInputChangeEventData, View } from 'react-native';
import { Text } from 'react-native-elements';
import Input from '../common/input/Input';
import Button, { ButtonColor } from '../common/button/Button';
import Chip, { ChipColor } from '../common/chip/Chip';
import { SignInState } from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

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
    const [buttonViewHeight, setButtonViewHeight] = useState<number>(0);

    const errorMessage: string = signInState === SignInState.FailedAttempt ? 'Invalid credentials' : '';
    const chipIconSize: number = 18;
    const keyboardVerticalOffset = -(buttonViewHeight / 2);

    return (
        <KeyboardAvoidingView
            style={styles.root}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={keyboardVerticalOffset}
        >
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

            <View
                style={styles.footerButtonsContainer}
                onLayout={e => {
                    setButtonViewHeight(e.nativeEvent.layout.height);
                }}
            >
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
        </KeyboardAvoidingView>
    );
};

export default SignIn;
