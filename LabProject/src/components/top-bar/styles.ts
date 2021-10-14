import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

export const headerLeftStyles = StyleSheet.create({
    menuIcon: {
        color: theme.colors?.white,
        fontSize: 32,
    },
    backIcon: {
        width: 20,
        height: 20,
    },
});

export const headerRightStyles = StyleSheet.create({
    icon: {
        color: theme.colors?.white,
        fontSize: 32,
    },
});

export const headerTitleStyles = StyleSheet.create({
    logo: {
        width: 180,
        height: 30,
    },
    icon: {
        color: theme.colors?.white,
        fontSize: 32,
    },
    pageDescriptionContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    pageName: {
        fontSize: 18,
        color: theme.colors?.white,
    },
    title: {
        fontSize: 12,
        color: theme.colors?.white,
    },
});
