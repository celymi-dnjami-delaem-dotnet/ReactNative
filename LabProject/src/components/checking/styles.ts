import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        margin: 20,
        display: 'flex',
        flexDirection: 'column',
    },
    totalCashContainer: {
        marginTop: 20,
    },
    searchPanelContainer: {
        marginTop: 20,
    },
    sectionHeader: {
        fontSize: 18,
        color: theme.colors?.black,
        marginVertical: 20,
        marginBottom: 10,
        marginLeft: 20,
    },
    cardRow: {
        backgroundColor: theme.colors?.white,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderLeftColor: theme.colors?.grey1Rgba,
        borderRightColor: theme.colors?.grey1Rgba,
        borderBottomColor: theme.colors?.grey1Rgba,
    },
    firstCardRow: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopWidth: 1,
        borderTopColor: theme.colors?.grey1Rgba,
    },
    endCardRow: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
});

export default styles;
