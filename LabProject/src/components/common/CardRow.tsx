import React from 'react';
import {
    Image,
    ImageSourcePropType,
    StyleProp,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import theme from '../../theme/theme';
import { formatPrice } from '../../utils';

export interface ICardRowProps {
    routeName: string;
    leftTitle: string;
    leftSubtitle: string;
    amount: number;
    customRootStyle?: StyleProp<ViewStyle>;
    leftTitleIcon?: ImageSourcePropType;
    rightTitleIcon?: ImageSourcePropType;
    onPress?: () => void;
}

const CardRow = ({
    leftSubtitle,
    customRootStyle,
    leftTitleIcon,
    rightTitleIcon,
    leftTitle,
    amount,
    onPress,
}: ICardRowProps) => (
    <TouchableOpacity style={[styles.root, customRootStyle]} onPress={onPress}>
        <View style={styles.cardRowLeft}>
            <Text style={styles.leftTitle}>
                {leftTitle} {leftTitleIcon && <Image style={styles.letTitleIcon} source={leftTitleIcon} />}
            </Text>
            <Text style={styles.leftSubtitle}>{leftSubtitle}</Text>
        </View>
        <View style={styles.cardRowRight}>
            <Text style={styles.rightTitle}>{formatPrice(amount)}</Text>
            {rightTitleIcon && <Image style={styles.rightIcon} source={rightTitleIcon} />}
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    cardRowWithBorder: {
        borderBottomWidth: 1,
        borderBottomColor: `rgba(${theme.colors.grey1Rgba},0.3)`,
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

export default CardRow;
