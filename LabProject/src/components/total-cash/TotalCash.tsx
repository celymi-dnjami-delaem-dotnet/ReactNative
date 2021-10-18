import React from 'react';
import { Text, View } from 'react-native';
import { getStyles } from './styles';

export interface ITotalCashProps {
    amount: string;
    titleFontSize: number;
    subTitleFontSize: number;
}

const TotalCash: React.FC<ITotalCashProps> = ({ amount, titleFontSize, subTitleFontSize }) => {
    const styles = getStyles(titleFontSize, subTitleFontSize);

    return (
        <View style={styles.root}>
            <Text style={styles.title}>{amount}</Text>
            <Text style={styles.subtitle}>Total available cash</Text>
        </View>
    );
};

export default TotalCash;
