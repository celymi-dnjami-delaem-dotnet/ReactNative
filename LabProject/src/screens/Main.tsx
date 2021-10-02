import React from 'react';
import { StyleSheet, View } from 'react-native';
import TopBar from '../components/top-bar/TopBar';
import TabBar from '../components/tab-bar/TabBar';

const Main = () => {
    return (
        <View style={styles.root}>
            <TopBar />
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
