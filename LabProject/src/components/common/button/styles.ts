import { StyleSheet } from 'react-native';
import theme from '../../../theme/theme';

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
            textTransform: 'uppercase',
            fontWeight: '600',
        },
        primary: {
            backgroundColor: theme?.colors?.primary,
        },
    });

export default styles;
