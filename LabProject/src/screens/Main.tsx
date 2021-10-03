import React from 'react';
import { StyleSheet, View } from 'react-native';
import TabBar from '../components/tab-bar/TabBar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export interface IMainProps extends NativeStackScreenProps<never> {}

const Main = () => {
    return (
        <View style={styles.root}>
            <TabBar />
        </View>
    );
};

export default Main;

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});
