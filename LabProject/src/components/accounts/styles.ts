import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

export const accountsStyles = StyleSheet.create({
    root: {
        flex: 1,
        margin: 20,
    },
    cardRow: {
        marginTop: 15,
        padding: 10,
        backgroundColor: theme.colors?.white,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.colors?.grey1Rgba,
    },
});

export const accountsSummaryDetailsStyles = StyleSheet.create({
    root: {
        marginBottom: 15,
    },
    cashContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25,
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

export const cardTooltipStyles = StyleSheet.create({
    root: {
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
        color: theme.colors?.green,
    },
});
