import React from 'react';
import { Button, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Routes from '../constants/routes';

export interface IHomeScreenProps extends NativeStackScreenProps<Record<string, never>> {}

const Home = ({ navigation }: IHomeScreenProps) => {
    return (
        <View>
            <Button title="Checking" onPress={() => navigation.navigate(Routes.checking as any)} />
            <Button title="Saving" onPress={() => navigation.navigate(Routes.saving as any)} />
        </View>
    );
};

export default Home;
