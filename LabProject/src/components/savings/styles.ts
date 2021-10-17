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
