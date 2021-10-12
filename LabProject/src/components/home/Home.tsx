import React from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, Text, View } from 'react-native';
import theme from '../../theme/theme';
import { getUserGreetingMessage } from '../../utils';
import AccountsOverview from './AccountsOverview';
import GoodnessCard, { IGoodnessCardProps } from './GoodnessCard';
import { ICardRowProps } from '../common/CardRow';
import Routes from '../../constants/routes';

export interface IHomeProps {
    userName: string;
    accountOverviewScreens: ICardRowProps[];
    goodnessCards: IGoodnessCardProps[];
    onHandleNavigation: (route: keyof typeof Routes) => void;
}

const Home: React.FC<IHomeProps> = ({ userName, accountOverviewScreens, goodnessCards, onHandleNavigation }) => {
    return (
        <FlatList
            style={styles.root}
            ListHeaderComponent={
                <>
                    <View style={styles.greetingContainer}>
                        <Text style={styles.greetingMessage}>{getUserGreetingMessage(userName)}</Text>
                    </View>
                    <View style={styles.accountsOverviewContainer}>
                        <AccountsOverview
                            onHandleNavigation={onHandleNavigation}
                            accountOverviewScreens={accountOverviewScreens}
                        />
                    </View>
                </>
            }
            data={goodnessCards}
            renderItem={({ item }: ListRenderItemInfo<IGoodnessCardProps>) => (
                <View style={styles.goodnessCardContainer}>
                    <GoodnessCard
                        avatarLink={item.avatarLink}
                        imageLink={item.imageLink}
                        title={item.title}
                        charityName={item.charityName}
                        time={item.time}
                        text={item.text}
                        onPressShare={item.onPressShare}
                    />
                </View>
            )}
        />
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
