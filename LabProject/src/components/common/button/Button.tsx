import React from 'react';
import { Button as RNEButton } from 'react-native-elements';
import { IconNode } from 'react-native-elements/dist/icons/Icon';
import styles from './styles';

export enum ButtonType {
    Solid = 'solid',
    Outline = 'outline',
    Clear = 'clear',
}

export enum ButtonColor {
    Primary = 'primary',
}

export enum IconPosition {
    Left = 'left',
    Right = 'right',
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
    iconPosition?: IconPosition;
    icon?: IconNode;
    fontSize?: number;
}

const Button: React.FC<IButtonProps> = ({
    title,
    disabled,
    type,
    height,
    color,
    borderRadius,
    isLoading,
    iconPosition,
    icon,
    fontSize,
    onPress,
}) => (
    <RNEButton
        containerStyle={styles().container}
        buttonStyle={[styles(borderRadius, height).button, [styles()[color]]]}
        titleStyle={styles(undefined, undefined, fontSize).title}
        iconPosition={iconPosition}
        icon={icon}
        title={title}
        onPress={onPress}
        type={type}
        loading={isLoading}
        disabled={disabled}
    />
);

export default Button;
