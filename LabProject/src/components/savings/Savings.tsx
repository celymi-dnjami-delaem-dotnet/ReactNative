import React from 'react';
import { Image, SectionList, View } from 'react-native';
import { savingsStyles as styles } from './styles';
import TotalCash from '../total-cash/TotalCash';
import { formatPrice, getTotalPrice } from '../../utils';
import SavingsSummary from './SavingsSummary';
import SearchPanel from '../search-panel/SearchPanel';
import { ISavingsCardRowProps } from '../../types';
import CardRow, { CardRowTextSize } from '../common/card-row/CardRow';

export interface ISavingsProps {
    amount: number;
    totalInterest: number;
    totalPoints: number;
    savingsHistoryItems: ISavingsCardRowProps[];
}

const Savings: React.FC<ISavingsProps> = ({ amount, totalInterest, totalPoints, savingsHistoryItems }) => (
    <SectionList
        style={styles.root}
        sections={savingsHistoryItems}
        renderSectionHeader={({
            section: {
                title: { date, price },
            },
        }) => (
            <View style={styles.cardRowContainer}>
                <CardRow
                    customRootStyle={[styles.cardRow, styles.firstCardRow]}
                    leftTitle={`End of balance - ${date}`}
                    amount={price}
                    textSize={CardRowTextSize.Small}
                />
            </View>
        )}
        renderItem={({ item, index, section: { data } }) => (
            <View style={styles.cardRowContainer}>
                <CardRow {...item} customRootStyle={[styles.cardRow, index === data.length - 1 && styles.endCardRow]} />
            </View>
        )}
        ListHeaderComponent={
            <React.Fragment>
                <View style={styles.header}>
                    <View style={styles.totalCash}>
                        <TotalCash amount={getTotalPrice(amount)} titleFontSize={30} subTitleFontSize={20} />
                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.graphImage}
                            source={require('../../../assets/images/savings-graph-image.png')}
                        />
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
            </React.Fragment>
        }
    />
);

export default Savings;
