import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

export const accountsSummaryDetailsStyles = StyleSheet.create({
    cashContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25,
    },
    cashTitle: {
        fontSize: 38,
        color: theme.colors?.black,
    },
    cashSubtitle: {
        marginTop: 5,
        fontSize: 20,
        color: theme.colors?.grey0,
    },
    buttonsManagementContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    icon: {
        width: 80,
        height: 80,
    },
    iconSubtitle: {
        fontSize: 18,
        color: theme.colors?.grey1,
    },
});
