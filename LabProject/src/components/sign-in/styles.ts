import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginHorizontal: 30,
        marginVertical: 50,
        position: 'relative',
    },
    headerContainer: {
        width: '100%',
        flex: 0.5,
        justifyContent: 'center',
    },
    mainTitleContainer: {
        alignSelf: 'flex-start',
        borderBottomWidth: 5,
        borderBottomColor: theme.colors?.primary,
    },
    mainTitle: {
        fontWeight: 'bold',
        borderBottomWidth: 1,
    },
    inputsContainer: {
        width: '100%',
        flex: 2,
    },
    inputContainer: {
        marginTop: 20,
    },
    forgotPasswordTooltip: {
        alignSelf: 'flex-end',
        fontSize: 16,
        color: theme.colors?.primary,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: 10,
    },
    footerButtonsContainer: {
        width: '100%',
        flex: 1,
    },
    loginHelpText: {
        alignSelf: 'center',
        fontSize: 16,
        color: theme.colors?.grey1,
        marginBottom: 30,
        marginTop: 'auto',
    },
    pillsContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default styles;
