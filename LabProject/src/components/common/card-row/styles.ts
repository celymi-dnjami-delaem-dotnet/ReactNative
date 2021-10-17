import { StyleSheet } from 'react-native';
import theme from '../../../theme/theme';
import { CardRowTextSize } from './CardRow';

const styles = (highlightCardTextColor?: string, leftSubtitleHighlightColor?: string, textSize?: CardRowTextSize) =>
    StyleSheet.create({
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
            borderBottomColor: highlightCardTextColor ?? theme.colors.grey1Rgba,
        },
        cardRowWithoutBorder: {
            borderBottomWidth: undefined,
        },
        cardRowLeft: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        cardRowLeftTextContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
        leftTitle: {
            fontSize: textSize === CardRowTextSize.Small ? 14 : 18,
            color: highlightCardTextColor ?? theme.colors?.black,
        },
        letTitleIcon: {
            width: 15,
            height: 15,
            resizeMode: 'contain',
        },
        leftSubtitle: {
            marginTop: 5,
            color: leftSubtitleHighlightColor ?? theme.colors?.grey0,
            fontSize: textSize === CardRowTextSize.Small ? 12 : 14,
        },
        cardRowRight: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        rightTitle: {
            fontSize: textSize === CardRowTextSize.Small ? 18 : 24,
            color: highlightCardTextColor ?? theme.colors?.black,
        },
        leftIcon: {
            width: 34,
            height: 34,
            marginRight: 10,
        },
        rightIcon: {
            marginLeft: 10,
            width: 15,
            height: 15,
            tintColor: theme.colors?.primary,
            transform: [{ rotate: '180deg' }],
        },
    });

export default styles;
