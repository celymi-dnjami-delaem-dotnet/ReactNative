import React from 'react';
import { Button as RNEButton } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';
import { IconNode } from 'react-native-elements/dist/icons/Icon';

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

const styles = (borderRadius?: number, height?: number, fontSize?: number) =>
    StyleSheet.create({
        container: {
            width: '100%',
        },
        button: {
            height: height ?? 'auto',
            borderRadius,
        },
        title: {
            fontSize: fontSize ?? 18,
            fontWeight: '600',
        },
        primary: {
            backgroundColor: theme?.colors?.primary,
        },
    });

export default Button;
