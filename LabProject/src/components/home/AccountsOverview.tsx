import React from 'react';
import { Text, View } from 'react-native';
import { getTotalPrice } from '../../utils';
import CardRow, { ICardRowProps } from '../common/card-row/CardRow';
import Routes from '../../constants/routes';
import { accountsOverviewStyles as styles } from './styles';

export interface IAccountsOverviewProps {
    onHandleNavigation: (route: keyof typeof Routes) => void;
    accountOverviewScreens: ICardRowProps[];
}

const AccountsOverview = ({ accountOverviewScreens, onHandleNavigation }: IAccountsOverviewProps) => {
    return (
        <View style={styles.root}>
            <Text style={styles.mainHeaderTitle}>Accounts Overview</Text>
            <Text style={styles.priceTitle}>{getTotalPrice(accountOverviewScreens?.map(x => x.amount))}</Text>
            <Text style={styles.priceHelperTitle}>Total available cash</Text>

            {accountOverviewScreens && accountOverviewScreens.length
                ? accountOverviewScreens.map((x, index) => {
                      const onPress = (): void => {
                          onHandleNavigation(x.routeName as keyof typeof Routes);
                      };

                      return (
                          <CardRow
                              {...x}
                              key={index}
                              customRootStyle={
                                  index === accountOverviewScreens.length - 1
                                      ? styles.cardRowWithoutBorder
                                      : styles.cardRowWithBorder
                              }
                              rightTitleIcon={require('../../../assets/icons/back-icon.png')}
                              onPress={onPress}
                          />
                      );
                  })
                : null}
        </View>
    );
};

export default AccountsOverview;
