import React from 'react';
import { View } from 'react-native';
import AccountsSummaryDetails from './AccountsSummaryDetails';
import CardRow, { ICardRowProps } from '../common/card-row/CardRow';
import { accountsStyles as styles } from './styles';
import Routes from '../../constants/routes';

export interface IAccountsProps {
    accountOverview: ICardRowProps[];
    onHandleNavigation: (route: keyof typeof Routes) => void;
}

const Accounts = ({ accountOverview, onHandleNavigation }: IAccountsProps) => {
    const prices: number[] = accountOverview?.map(x => x.amount) ?? [];

    return (
        <View style={styles.root}>
            <AccountsSummaryDetails prices={prices} />

            <View>
                {accountOverview && accountOverview.length
                    ? accountOverview.map(x => {
                          const onPress = (): void => {
                              onHandleNavigation(x.routeName as keyof typeof Routes);
                          };

                          return (
                              <View key={x.routeName} style={styles.cardRow}>
                                  <CardRow
                                      {...x}
                                      onPress={onPress}
                                      rightIcon={require('../../../assets/icons/back-icon.png')}
                                  />
                              </View>
                          );
                      })
                    : null}
            </View>
        </View>
    );
};

export default Accounts;
