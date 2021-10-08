import React from 'react';
import { Button as RNEButton } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

export enum ButtonType {
    Solid = 'solid',
    Outline = 'outline',
    Clear = 'clear',
}

export enum ButtonColor {
    Primary = 'primary',
}

export interface IButtonProps {
    title: string;
    onPress: () => void;
    color: ButtonColor;
    type?: ButtonType;
    disabled?: boolean;
    loading?: boolean;
    borderRadius?: number;
    height?: number;
}

const Button: React.FC<IButtonProps> = ({ title, disabled, type, height, color, borderRadius, onPress }) => (
    <RNEButton
        containerStyle={styles().container}
        buttonStyle={[styles(borderRadius, height).button, [styles()[color]]]}
        titleStyle={styles().title}
        title={title}
        onPress={onPress}
        type={type}
        disabled={disabled}
    />
);

const styles = (borderRadius?: number, height?: number) =>
    StyleSheet.create({
        container: {
            width: '100%',
        },
        button: {
            height: height ?? 'auto',
            borderRadius,
        },
        title: {
            fontSize: 18,
            textTransform: 'uppercase',
            fontWeight: '600',
        },
        primary: {
            backgroundColor: theme?.colors?.primary,
        },
    });

export default Button;
