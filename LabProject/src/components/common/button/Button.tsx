import React from 'react';
import { Button as RNEButton } from 'react-native-elements';
import { IconNode } from 'react-native-elements/dist/icons/Icon';
import styles from './styles';
import { StyleProp, ViewStyle } from 'react-native';

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
    customStyle?: StyleProp<ViewStyle>;
}

const Button: React.FC<IButtonProps> = ({
    title,
    disabled,
    type = ButtonType.Solid,
    height,
    color,
    borderRadius,
    isLoading,
    iconPosition,
    icon,
    fontSize,
    onPress,
    customStyle,
}) => (
    <RNEButton
        containerStyle={styles().container}
        buttonStyle={[styles(borderRadius, height).button, [styles()[color]], [styles()[type]], customStyle]}
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
