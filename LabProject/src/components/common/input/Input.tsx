import React from 'react';
import { Input as RNEInput } from 'react-native-elements';
import theme from '../../../theme/theme';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import styles from './styles';

export interface IInputProps {
    value: string;
    onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    placeholder?: string;
    label?: string;
    isPassword?: boolean;
    errorMessage?: string;
}

const Input: React.FC<IInputProps> = ({ placeholder, onChange, value, label, isPassword, errorMessage }) => (
    <RNEInput
        onChange={onChange}
        value={value}
        label={label}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        placeholderTextColor={theme.colors?.grey0}
        containerStyle={styles.container}
        labelStyle={styles.label}
        errorMessage={errorMessage}
        errorStyle={styles.errorStyle}
    />
);

export default Input;
