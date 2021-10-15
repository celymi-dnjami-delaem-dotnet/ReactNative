import { StyleSheet } from 'react-native';
import theme from '../../../theme/theme';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 0,
    },
    label: {
        fontSize: 22,
        fontWeight: '500',
        color: theme.colors?.grey1,
    },
    errorStyle: {
        fontSize: 16,
        color: '#c20404',
        marginTop: 10,
        marginHorizontal: 0,
    },
});

export default styles;
