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
    type?: ButtonType;
    color?: ButtonColor;
    disabled?: boolean;
    loading?: boolean;
    borderRadius?: number;
    height?: number;
}

const Button: React.FC<IButtonProps> = ({ title, disabled, type, height, color, borderRadius, onPress }) => (
    <RNEButton
        containerStyle={styles().container}
        buttonStyle={styles(color, borderRadius, height).button}
        titleStyle={styles().title}
        title={title}
        onPress={onPress}
        type={type}
        disabled={disabled}
    />
);

const styles = (color?: ButtonColor, borderRadius?: number, height?: number) =>
    StyleSheet.create({
        container: {
            width: '100%',
        },
        button: {
            height: height ?? 'auto',
            backgroundColor: color === ButtonColor.Primary ? theme.colors?.primary : theme.colors?.primary,
            borderRadius,
        },
        title: {
            fontSize: 20,
            textTransform: 'uppercase',
            fontWeight: '600',
        },
    });

export default Button;
