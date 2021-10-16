import React from 'react';
import { View } from 'react-native';
import AccountsSummaryDetails from './AccountsSummaryDetails';
import CardRow, { ICardRowProps } from '../common/card-row/CardRow';
import { accountsStyles as styles } from './styles';

export interface IAccountsProps {
    accountOverview: ICardRowProps[];
}

const Accounts = ({ accountOverview }: IAccountsProps) => {
    const prices: number[] = accountOverview?.map(x => x.amount) ?? [];

    return (
        <View style={styles.root}>
            <AccountsSummaryDetails prices={prices} />

            <View>
                {accountOverview && accountOverview.length
                    ? accountOverview.map(x => (
                          <View key={x.routeName} style={styles.cardRow}>
                              <CardRow {...x} rightTitleIcon={require('../../../assets/icons/back-icon.png')} />
                          </View>
                      ))
                    : null}
            </View>
        </View>
    );
};

export default Accounts;
