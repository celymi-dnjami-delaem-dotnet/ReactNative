import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';

const Home = () => {
    return (
        <View>
            <Text h4Style={styles.testStyle} h4={true}>
                Hello World!
            </Text>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    testStyle: {
        fontFamily: 'SFRounded-Ultralight',
        fontWeight: 'normal',
    },
});
