import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { accountsSummaryDetailsStyles as styles } from './styles';
import { formatPrice } from '../../utils';

interface IAccountButtonOption {
    iconLink: ImageSourcePropType;
    subtitle: string;
}

export interface IAccountsSummaryDetailsProps {}

const AccountsSummaryDetails = ({}: IAccountsSummaryDetailsProps) => {
    const iconButtons: IAccountButtonOption[] = [
        {
            iconLink: require('../../../assets/icons/circle-button-send.png'),
            subtitle: 'Send',
        },
        {
            iconLink: require('../../../assets/icons/circle-button-pay.png'),
            subtitle: 'Pay',
        },
        {
            iconLink: require('../../../assets/icons/circle-button-checking.png'),
            subtitle: 'Transfer',
        },
    ];

    return (
        <View>
            <View style={styles.cashContainer}>
                <Text style={styles.cashTitle}>{formatPrice(7800)}</Text>
                <Text style={styles.cashSubtitle}>Total Available Cash</Text>
            </View>
            <View style={styles.buttonsManagementContainer}>
                {iconButtons.map(({ iconLink, subtitle }, index) => (
                    <View key={index} style={styles.iconContainer}>
                        <Image style={styles.icon} source={iconLink} />
                        <Text style={styles.iconSubtitle}>{subtitle}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default AccountsSummaryDetails;
