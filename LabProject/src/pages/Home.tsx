import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

const Home = () => {
    return (
        <View>
            <Text h4Style={styles.testStyle} h4={true}>
                Hello World!
            </Text>
            <View style={styles.buttonContainer}>
                <Button type="solid" title="Test" />
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    testStyle: {
        fontFamily: 'SFRounded-Ultralight',
        fontWeight: 'normal',
    },
    buttonContainer: {
        padding: 20,
    },
});
