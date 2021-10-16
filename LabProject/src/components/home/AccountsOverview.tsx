import React from 'react';
import { Text, View } from 'react-native';
import { getTotalPrice } from '../../utils';
import CardRow, { ICardRowProps } from '../common/card-row/CardRow';
import Routes from '../../constants/routes';
import { accountsOverviewStyles as styles } from './styles';
import TotalCash from '../total-cash/TotalCash';

export interface IAccountsOverviewProps {
    onHandleNavigation: (route: keyof typeof Routes) => void;
    accountOverviewScreens: ICardRowProps[];
}

const AccountsOverview = ({ accountOverviewScreens, onHandleNavigation }: IAccountsOverviewProps) => {
    return (
        <View style={styles.root}>
            <Text style={styles.mainHeaderTitle}>Accounts Overview</Text>
            <TotalCash
                amount={getTotalPrice(accountOverviewScreens?.map(x => x.amount))}
                titleFontSize={30}
                subTitleFontSize={18}
            />

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
