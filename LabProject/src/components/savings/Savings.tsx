import React from 'react';
import { Image, Text, View } from 'react-native';
import { savingsStyles as styles } from './styles';
import TotalCash from '../total-cash/TotalCash';
import { formatPrice, getTotalPrice } from '../../utils';

export interface ISavingsProps {
    amount: number;
    totalInterest: number;
    totalPoints: number;
}

const Savings: React.FC<ISavingsProps> = ({ amount, totalInterest, totalPoints }) => (
    <View style={styles.root}>
        <View style={styles.header}>
            <View style={styles.totalCash}>
                <TotalCash amount={getTotalPrice(amount)} titleFontSize={30} subTitleFontSize={20} />
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.graphImage} source={require('../../../assets/images/savings-graph-image.png')} />
            </View>
        </View>
        <View style={styles.body}>
            <View style={styles.scoresContainer}>
                <Text style={styles.scoresTitle}>Total interest gained</Text>
                <Text style={styles.scoresResult}>+{formatPrice(totalInterest)}</Text>
            </View>
            <View style={styles.scoresContainer}>
                <Text style={styles.scoresTitle}>Goodness points gained</Text>
                <Text style={styles.scoresResult}>+{totalPoints}</Text>
            </View>
        </View>
    </View>
);

export default Savings;
