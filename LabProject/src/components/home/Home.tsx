import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import theme from '../../theme/theme';
import { getUserGreetingMessage } from '../../utils';
import AccountsOverview, { IAccountsOverviewRowCard } from './AccountsOverview';
import GoodnessCard, { IGoodnessCardProps } from './GoodnessCard';

export interface IHomeProps {
    userName: string;
    accountOverviewScreens: IAccountsOverviewRowCard[];
    goodnessCards: IGoodnessCardProps[];
}

const Home: React.FC<IHomeProps> = ({ userName, accountOverviewScreens, goodnessCards }) => {
    return (
        <ScrollView style={styles.root}>
            <View style={styles.greetingContainer}>
                <Text style={styles.greetingMessage}>{getUserGreetingMessage(userName)}</Text>
            </View>
            <View style={styles.accountsOverviewContainer}>
                <AccountsOverview accountOverviewScreens={accountOverviewScreens} />
            </View>
            {goodnessCards && goodnessCards.length
                ? goodnessCards.map((gC, index) => (
                      <View style={styles.goodnessCardContainer} key={index}>
                          <GoodnessCard
                              avatarLink={gC.avatarLink}
                              imageLink={gC.imageLink}
                              title={gC.title}
                              charityName={gC.charityName}
                              time={gC.time}
                              text={gC.text}
                              onPressShare={gC.onPressShare}
                          />
                      </View>
                  ))
                : null}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: 15,
        marginTop: 20,
    },
    greetingContainer: {
        marginBottom: 20,
    },
    greetingMessage: {
        fontSize: 18,
        color: theme.colors?.grey1,
    },
    accountsOverviewContainer: {
        marginBottom: 20,
    },
    goodnessCardContainer: {
        marginBottom: 10,
    },
});

export default Home;
