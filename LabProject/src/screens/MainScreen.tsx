import React from 'react';
import { StyleSheet, View } from 'react-native';
import TabBar from '../components/tab-bar/TabBar';

const MainScreen = () => (
    <View style={styles.root}>
        <TabBar />
    </View>
);

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});

export default MainScreen;
