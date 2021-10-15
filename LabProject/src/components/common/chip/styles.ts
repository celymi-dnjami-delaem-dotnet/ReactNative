import { StyleSheet } from 'react-native';
import theme from '../../../theme/theme';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
    },
    iconContainer: {
        width: 30,
        height: 30,
    },
    grey: {
        fontSize: 16,
        color: theme.colors?.grey1,
        borderColor: theme.colors?.grey1,
    },
});

export default styles;
