import React from 'react';
import { Input as RNEInput } from 'react-native-elements';
import theme from '../../theme/theme';
import { NativeSyntheticEvent, StyleSheet, TextInputChangeEventData } from 'react-native';

export interface IInputProps {
    value: string;
    onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    placeholder?: string;
    label?: string;
    isPassword?: boolean;
}

const Input: React.FC<IInputProps> = ({ placeholder, onChange, value, label, isPassword }) => (
    <RNEInput
        onChange={onChange}
        value={value}
        label={label}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        placeholderTextColor={theme.colors?.grey0}
        containerStyle={styles.container}
        labelStyle={styles.label}
    />
);

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 0,
    },
    label: {
        fontSize: 22,
        fontWeight: '500',
        color: theme.colors?.grey1,
    },
});

export default Input;
