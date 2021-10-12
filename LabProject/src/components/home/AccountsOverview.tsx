import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../theme/theme';
import { getTotalPrice } from '../../utils';
import CardRow, { ICardRowProps } from '../common/CardRow';
import Routes from '../../constants/routes';

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

const styles = StyleSheet.create({
    root: {
        alignSelf: 'stretch',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 15,
        backgroundColor: theme.colors?.white,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: `rgba(${theme.colors.grey1Rgba},0.3)`,
    },
    mainHeaderTitle: {
        fontSize: 22,
        fontWeight: '600',
    },
    priceTitle: {
        fontSize: 30,
        marginTop: 10,
        marginBottom: 5,
    },
    priceHelperTitle: {
        color: theme.colors?.grey0,
        textTransform: 'capitalize',
    },
    cardRowContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    cardRowWithBorder: {
        borderBottomWidth: 1,
        borderBottomColor: `rgba(${theme.colors.grey1Rgba},0.3)`,
    },
    cardRowWithoutBorder: {
        borderBottomWidth: undefined,
    },
    cardRowLeft: {
        display: 'flex',
        flexDirection: 'column',
    },
    leftTitle: {
        fontSize: 18,
    },
    letTitleIcon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },
    leftSubtitle: {
        marginTop: 5,
        color: theme.colors?.grey0,
        fontSize: 14,
    },
    cardRowRight: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightTitle: {
        fontSize: 24,
        marginRight: 10,
    },
    rightIcon: {
        width: 15,
        height: 15,
        tintColor: theme.colors?.primary,
        transform: [{ rotate: '180deg' }],
    },
});

export default AccountsOverview;
