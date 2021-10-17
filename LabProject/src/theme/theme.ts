import { FullTheme } from 'react-native-elements';
import { Colors } from 'react-native-elements/dist/config/colors';

interface ITheme extends Partial<FullTheme> {
    colors: IAppColors;
}

interface IAppColors extends Partial<Colors> {
    grey0Rgba: string;
    grey1Rgba: string;
    green: string;
}

const theme: ITheme = {
    colors: {
        primary: '#d73374',
        white: '#FFF',
        black: '#000',
        grey0: '#a9a9a9',
        grey0Rgba: 'rgba(169, 169, 169, 1)',
        grey1: '#5d5c5c',
        grey1Rgba: 'rgba(169, 169, 169, 0.3)',
        green: '#18b018',
    },
};

export default theme;
