import React from 'react';
import { Button as RNEButton } from 'react-native-elements';
import styles from './styles';

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
    isLoading?: boolean;
    borderRadius?: number;
    height?: number;
}

const Button: React.FC<IButtonProps> = ({ title, disabled, type, height, color, borderRadius, isLoading, onPress }) => (
    <RNEButton
        containerStyle={styles().container}
        buttonStyle={[styles(borderRadius, height).button, [styles()[color]]]}
        titleStyle={styles().title}
        title={title}
        onPress={onPress}
        type={type}
        loading={isLoading}
        disabled={disabled}
    />
);
export default Button;
