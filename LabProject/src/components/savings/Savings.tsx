import React from 'react';
import { Image, View } from 'react-native';
import { savingsStyles as styles } from './styles';
import TotalCash from '../total-cash/TotalCash';
import { formatPrice, getTotalPrice } from '../../utils';
import SavingsSummary from './SavingsSummary';
import SearchPanel from '../search-panel/SearchPanel';

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
                <SavingsSummary title="Total interest gained" value={formatPrice(totalInterest)} />
            </View>
            <View style={styles.scoresContainer}>
                <SavingsSummary title="Goodness points gained" value={totalPoints} />
            </View>
            <View style={styles.searchPanelContainer}>
                <SearchPanel />
            </View>
        </View>
    </View>
);

export default Savings;
