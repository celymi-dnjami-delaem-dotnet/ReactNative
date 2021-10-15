import React from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import { getUserGreetingMessage } from '../../utils';
import AccountsOverview from './AccountsOverview';
import GoodnessCard, { IGoodnessCardProps } from './GoodnessCard';
import { ICardRowProps } from '../common/card-row/CardRow';
import Routes from '../../constants/routes';
import { homeStyles as styles } from './styles';

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
                        isVideo={item.isVideo}
                        avatarLink={item.avatarLink}
                        graphLink={item.graphLink}
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

export default Home;
