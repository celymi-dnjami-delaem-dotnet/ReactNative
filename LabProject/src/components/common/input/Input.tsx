import React from 'react';
import { Input as RNEInput } from 'react-native-elements';
import theme from '../../../theme/theme';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import getStyles from './styles';

export enum InputType {
    Solid = 'solid',
    Outline = 'outline',
}

export interface IInputProps {
    value: string;
    onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    inputType: InputType;
    placeholder: string;
    label: string;
    isPassword: boolean;
    errorMessage: string;
    fontSize: number;
}

const Input: React.FC<Partial<IInputProps>> = ({
    placeholder,
    onChange,
    value,
    label,
    isPassword,
    errorMessage,
    inputType = InputType.Solid,
    fontSize = 18,
}) => {
    const styles = getStyles(inputType, fontSize);

    return (
        <RNEInput
            onChange={onChange}
            value={value}
            label={label}
            placeholder={placeholder}
            secureTextEntry={isPassword}
            renderErrorMessage={!!errorMessage}
            errorMessage={errorMessage}
            placeholderTextColor={theme.colors?.grey0}
            inputContainerStyle={styles.inputContainer}
            containerStyle={styles.container}
            inputStyle={styles.input}
            labelStyle={styles.label}
            errorStyle={styles.error}
        />
    );
};

export default Input;
