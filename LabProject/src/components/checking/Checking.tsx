import React from 'react';
import { SectionList, StyleProp, Text, View, ViewStyle } from 'react-native';
import TotalCash from '../total-cash/TotalCash';
import { getTotalPrice } from '../../utils';
import styles from './styles';
import { ICardRowListProps } from '../../types';
import CardRow from '../common/card-row/CardRow';
import SearchPanel from '../search-panel/SearchPanel';

export interface ICheckingProps {
    totalAmount: number;
    checkingOptions: ICardRowListProps[];
}

const getCardRowStyles = (index: number, data: readonly unknown[]) => {
    const cardStyles: StyleProp<ViewStyle> = [styles.cardRow];

    if (index === 0) {
        cardStyles.push(styles.firstCardRow);
    }
    if (index === data.length - 1) {
        cardStyles.push(styles.endCardRow);
    }

    return cardStyles;
};

const Checking: React.FC<ICheckingProps> = ({ totalAmount, checkingOptions }) => {
    return (
        <SectionList
            style={styles.root}
            ListHeaderComponent={() => (
                <React.Fragment>
                    <View style={styles.totalCashContainer}>
                        <TotalCash amount={getTotalPrice(totalAmount)} titleFontSize={30} subTitleFontSize={18} />
                    </View>
                    <View style={styles.searchPanelContainer}>
                        <SearchPanel />
                    </View>
                </React.Fragment>
            )}
            sections={checkingOptions}
            renderSectionHeader={({ section: { title } }) => <Text style={styles.sectionHeader}>{title}</Text>}
            renderItem={({ item, index, section: { data } }) => (
                <CardRow {...item} customRootStyle={getCardRowStyles(index, data)} />
            )}
        />
    );
};

export default Checking;
