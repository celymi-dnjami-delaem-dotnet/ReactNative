import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getUserGreetingMessage } from '../utils';
import theme from '../theme/theme';

export interface IHomeScreenProps extends NativeStackScreenProps<Record<string, never>> {}

const HomeScreen: React.FC<IHomeScreenProps> = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.greetingMessage}>{getUserGreetingMessage('Test')}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: 15,
    },
    greetingMessage: {
        marginVertical: 20,
        fontSize: 18,
        color: theme.colors?.grey1,
    },
});

export default HomeScreen;
