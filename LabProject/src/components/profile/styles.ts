import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

export const profileStyles = StyleSheet.create({
    root: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        margin: 20,
    },
});

export const userDescriptionStyles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    userAvatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
});

export const userDescriptionFieldStyles = StyleSheet.create({
    root: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        marginTop: 25,
    },
    descriptionSubtitle: {
        color: theme.colors?.grey0,
        fontSize: 18,
        marginBottom: 5,
    },
    descriptionTitle: {
        color: theme.colors?.black,
        fontSize: 22,
    },
});

export const managementPanelStyles = StyleSheet.create({
    root: {
        marginTop: 'auto',
        marginBottom: 20,
    },
    applyChangesButton: {
        marginBottom: 20,
    },
});
