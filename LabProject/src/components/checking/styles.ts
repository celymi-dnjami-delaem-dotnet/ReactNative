import { StyleSheet } from 'react-native';

export const checkingStyles = StyleSheet.create({
    root: {
        flex: 1,
        margin: 20,
        display: 'flex',
        flexDirection: 'column',
    },
});

export const searchPanelStyles = StyleSheet.create({
    root: {
        marginVertical: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputContainer: {
        flex: 2,
    },
    buttonContainer: {
        flex: 1,
        marginLeft: 15,
    },
});
