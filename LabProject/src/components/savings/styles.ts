import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

export const savingsStyles = StyleSheet.create({
    root: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: theme.colors?.white,
    },
    totalCash: {
        marginVertical: 20,
    },
    imageContainer: {
        marginBottom: 20,
    },
    graphImage: {
        width: '100%',
        height: 210,
        resizeMode: 'cover',
    },
    body: {
        paddingHorizontal: 20,
    },
    scoresContainer: {
        marginTop: 10,
    },
    searchPanelContainer: {
        marginTop: 20,
    },
    cardRowContainer: {
        marginHorizontal: 20,
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

export const savingsSummaryStyles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    scoresTitle: {
        fontSize: 18,
        color: theme.colors?.black,
    },
    scoresResult: {
        fontSize: 18,
        color: theme.colors?.green,
    },
});
