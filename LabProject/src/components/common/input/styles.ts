import { StyleSheet } from 'react-native';
import theme from '../../../theme/theme';
import { InputType } from './Input';

const styles = (inputType: InputType, fontSize: number) =>
    StyleSheet.create({
        container: {
            paddingHorizontal: 0,
        },
        label: {
            fontSize: 22,
            fontWeight: '500',
            color: theme.colors?.grey1,
        },
        inputContainer: {
            borderBottomWidth: inputType === InputType.Outline ? 0 : 1,
        },
        input:
            inputType === InputType.Outline
                ? {
                      borderWidth: 1,
                      borderRadius: 20,
                      paddingHorizontal: 10,
                      borderColor: theme.colors?.grey1Rgba,
                      fontSize,
                  }
                : {
                      fontSize,
                  },
        error: {
            fontSize: 16,
            color: '#c20404',
            marginTop: 10,
            marginHorizontal: 0,
        },
    });

export default styles;
