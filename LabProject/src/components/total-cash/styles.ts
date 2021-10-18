import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

export const getStyles = (titleFontSize: number, subTitleFontSize: number) =>
    StyleSheet.create({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        title: {
            fontSize: titleFontSize,
            color: theme.colors?.black,
        },
        subtitle: {
            marginTop: 5,
            textTransform: 'capitalize',
            fontSize: subTitleFontSize,
            color: theme.colors?.grey0,
        },
    });
