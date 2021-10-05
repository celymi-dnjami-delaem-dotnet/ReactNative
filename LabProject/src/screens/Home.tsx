import React from 'react';
import { Button, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Routes from '../constants/routes';

export interface IHomeScreenProps extends NativeStackScreenProps<Record<string, never>> {}

const Home: React.FC<IHomeScreenProps> = ({ navigation }) => {
    const randomItem = Math.floor(Math.random() * 100);

    return (
        <View>
            <Button
                title="Checking"
                onPress={() =>
                    // @ts-ignore
                    navigation.navigate(Routes.checking, {
                        pageName: Routes.checking,
                        title: `By a house ${randomItem}`,
                    })
                }
            />
            <Button
                title="Saving"
                onPress={() =>
                    // @ts-ignore
                    navigation.navigate(Routes.saving, {
                        pageName: Routes.saving,
                        title: `Main Account ${randomItem}`,
                    })
                }
            />
        </View>
    );
};

export default Home;
