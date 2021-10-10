import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../theme/theme';
import { getUserGreetingMessage } from '../../utils';
import AccountsOverview, { IAccountsOverviewRowCard } from './AccountsOverview';

export interface IHomeProps {
    userName: string;
    accountOverviewScreens: IAccountsOverviewRowCard[];
}

const Home: React.FC<IHomeProps> = ({ userName, accountOverviewScreens }) => {
    return (
        <View style={styles.root}>
            <Text style={styles.greetingMessage}>{getUserGreetingMessage(userName)}</Text>
            <AccountsOverview accountOverviewScreens={accountOverviewScreens} />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: 15,
    },
    greetingMessage: {
        marginVertical: 20,
        fontSize: 18,
        color: theme.colors?.grey1,
    },
});

export default Home;
