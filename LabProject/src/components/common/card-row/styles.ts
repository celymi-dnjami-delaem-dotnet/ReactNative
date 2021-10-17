import { StyleSheet } from 'react-native';
import theme from '../../../theme/theme';

const styles = StyleSheet.create({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    cardBody: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardRowWithBorder: {
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.grey1Rgba,
    },
    cardRowWithoutBorder: {
        borderBottomWidth: undefined,
    },
    cardRowLeft: {
        display: 'flex',
        flexDirection: 'column',
    },
    leftTitle: {
        fontSize: 18,
    },
    letTitleIcon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },
    leftSubtitle: {
        marginTop: 5,
        color: theme.colors?.grey0,
        fontSize: 14,
    },
    cardRowRight: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightTitle: {
        fontSize: 24,
        marginRight: 10,
    },
    rightIcon: {
        width: 15,
        height: 15,
        tintColor: theme.colors?.primary,
        transform: [{ rotate: '180deg' }],
    },
});

export default styles;
