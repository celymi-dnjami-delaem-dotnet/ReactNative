import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { accountsSummaryDetailsStyles as styles } from './styles';
import { getTotalPrice } from '../../utils';
import TotalCash from '../total-cash/TotalCash';

interface IAccountButtonOption {
    iconLink: ImageSourcePropType;
    subtitle: string;
}

export interface IAccountsSummaryDetailsProps {
    prices: number[];
}

const AccountsSummaryDetails: React.FC<IAccountsSummaryDetailsProps> = ({ prices }) => {
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
        <View style={styles.root}>
            <View style={styles.cashContainer}>
                <TotalCash amount={getTotalPrice(...prices)} titleFontSize={38} subTitleFontSize={20} />
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
