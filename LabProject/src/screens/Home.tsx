import React from 'react';
import { StyleSheet, View } from 'react-native';
import TopBar from '../components/tab-bar/TopBar';

const Home = () => {
    return (
        <View style={styles.root}>
            <TopBar />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});
